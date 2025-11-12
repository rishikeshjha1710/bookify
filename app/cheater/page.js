"use client"
import React, { useEffect, useState, useRef } from 'react';

export default function BookifyLanding() {
  const brand = 'Bookify';
  const email = 'offers@bookifie.in';
  const payment = 'https://rzp.io/rzp/u0DIDj9'

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sky-50 text-gray-900 font-sans">
      <TopNav brand={brand} />
      <main className="max-w-6xl mx-auto px-6 lg:px-8 ">
        <Hero brand={brand} email={email} />
        <Testimonials />
        <PsychTriggers />
        <Offer email={email} />
        <Footer brand={brand} email={email} />
      </main>
      <StickyCTA />
      <LiveToasts />
    </div>
  );
}

function TopNav({ brand }) {
  return (
    <header className="flex items-center justify-between py-6 animate-fadeIn">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden shadow flex items-center justify-center">
<img src="/log.png" alt="Bookify Logo" className="object-cover w-full h-full" />
</div>
        <div>
          <div className="font-extrabold text-lg">{brand}</div>
          <div className="text-xs text-gray-500">The Cheating Detector</div>
        </div>
      </div>
      <div className="hidden sm:block">
        <a href="https://rzp.io/rzp/u0DIDj9" className="bg-gradient-to-r from-rose-600 to-sky-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:scale-105 transition-transform">
          Unlock Now — ₹299
        </a>
      </div>
    </header>
  );
}

