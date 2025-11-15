/*
Next.js + Tailwind Landing Page (JavaScript)
Updated: Refined hero (text left, landscape banner right), large single CTA, mobile thumb-friendly sticky CTA, no "Save for later",
butterfly decorative animation, and toasts kept separate.
Place your assets in /public:
 - /banner.jpg       (landscape banner used in hero right)
 - /cover.jpg        (book cover - still used elsewhere if needed)
 - /logo.png         (brand logo)
 - /author.jpg       (author photo)

Add the CSS block at the end to globals.css for animations.
*/
"use client"

import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const brand = 'Bookify';
  const email = 'offers@bookifie.in';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FBE9E7] via-[#FFF7F3] to-[#F3F9FB] text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header brand={brand} />

        {/* LANDSCAPE BANNER (compact, right-side hero) */}
        <Hero email={email} />

        <WhatYoullFeel />
        <InsidePreview />
        <ReaderVoices />
        <Pricing email={email} />
        <Author />
        <FAQ />
        <Footer brand={brand} email={email} />
      </div>

      <StickyCTA />
      <LiveToasts />
      <Butterflies />
    </div>
  );
}

function Header({ brand }) {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full overflow-hidden shadow">
          <img src="/log.png" alt={`${brand} logo`} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <div className="font-extrabold text-base sm:text-lg">{brand}</div>
          <div className="text-xs text-gray-500">The Cheating Detector</div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a href="#testimonials" className="text-sm text-gray-700 hover:underline">Reader stories</a>
        <a href="#buy" className="bg-gradient-to-r from-[#FF8A80] to-[#4FC3F7] text-white px-4 py-2 rounded-full text-sm font-semibold shadow">Buy — ₹299</a>
      </div>
    </header>
  );
}

function Hero({ email }) {
  return (
    <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* TEXT COLUMN (left) */}
      <div className="order-2 lg:order-1">
        <span className="px-3 py-1 rounded-full bg-[#FFEDEB] text-[#D32F2F] text-xs font-semibold">NEW — Emotional Edition</span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#3b2f2f]">You Lost Me — When I Found Myself</h1>
        <p className="mt-4 text-gray-700 max-w-xl text-sm sm:text-base">A tender, evidence-informed guide for healing after betrayal — warm storytelling, practical rituals, and conversation scripts that protect your heart and restore clarity.</p>

        <div className="mt-6">
          {/* Large primary CTA — prominent and ideal size */}
          <a href="#buy" className="inline-block w-full sm:w-auto text-center bg-gradient-to-r from-[#FF8A80] to-[#4FC3F7] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-102 transition transform">Get the Book — ₹299</a>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 max-w-sm">
          <MiniStat label="Readers" value="12k+" />
          <MiniStat label="Rating" value="4.8/5" />
          <MiniStat label="Support" value="Priority" />
        </div>
      </div>

      {/* BANNER COLUMN (right) - landscape banner, not the cover */}
      <div className="order-1 lg:order-2 flex items-center justify-center">
        <div className="w-full max-w-[680px] lg:max-w-[560px]">
          <div className="aspect-[16/9] bg-gradient-to-br from-[#FFF1EE] to-[#EAF8FF] rounded-2xl overflow-hidden shadow-2xl">
            <img src="/moveon.jpg" alt="You Lost Me banner" className="w-full h-full object-cover" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="bg-white p-2 sm:p-3 rounded-lg shadow text-center">
      <div className="font-semibold text-sm sm:text-base">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}

