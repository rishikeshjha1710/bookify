"use client"
import React, { useState } from 'react';

// --- DATA & CONFIGURATION ---

const PAYMENT_URL = "https://rzp.io/rzp/To6NQitn";

// Testimonial Data
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

// Product Data
const featuredProduct = {
    title: "Wealth Reprograming Code",
    tagline: "Unlock Your Unstoppable Financial Blueprint.",
    price: "₹ 249",
    image: "https://placehold.co/600x400/1e293b/FFC300?text=Wealth+Code",
    url: PAYMENT_URL,
    features: [
        "The 7 Financial Limiting Beliefs",
        "The Abundance Mindset Installation",
        "Automated Wealth Accumulation",
        "High-Value Opportunity Recognition",
    ],
};

// --- CUSTOM STYLES & SHARED UTILITIES ---

const customStyles = `
    /* Custom styles for the premium aesthetic */
    .premium-bg {
        background-color: #0d1117; /* Deep Charcoal Blue */
    }

    .gold-accent {
        color: #FFC300; /* Rich Gold */
    }
    
    .cta-gold-fill {
        background-color: #FFC300; /* Rich Gold */
        color: #0d1117; /* Deep Charcoal Blue text */
        border-color: #FFC300;
    }
    .cta-gold-fill:hover {
        background-color: #f0b400; /* Slightly darker gold on hover */
        transform: scale(1.03);
    }

    .book-cover {
        box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.8), 
            0 0 20px rgba(255, 195, 0, 0.5); 
        transition: all 0.3s ease;
    }

    body {
        font-family: 'Inter', sans-serif;
        scroll-behavior: smooth;
    }
`;

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

// Helper component for Service Cards
const ServiceCard = ({ title, description, icon }) => (
    <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 text-center hover:border-gold-accent transition duration-300 transform hover:translate-y-[-5px]">
        <div className="flex justify-center mb-4 text-gold-accent">{icon}</div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

// Icon components (for Services)
const BookOpenIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13M12 10.253c-4.97 0-9 1.13-9 2.5s4.03 2.5 9 2.5 9-1.13 9-2.5-4.03-2.5-9-2.5zM3 13.253C3 14.623 7.03 15.753 12 15.753s9-1.13 9-2.5M3 17.253C3 18.623 7.03 19.753 12 19.753s9-1.13 9-2.5"/>
    </svg>
);
const BrainIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l-2-2H4a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1h-3l-2 2v13"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 9h2M16 13h2M16 17h2"/>
    </svg>
);
const UpdateIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.962 8.962 0 0120 12a9 9 0 01-18 0M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 4v5h-5"/>
    </svg>
);

// --- MAIN SECTIONS ---

// 1. Wonderful Banner (Hero)
const HeroBanner = () => (
    <section id="hero" className="py-20 md:py-32 lg:py-40 bg-gray-900 border-b-4 border-gold-accent/50 text-center">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-4 leading-tight">
                <span className="text-white">Rewrite Your</span> <span className="gold-accent">Financial Code</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto mb-10">
                **Bookify** delivers the world's most powerful, **transformational digital blueprints**—starting with the code to **unlimited wealth.**
            </p>
            <a 
                href="#products" 
                className="inline-block py-3 px-10 text-lg sm:text-xl font-bold uppercase rounded-full transition duration-300 cta-gold-fill hover:scale-105 shadow-xl"
            >
                View Bestsellers
            </a>
        </div>
    </section>
);

