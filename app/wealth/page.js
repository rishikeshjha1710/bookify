"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// --- CONFIG ---
const PAYMENT_URL = "https://rzp.io/rzp/To6NQitn";

// Testimonial Data (typographic quotes / apostrophes to avoid ESLint flags)
const testimonials = [
  {
    name: "Rahul S.",
    role: "Software Architect",
    quote:
      "This book isn’t theory; it’s a financial operating system update. My entire approach to money shifted from scarcity to abundance. Highly recommended.",
  },
  {
    name: "Priya M.",
    role: "E-commerce Founder",
    quote:
      "I finally understood the ‘why’ behind my money habits. Mr. X’s “Code” is the simplest, most direct blueprint for building sustainable wealth I’ve ever read.",
  },
];

// --- MAIN APP ---
const App = () => {
  const [showMessage, setShowMessage] = useState(false);

  // Timer State: 1 hour 30 minutes (5400 seconds)
  const initialTime = 1 * 60 * 60 + 30 * 60; // 5400 seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  // Timer logic
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => setTimeLeft((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Format HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const parts = [];
    if (h > 0) parts.push(h.toString().padStart(2, "0"));
    parts.push(m.toString().padStart(2, "0"));
    parts.push(s.toString().padStart(2, "0"));
    return parts.join(":");
  };

  // Purchase handler
  const handlePurchase = () => {
    if (typeof window !== "undefined") {
      window.open(PAYMENT_URL, "_blank");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000);
    }
  };

  // Embedded custom styles
  const customStyles = `
    .premium-bg { background-color: #0d1117; }
    .gold-accent { color: #FFC300; }
    .cta-gold-fill {
      background-color: #FFC300;
      color: #0d1117;
      border-color: #FFC300;
    }
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
    body { font-family: 'Inter', sans-serif; }
    #message-box { z-index:1000; top:20px; right:20px; box-shadow: 0 4px 12px rgba(0,0,0,0.5); transform: translateX(120%); transition: transform 0.5s ease-out; }
    #message-box.show { transform: translateX(0); }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <div className="premium-bg text-gray-200 min-h-screen flex flex-col">
        {/* Message box */}
        <div id="message-box" className={`fixed p-4 rounded-xl text-white bg-green-600 ${showMessage ? "show" : ""}`}>
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <p className="font-semibold">Redirecting to Payment... Check your email for confirmation (simulated).</p>
          </div>
        </div>

        {/* Header */}
        <header className="w-full p-4 sm:p-6 border-b border-gray-800 sticky top-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto flex justify-start items-center">
            <a href="#" className="flex items-center space-x-2">
              <svg className="w-7 h-7 gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13M12 10.253c-4.97 0-9 1.13-9 2.5s4.03 2.5 9 2.5 9-1.13 9-2.5-4.03-2.5-9-2.5zM3 13.253C3 14.623 7.03 15.753 12 15.753s9-1.13 9-2.5M3 17.253C3 18.623 7.03 19.753 12 19.753s9-1.13 9-2.5" />
              </svg>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                <span className="gold-accent">Book</span><span className="text-white">ify</span>
              </div>
            </a>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 flex-grow w-full">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">
            {/* Left column: visual & CTA */}
            <div className="flex flex-col items-center lg:items-end order-1 lg:order-2 w-full">
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-8">
                <div className="book-cover rounded-xl overflow-hidden relative">
                  <Image src="/Banner.png" alt="Wealth Reprograming Code Book Cover" width={600} height={400} className="w-full h-auto object-cover" />
                  <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 bg-gray-900 text-white rounded-full tracking-wider opacity-90 border border-gold-accent">
                    Blueprint Series
                  </span>
                </div>
              </div>

              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <div className="bg-gray-800 p-3 sm:p-4 rounded-lg flex items-center justify-between mb-4 border border-red-500">
                  <p className="text-base sm:text-lg font-semibold text-red-400">
                    <span className="inline-block animate-pulse mr-2">⏰</span> Limited Price Lock:
                  </p>
                  <span className="text-2xl sm:text-3xl font-extrabold gold-accent">{formatTime(timeLeft)}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
                  <span className="text-5xl sm:text-6xl font-black gold-accent text-center sm:text-right">₹ 249</span>

                  <button
                    onClick={handlePurchase}
                    className="w-full sm:w-auto flex-grow py-3 sm:py-4 px-8 sm:px-12 text-xl sm:text-2xl font-black uppercase rounded-xl transition duration-300 cta-gold-fill transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-70 pulse-effect"
                  >
                    <span className="flex items-center justify-center space-x-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 14H9c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zM20 10l-6-6v2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V10zM19 14h-2v-2h2v2z"></path>
                      </svg>
                      <span>Get It Now</span>
                    </span>
                  </button>
                </div>

                <p className="text-center lg:text-right text-xs mt-2 text-gray-500">
                  Click Now to access the payment link and immediately download.
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
                <FeatureItem text="The 7 Financial Limiting Beliefs" />
                <FeatureItem text="The Abundance Mindset Installation" />
                <FeatureItem text="Automated Wealth Accumulation" />
                <FeatureItem text="High-Value Opportunity Recognition" />
              </div>
            </div>
          </div>

          {/* Trust & social proof */}
          <section className="mt-12 sm:mt-16 py-8 sm:py-12 border-t border-gray-800">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 text-white">
              Trusted by Achievers. <span className="gold-accent">Proven Results.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {testimonials.map((t, index) => (
                <TestimonialCard key={index} name={t.name} role={t.role} quote={t.quote} />
              ))}
            </div>
          </section>

          {/* Guarantee */}
          <section className="mt-8 sm:mt-12 py-8 sm:py-12 bg-gray-900 rounded-xl text-center border-2 border-green-700 p-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Your <span className="text-green-400">100% Risk-Free</span> Guarantee
            </h3>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400">
              We are so confident that the Wealth Reprograming Code will transform your finances that we offer a full 30-day money-back guarantee. If you don’t feel you’ve unlocked a new financial blueprint, you get your ₹ 249 back. No questions asked.
            </p>
          </section>
        </main>

        <footer className="p-4 text-center text-gray-600 text-xs mt-auto border-t border-gray-900">
          &copy; 2025 Bookify Publishing. All rights reserved. | Total Download Size: 1.3 MB (E-Pub / PDF).
        </footer>
      </div>
    </>
  );
};

// Feature item helper
const FeatureItem = ({ text }) => (
  <div className="flex items-start space-x-2">
    <span className="text-green-400 text-xl">&#x2713;</span>
    <p className="text-gray-400 text-sm">{text}</p>
  </div>
);

const TestimonialCard = ({ quote, name, role }) => (
    <div className="p-5 sm:p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-gold-accent transition duration-300">
      <div className="text-3xl sm:text-4xl text-gray-600 mb-4">&ldquo;</div>
      <p className="text-base sm:text-lg italic text-gray-300 mb-4 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="pt-4 border-t border-gray-800">
        <p className="font-bold gold-accent">{name}</p>
        <p className="text-xs sm:text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
export default App;