function Hero({ brand, email }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
      <div className="animate-slideUp">
        <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-semibold">LIMITED TIME</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mt-4">The Cheating Detector</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">Discover emotional triggers, rebuild connection, and protect your heart using psychology-backed tools trusted by experts. This isn’t just a book — it’s your personal relationship reset button.</p>
        <div className="mt-8">
          <a id="buy" href="https://rzp.io/rzp/u0DIDj9" className="bg-gradient-to-r from-rose-600 to-sky-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all block text-center">
            Get Instant Access — ₹299
          </a>
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-2xl animate-fadeIn flex flex-col gap-6 items-center justify-center w-full h-[480px] sm:h-[520px]">
<div className="w-64 h-[420px] bg-gradient-to-br from-sky-100 to-rose-100 rounded-xl shadow-inner flex items-center justify-center overflow-hidden">
<img src='/cheater.jpg' alt='Ebook Cover' className="w-full h-full object-cover rounded-xl" />
</div>
</div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: 'Ramesh', quote: 'I realized the hidden patterns that were ruining my relationships. Worth every rupee!' },
    { name: 'Radhika', quote: 'This book feels like a personal therapy session — empowering and practical.' },
    { name: 'Aman', quote: 'The triggers section blew my mind. Everyone needs to read this before it’s too late.' },
    { name: 'Sneha', quote: 'You’ll feel seen, understood, and equipped to rebuild trust. Absolutely loved it.' }
  ];

  return (
    <section className="mt-12 text-center">
      <h3 className="text-2xl font-bold text-gray-800">What Readers Say</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border-t-4 border-rose-500">
            <p className="italic text-gray-700">“{t.quote}”</p>
            <p className="mt-3 text-sm text-gray-600 font-medium">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PsychTriggers() {
  const triggers = [
    'Emotional disconnect before cheating happens',
    'Body language and micro-expressions revealing secrets',
    'How insecurity drives hidden attraction',
    'The neuroscience of betrayal and guilt',
    'Rebuilding broken trust through emotional calibration',
    'Powerful exercises to create deeper connection',
    'Real stories of redemption and second chances',
    'How to protect your mental health in love',
    'Why people cheat even when they love you',
    'Steps to turn emotional chaos into clarity'
  ];

  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold text-center text-gray-800">What You’ll Discover</h3>
      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
        {triggers.map((t, i) => (
          <li key={i} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-start gap-3">
            <span className="text-rose-600 text-xl">✔</span>
            <p className="text-gray-700 text-sm">{t}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Offer({ email }) {
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
    <section id="buy" className="mt-12 bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-rose-500">
      <h4 className="text-2xl font-bold">Get the Full Guide Today</h4>
      <p className="mt-2 text-sm text-gray-600">Own your emotional awareness and protect your relationship.</p>
      <div className="mt-4">
        <div className="text-sm text-gray-500">Was <span className="line-through">₹{REGULAR}</span></div>
        <div className="text-5xl font-extrabold text-rose-600">₹{price}</div>
        {price === SALE && (
          <div className="mt-2 text-xs text-gray-500">Price increases in {minutes}m {seconds}s</div>
        )}
      </div>
      <div className="mt-6">
        <a href={`mailto:${email}?subject=Purchase%20Cheating%20Detector%20₹${price}`} className="bg-gradient-to-r from-rose-600 to-sky-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all block w-full sm:w-auto mx-auto">
          Unlock Now — ₹{price}
        </a>
      </div>
      <p className="mt-3 text-xs text-gray-500">After the timer, the price will rise to ₹{REGULAR}.</p>
    </section>
  );
}

function Footer({ brand, email }) {
  return (
    <footer className="mt-16 text-sm text-gray-600 text-center py-6 border-t border-gray-200">
      <p>© {new Date().getFullYear()} {brand}. All rights reserved.</p>
      <a href={`mailto:${email}`} className="block text-sky-600 hover:underline mt-1">{email}</a>
    </footer>
  );
}

function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
<></>
  );
}

function LiveToasts() {
  const [messages, setMessages] = useState([]);
  const pool = useRef([
    { name: 'Ramesh', secondsAgo: 2 },
    { name: 'Radhika', secondsAgo: 60 },
    { name: 'Aman', secondsAgo: 120 },
    { name: 'Sneha', secondsAgo: 180 },
    { name: 'Priya', secondsAgo: 240 },
    { name: 'Arjun', secondsAgo: 300 },
    { name: 'Vikram', secondsAgo: 360 },
    { name: 'Anjali', secondsAgo: 420 },
    { name: 'Meera', secondsAgo: 480 },
    { name: 'Rahul', secondsAgo: 540 },
    { name: 'Divya', secondsAgo: 600 },
    { name: 'Manish', secondsAgo: 660 },
    { name: 'Pooja', secondsAgo: 720 },
    { name: 'Karan', secondsAgo: 780 },
    { name: 'Neha', secondsAgo: 840 },
    { name: 'Rajesh', secondsAgo: 900 },
    { name: 'Simran', secondsAgo: 960 },
    { name: 'Deepak', secondsAgo: 1020 },
    { name: 'Aisha', secondsAgo: 1080 },
    { name: 'Vivek', secondsAgo: 1140 }
  ]);

  useEffect(() => {
    let idx = 0;
    const t = setInterval(() => {
      const item = pool.current[idx % pool.current.length];
      const text = `${item.name} just bought a copy — ${formatRelative(item.secondsAgo + Math.floor(Math.random() * 6))}`;
      setMessages(m => [text, ...m].slice(0, 3));
      idx++;
    }, 4000);
    return () => clearInterval(t);
  }, []);

  function formatRelative(sec) {
    if (sec < 5) return 'a few seconds ago';
    if (sec < 60) return `${sec} seconds ago`;
    if (sec < 3600) return `${Math.floor(sec / 60)} minute${Math.floor(sec / 60) > 1 ? 's' : ''} ago`;
    return `${Math.floor(sec / 3600)} hour${Math.floor(sec / 3600) > 1 ? 's' : ''} ago`;
  }

  return (
    <div className="fixed left-4 bottom-6 flex flex-col gap-2 z-50">
  {messages.slice(0, 2).map((m, i) => (
    <div key={i} className="bg-white px-4 py-2 rounded-lg shadow-md text-sm border-l-4 border-rose-500 animate-fadeIn">
      {m}
    </div>
  ))}
</div>
  );
}