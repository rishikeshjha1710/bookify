"use client"
import React, { useState, useEffect } from 'react';

// Main App component for the single-file mandate
const App = () => {
    const [showMessage, setShowMessage] = useState(false);
    
    // Timer State: 1 hour 30 minutes (5400 seconds) for high urgency
    const initialTime = (1 * 60 * 60) + (30 * 60); // 5400 seconds
    const [timeLeft, setTimeLeft] = useState(initialTime);
    
    // The target payment link provided by the user
    const PAYMENT_URL = "https://rzp.io/rzp/To6NQitn";

    // Timer Logic (Scarcity Principle)
    useEffect(() => {
        if (timeLeft <= 0) return;

        const timerId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    // Format time to HH:MM:SS (handles hours correctly)
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        const parts = [];
        if (h > 0) {
            parts.push(h.toString().padStart(2, '0'));
        }
        parts.push(m.toString().padStart(2, '0'));
        parts.push(s.toString().padStart(2, '0'));
        
        return parts.join(':');
    };

    // Purchase Handler: Opens the payment link and shows local confirmation
    const handlePurchase = () => {
        // Open the payment link in a new tab
        window.open(PAYMENT_URL, '_blank');
        
        // Show the local success message (simulated confirmation)
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 4000);
    };

    // Custom styles are embedded here using a style tag
    const customStyles = `
        /* Custom styles for the premium aesthetic */
        .premium-bg {
            background-color: #0d1117; /* Deep Charcoal Blue */
        }

        .gold-accent {
            color: #FFC300; /* Rich Gold */
        }
        
        /* Solid Gold CTA for maximum contrast and eye-catching appeal */
        .cta-gold-fill {
            background-color: #FFC300; /* Rich Gold */
            color: #0d1117; /* Deep Charcoal Blue text */
            border-color: #FFC300;
        }
        .cta-gold-fill:hover {
            background-color: #f0b400; /* Slightly darker gold on hover */
            transform: scale(1.05); /* More aggressive hover scale */
        }

        /* Pulsing animation for the CTA button to draw attention (Motion Effect) */
        @keyframes pulse-gold {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 195, 0, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 195, 0, 0);
          }
        }

        .pulse-effect {
            animation: pulse-gold 2s infinite;
        }


        /* Deep, glowing shadow for the book cover - Gold Glow */
        .book-cover {
            box-shadow: 
                0 25px 60px rgba(0, 0, 0, 1), 
                0 0 45px rgba(255, 195, 0, 0.7); 
            transition: all 0.4s ease-in-out;
            transform-style: preserve-3d;
        }

        .book-cover:hover {
            transform: scale(1.04) rotateY(3deg);
            box-shadow: 
                0 30px 70px rgba(0, 0, 0, 0.9), 
                0 0 55px rgba(255, 195, 0, 0.9); 
        }

        /* Use Inter font */
        body {
            font-family: 'Inter', sans-serif;
        }

        /* Custom message box for purchase confirmation */
        #message-box {
            z-index: 1000;
            top: 20px;
            right: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
            transform: translateX(120%);
            transition: transform 0.5s ease-out;
        }
        #message-box.show {
            transform: translateX(0);
        }
    `;

    // Testimonial Data (Social Proof)
    const testimonials = [
        {
            name: "Rahul S.",
            role: "Software Architect",
            quote: "This book isn't theory; it's a financial operating system update. My entire approach to money shifted from scarcity to abundance. Highly recommended.",
        },
        {
            name: "Priya M.",
            role: "E-commerce Founder",
            quote: "I finally understood the 'why' behind my money habits. Mr. X's 'Code' is the simplest, most direct blueprint for building sustainable wealth I've ever read.",
        },
    ];
    
    // Core Modules for Deep Dive Section
    const modules = [
       
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            <div className="premium-bg text-gray-200 min-h-screen flex flex-col">

                {/* Global Message Box (Success Confirmation) */}
                <div id="message-box" className={`fixed p-4 rounded-xl text-white bg-green-600 ${showMessage ? 'show' : ''}`}>
                    <div className="flex items-center space-x-3">
                        {/* Checkmark SVG */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <p className="font-semibold">Redirecting to Payment... Check your email for confirmation (simulated).</p>
                    </div>
                </div>

                {/* Header Navigation (Bookify Brand) */}
                {/* Use w-full and responsive padding */}
                <header className="w-full p-4 sm:p-6 border-b border-gray-800 sticky top-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50">
                    <div className="max-w-7xl mx-auto flex justify-start items-center">
                        <a href="#" className="flex items-center space-x-2">
                            {/* Inline Book SVG Logo (Gold Accent) */}
                            <svg className="w-7 h-7 gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13M12 10.253c-4.97 0-9 1.13-9 2.5s4.03 2.5 9 2.5 9-1.13 9-2.5-4.03-2.5-9-2.5zM3 13.253C3 14.623 7.03 15.753 12 15.753s9-1.13 9-2.5M3 17.253C3 18.623 7.03 19.753 12 19.753s9-1.13 9-2.5"/>
                            </svg>
                            <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                                <span className="gold-accent">Book</span><span className="text-white">ify</span> {/* Brand Name */}
                            </div>
                        </a>
                    </div>
                </header>

                {/* Main Product Section - Centered and High Focus */}
                {/* Responsive padding applied */}
                <main className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12 flex-grow w-full">
                    {/* Responsive Grid: Single column on small, two columns on large */}
                    <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center w-full">

                        {/* Left Column: Book Cover & CTA (Focal Point on mobile, right on desktop) */}
                        {/* Responsive width constraints and alignment */}
                        <div className="flex flex-col items-center lg:items-end order-1 lg:order-2 w-full">
                            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mb-8"> {/* Responsive width constraints */}
                                <div className="book-cover rounded-xl overflow-hidden relative">
                                    {/* Placeholder Image for Wealth Reprograming Code (Landscape: 600x400) */}
                                    <img
                                        src="/Banner.png"
                                        alt="Wealth Reprograming Code Book Cover"
                                        className="w-full h-auto object-cover"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1e293b/FFC300?text=Cover+Not+Found'; }}
                                    />
                                    {/* 'Blueprint' Badge */}
                                    <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 bg-gray-900 text-white rounded-full tracking-wider opacity-90 border border-gold-accent">
                                        Blueprint Series
                                    </span>
                                </div>
                            </div>

                            {/* CTA Button placed near the visual 'thumb' area (High Contrast & Urgency) */}
                            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg"> {/* Responsive width constraints */}
                                {/* Scarcity/Urgency Element & Timer */}
                                <div className="bg-gray-800 p-3 sm:p-4 rounded-lg flex items-center justify-between mb-4 border border-red-500">
                                    <p className="text-base sm:text-lg font-semibold text-red-400">
                                        <span className="inline-block animate-pulse mr-2">⏰</span> Limited Price Lock:
                                    </p>
                                    <span className="text-2xl sm:text-3xl font-extrabold gold-accent">
                                        {formatTime(timeLeft)}
                                    </span>
                                </div>
                                
                                {/* Price and CTA Button Group - Stacks vertically on mobile, aligns horizontally on small screens and up */}
                                <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
                                    {/* Dominant Price - Text is centered on mobile */}
                                    <span className="text-5xl sm:text-6xl font-black gold-accent text-center sm:text-right">₹ 249</span> {/* Rupee Symbol Update */}
                                    
                                    {/* High-Impact CTA with Pulse and Icon - Full width on mobile, auto-width on desktop */}
                                    <button
                                        onClick={handlePurchase}
                                        className="w-full sm:w-auto flex-grow py-3 sm:py-4 px-8 sm:px-12 text-xl sm:text-2xl font-black uppercase rounded-xl transition duration-300 cta-gold-fill transform hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-70 pulse-effect" 
                                    >
                                        <span className="flex items-center justify-center space-x-3">
                                            {/* SVG icon remains responsive */}
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13 14H9c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zM20 10l-6-6v2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V10zM19 14h-2v-2h2v2z"/>
                                            </svg>
                                            <span>Get It Now</span>
                                        </span>
                                    </button>
                                </div>
                                <p className="text-center lg:text-right text-xs mt-2 text-gray-500">
                                    Click **Now** to access the payment link and **Immediately** Download.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Product Details (Value Proposition) */}
                        <div className='order-2 lg:order-1'>
                            {/* Responsive Title Size */}
                            <p className="text-xs sm:text-sm uppercase font-bold tracking-widest gold-accent mb-2">Financial Mindset / **Transformational** Strategy</p>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 sm:mb-6">
                                <span className="text-white">Wealth Reprograming</span> <span className="gold-accent">Code</span>
                            </h1>

                            {/* Responsive Subtitle Size */}
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-6 sm:mb-8">
                                Unlock **Your Unstoppable Financial Blueprint.** The difference between struggling and soaring is simply **your internal code.**
                            </h2>

                            {/* Author Info (Authority Building) */}
                            <div className="mb-6 border-l-4 border-gray-700 pl-4">
                                <p className="text-lg sm:text-xl font-medium text-gray-400">Authored by <span className="gold-accent font-extrabold">Mr. X</span></p>
                                <p className="text-xs sm:text-sm mt-1 text-gray-500">Creator of The Financial Freedom Framework™</p>
                            </div>

                            {/* Description (Connection & Trust) */}
                            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed border-l-4 border-gold-accent pl-4">
                                **Stop reacting** to your money and **start commanding** it. This book reveals the hidden psychological "code" that governs 90% of wealth success. Learn to rewrite old, limiting beliefs **immediately** and install a new, powerful financial operating system for **guaranteed transformation.**
                            </p>

                            {/* Key Features / Benefits */}
                            <h2 className="text-lg sm:text-xl font-extrabold mb-4 gold-accent">What You Will Reprogram:</h2>
                            {/* Stacks features nicely on mobile, two columns on all screens */}
                            <div className="grid grid-cols-2 gap-4 text-sm mb-10 text-gray-400">
                                <FeatureItem text="The 7 Financial Limiting Beliefs" />
                                <FeatureItem text="The Abundance Mindset Installation" />
                                <FeatureItem text="Automated Wealth Accumulation" />
                                <FeatureItem text="High-Value Opportunity Recognition" />
                            </div>
                        </div>
                    </div>

                    
                    
                    {/* --- Trust & Social Proof Section --- */}
                    <section className="mt-12 sm:mt-16 py-8 sm:py-12 border-t border-gray-800">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 sm:mb-12 text-white">
                            Trusted by Achievers. <span className="gold-accent">Proven Results.</span>
                        </h2>
                        {/* 1 column on mobile, 2 on medium */}
                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {testimonials.map((t, index) => (
                                <TestimonialCard key={index} name={t.name} role={t.role} quote={t.quote} />
                            ))}
                        </div>
                    </section>
                    
                    {/* --- Guarantee Section (Authority and Trust Building) --- */}
                    <section className="mt-8 sm:mt-12 py-8 sm:py-12 bg-gray-900 rounded-xl text-center border-2 border-green-700 p-6">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                            Your <span className="text-green-400">100% Risk-Free</span> Guarantee
                        </h3>
                        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-400">
                            We are so confident that **The Wealth Reprograming Code** will **transform** your finances that we offer a full 30-day money-back guarantee. If you don't feel you've unlocked a new financial blueprint, you get your **₹ 249** back. No questions asked.
                        </p>
                    </section>
                </main>

                {/* Footer */}
                <footer className="p-4 text-center text-gray-600 text-xs mt-auto border-t border-gray-900">
                    &copy; 2025 Bookify Publishing. All rights reserved. | Total Download Size: 1.3 MB (E-Pub / PDF).
                </footer>
            </div>
        </>
    );
};

