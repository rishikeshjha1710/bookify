"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

// --- CONFIG ---
const PAYMENT_URL = "https://rzp.io/rzp/To6NQitn";

export default function App() {
  // mounted guard to avoid SSR/CSR mismatch
  const [mounted, setMounted] = useState(false);

  // single unified countdown (1h30m) - deterministic initial value
  const initialTime = 1 * 60 * 60 + 30 * 60; // 5400 seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // price logic: will increase when timer ends
  const basePrice = 249;
  const increasedPrice = 499;
  const [price, setPrice] = useState(basePrice);
  const [priceIncreased, setPriceIncreased] = useState(false);

  // sold counter + copies left (scarcity) — initialize only on client to avoid mismatch
  const [soldCount, setSoldCount] = useState(null);
  const [soldTarget, setSoldTarget] = useState(null);
  const [copiesLeft, setCopiesLeft] = useState(null);

  // CTA copy
  const ctaTextLong = "⚡Unlock My Wealth Code Now →";
  const ctaTextShort = "⚡Unlock My Wealth Code Now →";
  const ctaAria = "⚡Unlock My Wealth Code Now →";

  // live purchase rotating toast (green)
  const recentPurchases = [
    "💸 Aman from Delhi unlocked The Wealth Reprogramming Code · 2m ago",
    "🔥 Priya from Mumbai claimed her Diwali bonus · 4m ago",
    "✨ Karan from Jaipur reprogrammed his mindset · just now",
    "⚡ Aditi from Pune secured lifetime access · 1m ago",
    "💰 Rohit from Lucknow started his wealth journey · 3m ago",
    "🔥 Neha from Indore took the first step to abundance · 2m ago",
    "💥 Rahul from Chandigarh downloaded his guide · 4m ago",
    "💫 Sanya from Delhi joined 12,000+ learners · just now",
    "💎 Mohit from Surat claimed his Wealth Code · 1m ago",
    "🌟 Harshit from Patna joined the success tribe · 2m ago",
    "🔥 Isha from Hyderabad unlocked lifetime access · 3m ago",
    "💰 Abhishek from Bhopal reprogrammed his mindset · 4m ago",
    "⚡ Tanya from Pune started her financial journey · just now",
    "💫 Krish from Ahmedabad took action · 1m ago",
    "💸 Meena from Chennai grabbed the Diwali offer · 2m ago",
    "🔥 Yash from Kolkata joined the inner circle · 3m ago",
    "💎 Sneha from Delhi unlocked The Code · just now",
    "💰 Aditya from Nagpur claimed the bonus pack · 1m ago",
    "✨ Tanya from Pune joined 14,000+ learners · 3m ago",
    "⚡ Raj from Lucknow started his wealth shift · 2m ago",
    "🔥 Ananya from Jaipur reprogrammed her beliefs · just now",
    "💎 Vikram from Bangalore unlocked The Wealth Code · 1m ago",
    "💫 Shreya from Mumbai grabbed lifetime access · 3m ago",
    "💸 Aman from Chennai started abundance reprogramming · just now",
    "⚡ Priya from Hyderabad took the first step to success · 2m ago",
    "🔥 Rohan from Delhi joined 14,500+ members · 1m ago",
    "💰 Anika from Pune claimed her bonus guide · 3m ago",
    "✨ Sameer from Lucknow started wealth transformation · just now",
    "💎 Pooja from Kolkata unlocked her first code · 2m ago",
    "🔥 Arjun from Ahmedabad grabbed his copy · 4m ago",
    "💫 Simran from Jaipur took action towards freedom · 1m ago",
    "⚡ Nikhil from Surat joined the movement · 2m ago",
    "💰 Riya from Mumbai reprogrammed her mindset · 3m ago",
    "💸 Aditya from Delhi grabbed the lifetime offer · just now",
    "🔥 Tanya from Hyderabad unlocked her first Wealth Code · 1m ago",
    "💎 Mohit from Bangalore began his journey to financial freedom · 2m ago",
    "✨ Ananya from Delhi joined the Wealth Tribe · just now",
    "⚡ Kiran from Pune started his mindset shift · 1m ago",
    "🔥 Rhea from Mumbai joined 15,000+ learners · 3m ago",
    "💫 Arjun from Lucknow claimed the Diwali bonus · 2m ago",
    "💰 Shreya from Chennai unlocked her success code · just now",
    "💎 Rahul from Kolkata took the first step · 1m ago",
    "⚡ Priya from Jaipur joined the inner circle · 2m ago",
    "🔥 Aman from Hyderabad reprogrammed his beliefs · 3m ago",
    "💫 Meena from Bangalore grabbed lifetime access · 2m ago",
    "💸 Tanu from Delhi started her journey to abundance · just now",
    "⚡ Rohan from Pune unlocked his mindset code · 1m ago",
    "💎 Isha from Lucknow joined the Wealth Revolution · 3m ago",
    "💰 Sanya from Kolkata grabbed her bonus copy · 2m ago",
    "🔥 Karan from Ahmedabad joined 15,200+ learners · just now",
    "💎 Aditya from Mumbai reprogrammed his subconscious · 1m ago",
    "💫 Neha from Delhi unlocked her transformation guide · 2m ago",
    "⚡ Krish from Jaipur took action toward success · 3m ago",
    "💰 Riya from Hyderabad joined the winning circle · just now",
    "💎 Vikram from Pune started his abundance shift · 2m ago"
  ];

  const [activePurchaseIndex, setActivePurchaseIndex] = useState(0);
  const [showLiveToast, setShowLiveToast] = useState(true);

  // refs for intervals so we can cleanup safely
  const mainTimerRef = useRef(null);
  const purchaseRotateRef = useRef(null);
  const soldAnimRef = useRef(null);
  const copiesRef = useRef(null);

  // mount-time initialisation (client-only)
  useEffect(() => {
    setMounted(true);

    // initialize client-only random values here
    setSoldCount(9800);
    setSoldTarget(10000 + Math.floor(Math.random() * 800)); // client-only randomness
    setCopiesLeft(30 + Math.floor(Math.random() * 20));

    // start main countdown only on client
    mainTimerRef.current = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1));
    }, 1000);

    // rotate live purchase messages
    purchaseRotateRef.current = setInterval(() => {
      setActivePurchaseIndex((i) => (i + 1) % recentPurchases.length);
      setShowLiveToast(true);
      setTimeout(() => setShowLiveToast(false), 3500);
    }, 4500);

    return () => {
      clearInterval(mainTimerRef.current);
      clearInterval(purchaseRotateRef.current);
      clearInterval(soldAnimRef.current);
      clearInterval(copiesRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when countdown hits zero, increase price and update flags (runs on client)
  useEffect(() => {
    if (!mounted) return;
    if (timeLeft === 0 && !priceIncreased) {
      setPrice(increasedPrice);
      setPriceIncreased(true);
    }
  }, [timeLeft, priceIncreased, mounted]);

  // animate soldCount up to target slowly (client-only)
  useEffect(() => {
    if (!mounted) return;
    if (soldCount === null || soldTarget === null) return;

    // do not start if already at/over target
    if (soldCount >= soldTarget) return;

    soldAnimRef.current = setInterval(() => {
      setSoldCount((c) => {
        const diff = soldTarget - c;
        const inc = diff > 50 ? Math.floor(Math.max(1, diff * 0.03)) : 1;
        return Math.min(soldTarget, c + inc);
      });
    }, 600);

    return () => clearInterval(soldAnimRef.current);
  }, [mounted, soldCount, soldTarget]);

  // slowly decrement copiesLeft to simulate purchases (client-only)
  useEffect(() => {
    if (!mounted) return;
    if (copiesLeft === null) return;

    copiesRef.current = setInterval(() => {
      setCopiesLeft((p) => Math.max(1, p - (Math.random() < 0.06 ? 1 : 0)));
    }, 6000);

    return () => clearInterval(copiesRef.current);
  }, [mounted, copiesLeft]);

  // handle purchase - must run client-side
  const handlePurchase = () => {
    if (typeof window === "undefined") return;
    // open payment
    window.open(PAYMENT_URL, "_blank");

    // update simulated counts (only if client has initialised)
    setSoldCount((c) => (c === null ? 1 : c + 1));
    setCopiesLeft((p) => (p === null ? 0 : Math.max(0, p - 1)));

    // show a quick live-toast effect (reuses existing live toast logic)
    setShowLiveToast(true);
    setTimeout(() => setShowLiveToast(false), 2500);
  };

  // format hh:mm:ss
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  // Styles: 3D-like hero glow, safe transforms, continuous button glow, mobile thumb-friendly button
  const customStyles = `
    :root { --gold: #F5B800; --charcoal: #0d1117; --green: #34d399; }

    .premium-bg { background-color: var(--charcoal); }
    .gold-accent { color: var(--gold); }

    /* Add bottom padding so fixed mobile CTA doesn't cover content */
    main { padding-bottom: 120px; }

    /* HERO visual wrapper with 3D-like animated halo (safe transforms only) */
    .hero-visual {
      position: relative;
      border-radius: 18px;
      padding: 12px;
      overflow: visible; /* allow glow to show without affecting layout height */
      isolation: isolate;
      perspective: 1100px; /* enables subtle 3d feel on the child */
    }

    /* large soft halo - uses transform (no layout growth) */
    .hero-visual::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 45%;
      width: 84%;
      height: 68%;
      transform: translate(-50%, -50%) scale(1);
      border-radius: 50%;
      background: radial-gradient(closest-side, rgba(245,184,0,0.22), rgba(245,184,0,0.12) 30%, transparent 55%);
      filter: blur(36px) saturate(1.05);
      z-index: -2;
      pointer-events: none;
      transition: transform 0.45s ease, opacity 0.45s ease;
      animation: haloFloat 6.5s ease-in-out infinite;
    }

    /* layered animated streaks for '3D lines' */
    .hero-visual::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 18px;
      background-image:
        radial-gradient(circle at 10% 12%, rgba(245,184,0,0.03), transparent 6%),
        radial-gradient(circle at 90% 80%, rgba(245,184,0,0.02), transparent 8%),
        linear-gradient(120deg, rgba(245,184,0,0.02), transparent 40%);
      filter: blur(8px);
      z-index: -3;
      pointer-events: none;
      animation: streakShift 12s linear infinite;
      opacity: 0.95;
    }

    @keyframes haloFloat {
      0% { transform: translate(-50%, -50%) scale(1) translateY(0); }
      50% { transform: translate(-50%, -50%) scale(1.03) translateY(-6px); }
      100% { transform: translate(-50%, -50%) scale(1) translateY(0); }
    }

    @keyframes streakShift {
      0% { transform: translateX(0) rotate(0deg); opacity: 0.95; }
      50% { transform: translateX(-6px) rotate(0.3deg); opacity: 0.98; }
      100% { transform: translateX(0) rotate(0deg); opacity: 0.95; }
    }

    /* Book cover 3D-ish lift (transform only) - preserve-3d not strictly required but keep safe */
    .book-cover {
      position: relative;
      overflow: visible;
      border-radius: 12px;
      transform-style: preserve-3d;
      transition: transform 0.35s cubic-bezier(.2,.9,.2,1), box-shadow 0.35s ease;
      will-change: transform;
      z-index: 2;
    }

    .book-cover:hover {
      transform: translateY(-12px) rotateY(1.6deg) scale(1.06);
      box-shadow: 0 60px 120px rgba(0,0,0,0.92), 0 0 120px rgba(245,184,0,0.25);
    }

    /* subtle inner glow on cover (so it feels 3d) */
    .book-cover::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 12px;
      box-shadow: inset 0 10px 80px rgba(245,184,0,0.04);
      pointer-events: none;
      z-index: 1;
    }

    /* timer container: centered block */
    .timer-box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin-top: 18px;
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      padding: 12px 14px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.04);
      width: 100%;
    }

    .timer-label { color: #f3f4f6; font-weight: 700; margin-right: 12px; font-size: 14px; }
    .timer-count { font-weight: 900; color: var(--gold); font-size: 22px; letter-spacing: 1px; }

    /* price + compact CTA row under timer */
    .price-cta-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-top: 12px;
      width: 100%;
    }

    /* price display separate from button */
    .price-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.04);
      padding: 10px 14px;
      border-radius: 12px;
      font-weight: 900;
      font-size: 28px;
      color: var(--gold);
    }
    .price-chip .currency { font-size: 20px; margin-right: 6px; }

    /* compact CTA: auto width (only as wide as content) */
    .cta-compact {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px 20px;
      border-radius: 12px;
      font-weight: 900;
      letter-spacing: 0.4px;
      background: linear-gradient(90deg,#ffd24a,#f5b800 60%);
      color: #0b0b0b;
      box-shadow: 0 8px 28px rgba(245,184,0,0.12), 0 2px 6px rgba(0,0,0,0.5);
      transition: transform 0.16s ease, box-shadow 0.16s ease;
      white-space: nowrap;
      overflow: hidden; /* important to prevent pseudo-element overflow */
      z-index: 1100;
    }
    .cta-compact:hover { transform: translateY(-3px); filter: saturate(1.04); }

    /* continuous internal glow inside the button (no external overflow) */
     .cta-gold-fill:hover { background-color: #f0b400; transform: scale(1.05); }
    @keyframes pulse-gold {
      0%,100% { box-shadow: 0 0 0 0 rgba(255,195,0,0.7); }
      50% { box-shadow: 0 0 0 10px rgba(255,195,0,0); }
    }
    .pulse-effect { animation: pulse-gold 2s infinite; }
    .book-cover {
      box-shadow: 0 25px 60px rgba(0,0,0,1), 0 0 45px rgba(255,195,0,0.7);
      transition: all 0.4s ease-in-out;
      transform-style: preserve-3d;
    }
    .book-cover:hover {
      transform: scale(1.04) rotateY(3deg);
      box-shadow: 0 30px 70px rgba(0,0,0,0.9), 0 0 55px rgba(255,195,0,0.9);
    }

    /* mobile: place CTA near thumb (fixed bottom center), full width */
    @media (max-width: 640px) {
      .price-cta-row { flex-direction: column; gap: 10px; align-items: stretch; }
      .price-chip { justify-content: center; width: 100%; font-size: 22px; padding: 12px; }
      .cta-compact {
        position: fixed;
        bottom: 18px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% - 36px);
        max-width: 920px;
        border-radius: 9999px;
        padding: 14px;
      }
      /* avoid fixed CTA overlapping content: main has extra bottom padding set above */
    }

    /* keep everything accessible for reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .hero-visual::before, .hero-visual::after, .cta-compact::before, .book-cover { animation: none; transition: none; }
    }

    /* live purchase toast positioning + responsive override */
    #live-toast {
      z-index: 1200;
      left: 18px;
      bottom: 22px;
      transform: translateY(120%);
      transition: transform 0.45s cubic-bezier(.2,.8,.2,1), opacity 0.3s;
      opacity: 0;
      pointer-events: none;
    }
    #live-toast.show {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    /* mobile override: center and lift the toast so it sits above the fixed CTA */
    @media (max-width: 640px) {
      #live-toast {
        left: 50% !important;
        bottom: 86px !important; /* place above the mobile CTA */
        transform: translate(-50%, 120%);
        width: calc(100% - 40px);
        text-align: center;
        border-radius: 9999px;
        padding: 10px 14px;
      }
      #live-toast.show {
        transform: translate(-50%, 0);
      }
    }
  `;

  // Render: show placeholders for SSR until mounted === true
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <div className="premium-bg text-gray-200 min-h-screen flex flex-col">
        {/* Live purchase toast bottom-left (green) */}
        <div
          id="live-toast"
          className={`fixed p-3 rounded-lg bg-black border border-gray-800 shadow-lg ${showLiveToast ? "show" : ""}`}
          style={{ left: 18, bottom: 22 }}
        >
          <div className="flex items-center space-x-3">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <div>
              <p className="text-xs text-gray-400">Live activity</p>
              <p className="text-sm font-semibold text-white">{recentPurchases[activePurchaseIndex]}</p>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="w-full p-4 sm:p-6 border-b border-gray-800 sticky top-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <a href="#" className="flex items-center space-x-2">
                <svg className="w-7 h-7 gold-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6.253v13M12 10.253c-4.97 0-9 1.13-9 2.5s4.03 2.5 9 2.5 9-1.13 9-2.5-4.03-2.5-9-2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  <span className="gold-accent">Book</span><span className="text-white">ify</span>
                </div>
              </a>
              <div className="ml-4 hidden sm:flex items-center px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
                <span className="text-xs text-green-400 mr-3">🔥</span>
                <div className="text-xs text-gray-300 font-semibold">{mounted && soldCount !== null ? soldCount.toLocaleString() + "+ downloads last week" : "— downloads last week"}</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">Diwali Launch • Limited Bonuses</div>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 flex-grow w-full">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start w-full">
            {/* Left column: visual & CTA */}
            <div className="flex flex-col items-center lg:items-end order-1 lg:order-2 w-full">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-2">
                <div className="hero-visual rounded-xl">
                  <div className="book-cover rounded-xl overflow-hidden relative">
                    <Image src="/Banner.png" alt="Wealth Reprograming Code Book Cover" width={600} height={400} className="w-full h-auto object-cover" />
                    <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 bg-gray-900 text-white rounded-full tracking-wider opacity-90 border border-gold-accent">
                      Blueprint Series
                    </span>

                    {/* copies left badge on top-right of image */}
                    <div className="absolute top-3 right-3 scarcity-badge flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a1 1 0 01.894.553l4 8A1 1 0 0114 12H6a1 1 0 01-.894-1.447l4-8A1 1 0 0110 2z" /></svg>
                      <div>
                        <div className="text-xs text-gray-300">Only</div>
                        <div className="text-sm font-semibold text-white">{mounted && copiesLeft !== null ? `${copiesLeft} copies left` : "\u2014"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* timer centered under image */}
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="timer-box">
                  <div className="timer-label">⏳ Limited Price Lock:</div>
                  <div className="timer-count">{formatTime(timeLeft)}</div>
                </div>

                {/* price + compact CTA row */}
                <div className="price-cta-row">
                  <div className="price-chip" aria-hidden>
                    <span className="currency">₹</span>
                    <span className="amount">{price}</span>
                  </div>
                  <button
  onClick={handlePurchase}
  aria-label={ctaAria}
  title="Buy now"
  className="cta-compact w-full sm:w-auto flex-grow py-3 sm:py-4 px-0.5 text-sm sm:text-base font-black uppercase rounded-xl transition duration-300
             fixed bottom-2 left-0 sm:static sm:bottom-auto sm:left-auto z-50
             bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-gray-900 shadow-lg hover:shadow-2xl transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-70 pulse-effect"
>
  <span className="flex items-center justify-center space-x-1">
    <span>
      <b>
        <span className="hidden sm:inline font-black">{ctaTextLong}</span>
      </b>
      <span className="sm:hidden font-black text-sm">⚡Unlock My Wealth Code Now →</span>
    </span>
  </span>
</button>



                </div>

                <p className="text-center lg:text-right text-xs mt-2 text-gray-500">
                  Instant download & bonuses applied automatically. Money-back guarantee.
                </p>
              </div>
            </div>

            {/* Right column: details */}
            <div className="order-2 lg:order-1">
              <p className="text-xs sm:text-sm uppercase font-bold tracking-widest gold-accent mb-2">Financial Mindset / Transformational Strategy</p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
                <span className="text-white">Wealth Reprograming</span> <span className="gold-accent">Code</span>
              </h1>

              <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6 sm:mb-8">
                Unlock your unstoppable financial blueprint. The difference between struggling and soaring is simply your internal code.
              </h2>

              <div className="mb-6 border-l-4 border-gray-700 pl-4">
                <p className="text-lg sm:text-xl font-medium text-gray-400">Authored by <span className="gold-accent font-extrabold">Mr. X</span></p>
                <p className="text-xs sm:text-sm mt-1 text-gray-500">Creator of The Financial Freedom Framework™</p>
              </div>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed border-l-4 border-gold-accent pl-4">
                Stop reacting to your money and start commanding it. This book reveals the hidden psychological “code” that governs 90% of wealth success. Learn to rewrite old, limiting beliefs immediately and install a new, powerful financial operating system for guaranteed transformation.
              </p>

              <h2 className="text-lg sm:text-xl font-extrabold mb-4 gold-accent">What You Will Reprogram:</h2>

              <div className="grid grid-cols-2 gap-4 text-sm mb-10 text-gray-400">
                <FeatureItem text="7 Hidden Beliefs That Keep You Struggling With Money" />
                <FeatureItem text="Upgrade Your Mindset: From Scarcity to Abundance" />
                <FeatureItem text="Earn While You Sleep: Secrets of Automated Wealth" />
                <FeatureItem text="Spot High-Value Opportunities Before Everyone Else" />
              </div>
            </div>
          </div>

          {/* Trust & social proof */}
          <section className="mt-12 sm:mt-16 py-8 sm:py-12 border-t border-gray-800">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 text-white">
              Trusted by Achievers. <span className="gold-accent">Proven Results.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <TestimonialCard
                quote={"This book isn’t theory; it’s a financial operating system update. My entire approach to money shifted from scarcity to abundance. Highly recommended."}
                name={"Rahul S."}
                role={"Software Architect"}
                stars={5}
              />

              <TestimonialCard
                quote={"I finally understood the ‘why’ behind my money habits. Mr. X’s “Code” is the simplest, most direct blueprint for building sustainable wealth I’ve ever read."}
                name={"Priya M."}
                role={"E-commerce Founder"}
                stars={5}
              />

              <TestimonialCard
                quote={"It felt like my brain was getting rewired line by line. After applying the methods for just 10 days, I started saving effortlessly and attracting new income sources."}
                name={"Aman T."}
                role={"Finance Analyst"}
                stars={5}
              />

              <TestimonialCard
                quote={"This isn’t motivation — it’s reprogramming. I went from paycheck anxiety to building a side business that made ₹80,000 last month."}
                name={"Sneha K."}
                role={"Marketing Consultant"}
                stars={5}
              />

              <TestimonialCard
                quote={"Every page unlocked a deep truth about wealth and mindset. I wish I had this book five years ago."}
                name={"Arjun R."}
                role={"Startup Founder"}
                stars={4}
              />

              <TestimonialCard
                quote={"I used to chase money. Now money flows to me — I can literally feel the shift in my thinking. The Code works."}
                name={"Tanya B."}
                role={"Designer & Creator"}
                stars={5}
              />

              <TestimonialCard
                quote={"You can’t read this and stay the same. Within a week, I attracted two freelance clients just by applying the belief rewiring part."}
                name={"Harshit G."}
                role={"Freelancer"}
                stars={5}
              />

              <TestimonialCard
                quote={"The practical exercises at the end of each chapter hit deep. This is not motivation fluff — it’s transformation engineering."}
                name={"Vikram P."}
                role={"Entrepreneur"}
                stars={5}
              />

              <TestimonialCard
                quote={"I’ve read every self-help book out there, but nothing integrated mindset and wealth like this. It’s pure subconscious mastery."}
                name={"Neha S."}
                role={"Chartered Accountant"}
                stars={5}
              />

              <TestimonialCard
                quote={"My energy, focus, and confidence in business have completely changed. It’s more than a book — it’s a mental reset."}
                name={"Ananya J."}
                role={"Digital Marketer"}
                stars={5}
              />

              <TestimonialCard
                quote={"At first, I was skeptical. Now, after 21 days, I feel calmer, wealthier, and more in control than ever. This book is magic in logic form."}
                name={"Karan D."}
                role={"Civil Engineer"}
                stars={4}
              />

              <TestimonialCard
                quote={"From being stuck in debt to building new income streams — this book literally changed my financial vibration."}
                name={"Riya V."}
                role={"Content Creator"}
                stars={5}
              />

              <TestimonialCard
                quote={"I sent this book to my brother — both of us started implementing it. Within two weeks, our decisions started aligning automatically with abundance."}
                name={"Aditya N."}
                role={"UX Designer"}
                stars={5}
              />

            </div>
          </section>

          {/* Guarantee */}
          <section className="mt-8 sm:mt-12 py-8 sm:py-12 bg-gray-900 rounded-xl text-center border-2 border-green-700 p-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Your <span className="text-green-400">100% Risk-Free</span> Guarantee
            </h3>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400">
              We are so confident that the Wealth Reprograming Code will transform your finances that we offer a full 30-day money-back guarantee. If you don’t feel you’ve unlocked a new financial blueprint, you get your ₹ {basePrice} back. No questions asked.
            </p>
          </section>
        </main>

        <footer className="p-4 text-center text-gray-600 text-xs mt-auto border-t border-gray-900">
          &copy; 2025 Bookify Publishing. All rights reserved. | Total Download Size: 1.3 MB (E-Pub / PDF).
        </footer>
      </div>
    </>
  );
}

// helper components
const FeatureItem = ({ text }) => (
  <div className="flex items-start space-x-2">
    <span className="text-green-400 text-xl">&#x2713;</span>
    <p className="text-gray-400 text-sm">{text}</p>
  </div>
);
const TestimonialCard = ({ quote, name, role, stars = 5 }) => {
  // Create star icons dynamically based on rating
  const renderStars = () => {
    return Array.from({ length: stars }, (_, i) => (
      <span key={i} className="text-yellow-400 text-lg sm:text-xl animate-pulse">
        ⭐
      </span>
    ));
  };

  return (
    <div className="p-5 sm:p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition duration-300">
      {/* Quote Symbol */}
      <div className="text-5xl sm:text-6xl text-yellow-600 mb-3 font-serif leading-none">“</div>

      {/* Quote Text */}
      <p className="text-base sm:text-lg italic text-gray-300 mb-5 leading-relaxed">
        “{quote}”
      </p>

      {/* Bottom Section */}
      <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-yellow-400">{name}</p>
          <p className="text-xs sm:text-sm text-gray-500">{role}</p>
        </div>

        {/* Stars */}
        <div className="mt-3 sm:mt-0 flex space-x-1">{renderStars()}</div>
      </div>
    </div>
  );
};