function WhatYoullFeel() {
  const points = [
    'Calmer — practical steps to manage grief and anger',
    'Clearer — scripts to ask difficult questions safely',
    'Safer — a safety-first approach if you feel vulnerable',
    'Connected — ways to rebuild real intimacy or set boundaries'
  ];
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold text-[#3b2f2f] text-center">What you’ll feel after reading</h3>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {points.map((p, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow-sm flex items-start gap-3">
            <div className="mt-1 text-[#FF8A80] font-bold">●</div>
            <div className="text-gray-700 text-sm">{p}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InsidePreview() {
  const cards = [
    { title: 'Trigger Maps', desc: 'Recognize layered signs before they become patterns.' },
    { title: 'Conversation Recipes', desc: 'Invite clarity without blame — scripts that protect rather than accuse.' },
    { title: 'Repair Rituals', desc: 'Daily micro-actions that rebuild trust or your self-worth.' }
  ];
  return (
    <section id="inside" className="mt-12">
      <h3 className="text-2xl font-bold text-center text-[#3b2f2f]">Inside the book</h3>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
        {cards.map((c, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="font-semibold text-[#4FC3F7]">{c.title}</div>
            <p className="mt-2 text-gray-700 text-sm">{c.desc}</p>
            <blockquote className="mt-4 italic text-sm text-gray-600">“Small rituals, big peace.”</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}

function ReaderVoices() {
  const people = [
    { name: 'Priya', quote: 'I finally had language for what I felt. This book held my hand.' },
    { name: 'Omar', quote: 'It turned suspicion into a calm conversation. We started repairing.' },
    { name: 'Meera', quote: 'The rituals are small but transformative.' },
    { name: 'Ankit', quote: 'Readable, compassionate, and practical.' }
  ];

  return (
    <section id="testimonials" className="mt-12">
      <h3 className="text-2xl font-bold text-center text-[#3b2f2f]">Reader voices</h3>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        {people.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <p className="italic text-gray-700">“{p.quote}”</p>
            <div className="mt-3 text-sm text-gray-600">— {p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing({ email }) {
  const SALE = 299;
  const REGULAR = 2499;
  const SALE_SECONDS = 43 * 60; // 43 minutes

  const [timeLeft, setTimeLeft] = useState(SALE_SECONDS);
  const [price, setPrice] = useState(SALE);

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft(s => {
        if (s <= 1) {
          setPrice(REGULAR);
          clearInterval(t);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section id="buy" className="mt-12 bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center border-t-4 border-[#FF8A80]">
      <div className="max-w-xl mx-auto">
        <h4 className="text-2xl font-bold">Limited-Time Launch Price</h4>
        <p className="mt-2 text-sm text-gray-600">Lifetime access to the ebook, checklists & reader bonuses.</p>
        <div className="mt-4">
          <div className="text-sm text-gray-500">Was <span className="line-through">₹{REGULAR}</span></div>
          <div className="text-4xl sm:text-5xl font-extrabold text-[#D84315]">₹{price}</div>
          {price === SALE && <div className="mt-2 text-xs text-gray-500">Price increases in {minutes}m {seconds}s</div>}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Razorpay payment button embed */}
          <div>
            <form>
              <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_RIEW2LTgbnLVRJ" async></script>
            </form>
          </div>

          {/* Fallback */}
          <a href={`mailto:${email}?subject=Purchase%20You%20Lost%20Me%20₹${price}`} className="bg-[#FF8A80] text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">Buy via Email — ₹{price}</a>
        </div>

        <p className="mt-3 text-xs text-gray-500">If you face payment issues, email us at {email} for manual support.</p>
      </div>
    </section>
  );
}

function Author() {
  return (
    <section className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
      <div className="bg-white p-6 rounded-xl shadow flex items-center gap-6">
        <img src="/author.jpg" alt="Author" className="w-28 h-28 rounded-lg object-cover" />
        <div>
          <div className="font-semibold">About the author</div>
          <p className="mt-2 text-sm text-gray-600">A relationship specialist blending clinical insight with real-world guides — writing to help people find clarity and peace after betrayal.</p>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">Why this book?</h4>
        <p className="mt-2 text-gray-700">It helps you notice patterns, choose when to act, and how to act safely. Not accusatory — clear, respectful, effective.</p>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: 'Is this therapy?', a: 'No — this is a practical self-help guide. For clinical help, see a licensed professional.' },
    { q: 'How will I get the book?', a: 'You will receive a secure download link via email immediately after payment.' },
    { q: 'Refunds?', a: '7-day satisfaction policy. Contact: offers@bookifie.in' }
  ];
  const [open, setOpen] = useState(0);
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold text-center">FAQ</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {items.map((it, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow cursor-pointer" onClick={() => setOpen(open === i ? -1 : i)}>
            <div className="font-semibold">{it.q}</div>
            {open === i && <div className="mt-2 text-sm text-gray-600">{it.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ brand, email }) {
  return (
    <footer className="mt-12 text-sm text-gray-600 text-center py-8 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="font-semibold">{brand} — Truth. Clarity. Healing.</div>
        <div className="mt-2">Email: <a href={`mailto:${email}`} className="text-[#4FC3F7]">{email}</a></div>
        <div className="mt-4">© {new Date().getFullYear()} {brand}</div>
      </div>
    </footer>
  );
}

/* Sticky CTA placed above toasts (thumb reachable, avoids overlap) */
function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 250); }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed right-4 bottom-20 z-50 transition-transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
      <a href="#buy" className="flex items-center gap-3 bg-gradient-to-r from-[#4FC3F7] to-[#FF8A80] text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 transform transition">
        <span className="font-semibold text-lg">Buy — ₹299</span>
      </a>
    </div>
  );
}

/* Live toasts: calm, authentic reader updates (2 at a time) */
function LiveToasts() {
  const [messages, setMessages] = useState([]);
  const pool = useRef([
    { name: 'Priya', secondsAgo: 2, note: 'shared a story after chapter 2' },
    { name: 'Ramesh', secondsAgo: 60, note: 'completed the Trigger Map exercise' },
    { name: 'Meera', secondsAgo: 140, note: 'wrote: "I feel calmer already"' },
    { name: 'Anjali', secondsAgo: 220, note: 'joined the reader circle' },
    { name: 'Vikram', secondsAgo: 300, note: 'left a 5-star review' },
    { name: 'Neha', secondsAgo: 360, note: 'downloaded the safety checklist' },
    { name: 'Aman', secondsAgo: 420, note: 'bookmarked chapter 4' },
    { name: 'Sana', secondsAgo: 480, note: 'sent feedback: "helped with our talk"' },
    { name: 'Rahul', secondsAgo: 540, note: 'shared the book with a friend' },
    { name: 'Pooja', secondsAgo: 600, note: 'started the 10-step plan' },
    { name: 'Karan', secondsAgo: 660, note: 'completed a repair ritual' },
    { name: 'Sneha', secondsAgo: 720, note: 'joined the Q&A session' },
    { name: 'Divya', secondsAgo: 780, note: 'left a thoughtful comment' },
    { name: 'Arjun', secondsAgo: 840, note: 're-read chapter 1' },
    { name: 'Maya', secondsAgo: 900, note: 'shared progress: "small steps"' },
    { name: 'Rohan', secondsAgo: 960, note: 'used the conversation script' },
    { name: 'Sonia', secondsAgo: 1020, note: 'recommended to a friend' },
    { name: 'Deepa', secondsAgo: 1080, note: 'posted a 5-star review' },
    { name: 'Vivek', secondsAgo: 1140, note: 'started journaling prompts' },
    { name: 'Aisha', secondsAgo: 1200, note: 'shared a healing testimonial' }
  ]);

  useEffect(() => {
    let idx = 0;
    const t = setInterval(() => {
      const item = pool.current[idx % pool.current.length];
      const text = `${item.name} ${item.note} — ${formatRelative(item.secondsAgo + Math.floor(Math.random() * 10))}`;
      setMessages(m => [text, ...m].slice(0, 2));
      idx++;
    }, 3800);
    return () => clearInterval(t);
  }, []);

  function formatRelative(sec) {
    if (sec < 5) return 'a few seconds ago';
    if (sec < 60) return `${sec} seconds ago`;
    if (sec < 3600) return `${Math.floor(sec / 60)} minute${Math.floor(sec / 60) > 1 ? 's' : ''} ago`;
    return `${Math.floor(sec / 3600)} hour${Math.floor(sec / 3600) > 1 ? 's' : ''} ago`;
  }

  return (
    <div className="fixed left-4 bottom-6 flex flex-col gap-2 z-50 pointer-events-none">
      {messages.map((m, i) => (
        <div key={i} className="bg-white px-4 py-3 rounded-lg shadow-md text-sm border-l-4 border-[#FF8A80] animate-fadeIn pointer-events-auto">
          {m}
        </div>
      ))}
    </div>
  );
}

/* Decorative butterflies — subtle CSS animation. We'll render a few floating butterflies across the page. */
function Butterflies() {
  const butterflies = [
    { key: 1, delay: 0 },
    { key: 2, delay: 3 },
    { key: 3, delay: 6 }
  ];
  return (
    <>
      {butterflies.map(b => (
        <div key={b.key} className={`butterfly butterfly-${b.key}`} style={{ animationDelay: `${b.delay}s` }} aria-hidden />
      ))}

      {/* Inline styles for butterfly shapes (SVG-like) - pure CSS */}
      <style jsx>{`
        .butterfly { position: fixed; width: 48px; height: 48px; z-index: 40; opacity: 0.85; }
        .butterfly-1 { left: 8%; top: 30%; animation: float1 14s linear infinite; }
        .butterfly-2 { left: 20%; top: 60%; animation: float2 16s linear infinite; }
        .butterfly-3 { left: 75%; top: 40%; animation: float3 18s linear infinite; }

        .butterfly::before, .butterfly::after {
          content: '';
          position: absolute;
          width: 18px;
          height: 28px;
          background: linear-gradient(180deg, rgba(255,138,128,0.95), rgba(79,195,247,0.9));
          border-radius: 50% 50% 40% 40%/60% 60% 40% 40%;
          transform-origin: left center;
        }
        .butterfly::after { right: 0; left: auto; transform-origin: right center; }
        .butterfly::before { left: 10px; transform-origin: left center; }

        /* gentle wing flap */
        @keyframes flap {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(14deg); }
          100% { transform: rotate(0deg); }
        }
        .butterfly::before { animation: flap 0.9s ease-in-out infinite; }
        .butterfly::after { animation: flap 0.9s ease-in-out infinite 0.45s; }

        /* floating paths */
        @keyframes float1 { 0% { transform: translate(0,0) } 25% { transform: translate(40px,-30px) } 50% { transform: translate(0,-60px) } 75% { transform: translate(-30px,-30px) } 100% { transform: translate(0,0) } }
        @keyframes float2 { 0% { transform: translate(0,0) } 25% { transform: translate(-40px,20px) } 50% { transform: translate(30px,60px) } 75% { transform: translate(20px,-20px) } 100% { transform: translate(0,0) } }
        @keyframes float3 { 0% { transform: translate(0,0) } 25% { transform: translate(-20px,-40px) } 50% { transform: translate(40px,-80px) } 75% { transform: translate(60px,-40px) } 100% { transform: translate(0,0) } }

        /* subtle opacity pulse */
        @keyframes pulseOpacity { 0% { opacity: 0.7 } 50% { opacity: 1 } 100% { opacity: 0.7 } }
        .butterfly { animation-name: float1; animation-timing-function: ease-in-out; animation-iteration-count: infinite; }
      `}</style>
    </>
  );
}

/* Add this to your globals.css for soft animations and responsiveness helpers:

.animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: translateY(0) } }

*/