// Helper component for Feature List items
const FeatureItem = ({ text }) => (
    <div className="flex items-start space-x-2">
        <span className="text-green-400 text-xl">&#x2713;</span>
        <p className="text-gray-400 text-sm">{text}</p>
    </div>
);

// Helper component for Testimonial Cards
const TestimonialCard = ({ quote, name, role }) => (
    <div className="p-5 sm:p-6 bg-gray-900 rounded-xl border border-gray-700 hover:border-gold-accent transition duration-300">
        <div className="text-3xl sm:text-4xl text-gray-600 mb-4">"</div>
        <p className="text-base sm:text-lg italic text-gray-300 mb-4 leading-relaxed">"{quote}"</p>
        <div className="pt-4 border-t border-gray-800">
            <p className="font-bold gold-accent">{name}</p>
            <p className="text-xs sm:text-sm text-gray-500">{role}</p>
        </div>
    </div>
);

// New Helper component for Module Cards (Deep Dive Section)
const ModuleCard = ({ moduleText, moduleNumber }) => (
    <div className="p-4 sm:p-5 bg-gray-900 rounded-xl border-t-4 border-gold-accent shadow-xl">
        <p className="text-xs sm:text-sm font-light text-gray-500 mb-2">Chapter {moduleNumber}</p>
        <p className="text-sm sm:text-base font-semibold text-white">{moduleText}</p>
    </div>
);

export default App;
