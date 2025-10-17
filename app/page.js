"use client"
import React, { useState } from 'react';

// Main App component (can be renamed to ProductPage in a real Next.js environment, 
// but is kept as App for the single-file mandate)
const App = () => {
    // State to control the visibility of the success message box
    const [showMessage, setShowMessage] = useState(false);

    // Function to handle the purchase action and show the notification
    const handlePurchase = () => {
        setShowMessage(true);

        // Hide the message after 4 seconds
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

        .accent-color {
            color: #ff6a00; /* Vibrant Orange */
        }

        .accent-bg {
            background-color: #ff6a00;
        }
        
        /* Deep, glowing shadow for the book cover */
        .book-cover {
            --accent-glow: #ff6a00; /* Vibrant Orange */
            box-shadow: 
                0 25px 60px rgba(0, 0, 0, 1), /* Deeper, more intense bottom shadow */
                0 0 35px rgba(255, 106, 0, 0.7); /* Stronger accent glow */
            transition: all 0.4s ease-in-out;
            transform-style: preserve-3d;
        }

        .book-cover:hover {
            transform: scale(1.04) rotateY(3deg);
            box-shadow: 
                0 30px 70px rgba(0, 0, 0, 0.9), 
                0 0 45px rgba(255, 106, 0, 0.9); /* Even stronger glow on hover */
        }

        /* Stronger shadow for the CTA button */
        .buy-button-glow {
            box-shadow: 0 5px 20px rgba(255, 106, 0, 0.6);
        }
        .buy-button-glow:hover {
            box-shadow: 0 5px 30px rgba(255, 106, 0, 0.9);
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

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: customStyles }} />
            
            <div className="premium-bg text-gray-200 min-h-screen flex flex-col">
                
                {/* Global Message Box (uses state) */}
                <div 
                    id="message-box" 
                    className={`fixed p-4 rounded-lg bg-green-600 text-white font-semibold ${showMessage ? 'show' : ''}`}
                >
                    E-book purchased successfully! Your download link is ready!
                </div>

                {/* Header Navigation (Bookify Brand Only) */}
                <header className="p-6 border-b border-gray-800 sticky top-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm z-50">
                    <div className="max-w-7xl mx-auto flex justify-start items-center">
                        {/* Brand & Logo */}
                        <a href="#" className="flex items-center space-x-2">
                            {/* Inline Book SVG Logo (Minimalist) */}
                            <svg className="w-7 h-7 accent-color" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {/* Stylized book icon path */}
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13M12 10.253c-4.97 0-9 1.13-9 2.5s4.03 2.5 9 2.5 9-1.13 9-2.5-4.03-2.5-9-2.5zM3 13.253C3 14.623 7.03 15.753 12 15.753s9-1.13 9-2.5M3 17.253C3 18.623 7.03 19.753 12 19.753s9-1.13 9-2.5"/>
                            </svg>
                            <div className="text-2xl font-extrabold tracking-tight">
                                <span className="accent-color">Book</span><span className="text-white">ify</span>
                            </div>
                        </a>
                        {/* Removed Navigation Links and Mobile Menu Button for product focus */}
                    </div>
                </header>

                {/* Main Product Section - Centered and High Focus */}
                <main className="max-w-7xl mx-auto p-6 md:p-12 lg:p-16 flex-grow flex items-center w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-start w-full">
                        
                        {/* Left Column: Book Cover */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-xs sm:max-w-sm">
                                <div className="book-cover rounded-xl overflow-hidden relative">
                                    {/* Placeholder Image */}
                                    <img 
                                        src="https://placehold.co/400x600/1e293b/ff6a00?text=The+Quantum+Leap" 
                                        alt="The Quantum Leap E-Book Cover" 
                                        className="w-full h-auto object-cover"
                                        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x600/1e293b/ff6a00?text=Cover+Not+Found'; }}
                                    />
                                    {/* 'E-Book' Badge */}
                                    <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 bg-gray-900 text-white rounded-full tracking-wider opacity-90">
                                        EXCLUSIVE E-BOOK
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Product Details & CTA */}
                        <div>
                            {/* Subtitle/Category */}
                            <p className="text-sm uppercase font-bold tracking-widest accent-color mb-2">Future Tech / Strategy</p>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none mb-6">
                                The Quantum <span className="text-white">Leap</span>
                            </h1>
                            
                            {/* Author Info */}
                            <div className="mb-6">
                                <p className="text-xl font-medium text-gray-400">Authored by <span className="accent-color font-extrabold">Dr. Alex Rivera</span></p>
                                <p className="text-sm mt-1 text-gray-500">MIT Research Fellow | Visionary Strategist</p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center space-x-2 text-yellow-400 mb-8">
                                <span className="text-2xl">★★★★★</span>
                                <span className="text-gray-400 text-lg font-medium">(2,100 Global Readers)</span>
                            </div>

                            {/* Description */}
                            <p className="text-xl text-gray-300 mb-10 leading-relaxed border-l-4 border-gray-700 pl-4">
                                The definitive guide to navigating the convergence of quantum computing, advanced AI, and sustainable resource management. This is not just a book; it's a **blueprint for the next technological revolution.**
                            </p>

                            {/* Key Features / Benefits */}
                            <h2 className="text-xl font-extrabold mb-4 accent-color">Master these Pillars:</h2>
                            <div className="grid grid-cols-2 gap-4 text-sm mb-10 text-gray-400">
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-400 text-xl">&#x2713;</span>
                                    <p>Quantum Architecture Demystified</p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-400 text-xl">&#x2713;</span>
                                    <p>Sustainable Tech Investment</p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-400 text-xl">&#x2713;</span>
                                    <p>Future-Proofing Your Business</p>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-400 text-xl">&#x2713;</span>
                                    <p>Exclusive Expert Interviews</p>
                                </div>
                            </div>

                            {/* Pricing and CTA */}
                            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                                <span className="text-6xl font-extrabold accent-color">$19.99</span>
                                <button 
                                    onClick={handlePurchase}
                                    className="flex-grow sm:flex-grow-0 py-4 px-12 text-xl font-bold text-white uppercase rounded-xl buy-button-glow transition duration-300 transform hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-70 accent-bg"
                                >
                                    Download Instantly
                                </button>
                            </div>

                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="p-4 text-center text-gray-600 text-xs mt-auto">
                    &copy; 2025 PREMIUM READS. All rights reserved. | 1.3 MB E-Pub / PDF Format.
                </footer>
            </div>
        </>
    );
};

export default App;