// 2. Our Services Section
const OurServices = () => (
    <section id="services" className="py-16 sm:py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white">
                Our <span className="gold-accent">Digital Services</span>
            </h2>
            {/* Responsive Grid: 1 column on mobile, 3 columns on desktop */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                <ServiceCard 
                    title="Blueprints & Guides" 
                    description="Immediate access to high-impact, actionable digital books and frameworks designed for rapid personal and financial growth."
                    icon={<BookOpenIcon />}
                />
                <ServiceCard 
                    title="Mindset Reprograming" 
                    description="Deep-dive strategies focused on neuroscience and NLP to rewrite limiting beliefs around success, wealth, and productivity."
                    icon={<BrainIcon />}
                />
                <ServiceCard 
                    title="Lifetime Updates" 
                    description="We continuously evolve our digital products. Your purchase guarantees you access to all future revisions and expansions."
                    icon={<UpdateIcon />}
                />
            </div>
        </div>
    </section>
);

// 3. Digital Product Features (Focusing on the main book modules)
const FeaturesSection = () => (
    <section id="features" className="py-16 sm:py-24 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white">
                Core <span className="gold-accent">Reprograming Modules</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Reusing module data for features */}
                {['Erasing Scarcity', 'Neuro-Linguistic Programming', 'Financial Automation', 'Income Stream Identification'].map((feature, index) => (
                    <div key={index} className="p-6 bg-gray-800 rounded-xl flex items-start space-x-4">
                        <span className="text-3xl font-black gold-accent">{index + 1}.</span>
                        <p className="text-base text-gray-300 font-medium self-center">{feature}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// 4. Testimonials Section
const TestimonialsSection = () => (
    <section id="testimonials" className="py-16 sm:py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white">
                Trusted by Achievers. <span className="gold-accent">Proven Results.</span>
            </h2>
            {/* 1 column on mobile, 2 on medium */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {testimonials.map((t, index) => (
                    <TestimonialCard key={index} name={t.name} role={t.role} quote={t.quote} />
                ))}
            </div>
        </div>
    </section>
);

// 5. About Us Section
const AboutUsSection = () => (
    <section id="about" className="py-16 sm:py-24 border-t border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            {/* Placeholder Image/Visual for About Us (Left side on desktop) */}
            <div className="rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img
                    src="https://placehold.co/600x400/1e293b/FFC300?text=Digital+Strategy"
                    alt="Our Mission"
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Text Content (Right side on desktop) */}
            <div className='order-1 md:order-2'>
                <p className="text-sm uppercase font-bold tracking-widest gold-accent mb-2">Our Mission</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                    Digital Wisdom for the <span className="gold-accent">Modern Achiever</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
                    Bookify was founded on the principle that the most valuable information should be the most accessible. We eliminate the noise and deliver distilled, high-power knowledge in digital format, ready for immediate application.
                </p>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                    We believe true transformation comes from **reprogramming internal limitations**, not just acquiring external facts. Our focus is on **Mindset, Strategy, and Automation.**
                </p>
            </div>
        </div>
    </section>
);

// 6. Product Listing
const ProductListing = ({ product }) => {
    // Scroll to top when 'Buy Now' is clicked or link is opened
    const handleCta = () => {
        window.open(product.url, '_blank');
        // Optionally: Scroll to top after action
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="products" className="py-16 sm:py-24 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-white">
                    Featured <span className="gold-accent">Bestseller</span>
                </h2>
                
                {/* Product Card Layout (Responsive) */}
                <div className="bg-gray-900 p-6 md:p-10 rounded-xl border border-gray-800 shadow-2xl grid lg:grid-cols-3 gap-8 items-center">
                    
                    {/* Column 1: Image */}
                    <div className="col-span-full lg:col-span-1 flex justify-center">
                        <div className="w-full max-w-xs md:max-w-sm">
                            <img
                                src={product.image}
                                alt={product.title + " Cover"}
                                className="book-cover w-full h-auto object-cover rounded-lg"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1e293b/FFC300?text=Cover+Not+Found'; }}
                            />
                        </div>
                    </div>
                    
                    {/* Column 2: Details */}
                    <div className="col-span-full lg:col-span-2">
                        <p className="text-sm uppercase font-bold tracking-widest gold-accent mb-2">Financial Blueprint Series</p>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{product.title}</h3>
                        <p className="text-lg sm:text-xl text-gray-400 mb-6">{product.tagline}</p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {product.features.map((text, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                    <span className="text-green-400 text-xl mt-[-2px]">&#x2713;</span>
                                    <p className="text-gray-400 text-sm">{text}</p>
                                </div>
                            ))}
                        </div>
                        
                        {/* CTA Row */}
                        <div className="flex items-center space-x-6 pt-4 border-t border-gray-800">
                            <span className="text-4xl sm:text-5xl font-black gold-accent">{product.price}</span>
                            <button
                                onClick={handleCta}
                                className="flex-grow py-3 px-8 text-lg sm:text-xl font-black uppercase rounded-xl transition duration-300 cta-gold-fill hover:scale-[1.03]"
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- MAIN APP COMPONENT ---

const App = () => {
    // Header navigation links for smooth scrolling
    const navLinks = [
        { name: "Services", target: "#services" },
        { name: "Features", target: "#features" },
        { name: "Testimonials", target: "#testimonials" },
        { name: "About Us", target: "#about" },
        { name: "Products", target: "#products" },
    ];
    
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />

            <div className="premium-bg text-gray-200 min-h-screen flex flex-col">

                {/* Header Navigation (Sticky for easy navigation) */}
                <header className="w-full p-4 sm:p-6 border-b border-gray-800 sticky top-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <a href="#hero" className="flex items-center space-x-2">
                            {/* Inline Book SVG Logo (Gold Accent) */}
                            <svg className="w-7 h-7 gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13M12 10.253c-4.97 0-9 1.13-9 2.5s4.03 2.5 9 2.5 9-1.13 9-2.5-4.03-2.5-9-2.5zM3 13.253C3 14.623 7.03 15.753 12 15.753s9-1.13 9-2.5M3 17.253C3 18.623 7.03 19.753 12 19.753s9-1.13 9-2.5"/>
                            </svg>
                            <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                                <span className="gold-accent">Book</span><span className="text-white">ify</span>
                            </div>
                        </a>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden md:flex space-x-6 lg:space-x-8">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name} 
                                    href={link.target} 
                                    className="text-white hover:text-gold-accent transition duration-200 font-medium text-sm lg:text-base"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        
                        {/* Mobile Menu Icon (Placeholder, no functionality needed per one-file mandate) */}
                        <button className="md:hidden text-white hover:text-gold-accent">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </header>

                <main className="flex-grow w-full">
                    {/* 1. Wonderful Banner */}
                    <HeroBanner />

                    {/* 2. Our Services Section */}
                    <OurServices />
                    
                    {/* 3. Features / Digital Product Focus */}
                    <FeaturesSection />

                    {/* 4. Testimonials Section */}
                    <TestimonialsSection />

                    {/* 5. About Us Section */}
                    <AboutUsSection />

                    {/* 6. Product Listing */}
                    <ProductListing product={featuredProduct} />
                    
                </main>

                {/* Footer */}
                <footer className="p-8 text-center text-gray-600 text-xs mt-auto border-t border-gray-800">
                    &copy; 2025 Bookify Publishing. All rights reserved. | <span className="text-gold-accent">Digital Blueprints for a Rewired Future.</span>
                </footer>
            </div>
        </>
    );
};

export default App;
