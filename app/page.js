"use client"
import React, { useState } from 'react';
import { Menu, X, BookOpen, Users, DollarSign, Briefcase, ArrowRight, Zap, Target, Brain } from 'lucide-react'; // Added new icons

// --- Product Data ---
const PRODUCTS = [
  {
    title: "You Lost Me — When I Found Myself",
    description: "A profound journey of self-discovery and reclaiming your narrative after emotional turmoil. Find your purpose and peace.",
    imageSrc: "/moveon.jpg",
    route: "/moveon",
    icon: <BookOpen className="w-6 h-6 text-cyan-500" />,
  },
  {
    title: "The Cheating Detector",
    description: "Master the art of intuitive awareness and learn the psychological tells to protect yourself and your relationships from deceit.",
    imageSrc: "/cheater.jpg",
    route: "/cheater",
    icon: <Users className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Wealth Reprograming Code",
    description: "Unleash your true financial potential by resetting your subconscious beliefs about money, abundance, and success.",
    imageSrc: "Banner.png",
    route: "/wealth",
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
  },
  {
    title: "The Essential Resume Tool Kit",
    description: "Comprehensive guides, modern templates, and insider strategies to craft a standout professional profile and land top interviews.",
    imageSrc: "https://placehold.co/400x550/3b82f6/ffffff?text=Resume+Kit",
    route: "/resume",
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
  },
];

// --- Product Card Component (Enhanced Hover) ---
const ProductCard = ({ title, description, imageSrc, route, icon }) => (
  <div className="group relative bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden 
                transition duration-500 ease-in-out transform hover:scale-[1.03] 
                border border-gray-100 flex flex-col">
    {/* Gradient border on hover */}
    <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                  group-hover:border-teal-400 transition duration-500 
                  opacity-0 group-hover:opacity-100"></div>
                  
    <div className="relative h-72 w-full">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-grow relative z-10 bg-white/95">
      <div className="mb-3 flex items-center">
        {icon}
        <h3 className="ml-2 text-xl font-extrabold text-gray-900 leading-snug">{title}</h3>
      </div>
      <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{description}</p>
      
      <a href={route} className="block text-center font-semibold text-sm tracking-wider uppercase 
                              border-t pt-4 text-teal-600 hover:text-teal-700 
                              transition duration-300">
        Access Now <ArrowRight className="inline w-4 h-4 ml-1" />
      </a>
    </div>
  </div>
);

// --- Header/Navigation Component ---
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Products", href: "#products" },
        { name: "Our Mission", href: "#about" },
        { name: "Contact", href: "#footer" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/log.png" alt="Bookify Logo" width={32} height={32} className='w-8 h-8' />
                    <span className="ml-3 text-2xl font-black text-gray-900 tracking-tight">Bookify</span>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <a key={item.name} href={item.href} className="text-lg font-medium text-gray-600 hover:text-teal-600 transition duration-300">
                            {item.name}
                        </a>
                    ))}
                    <button className="px-5 py-2 text-sm font-semibold bg-teal-600 text-white rounded-full hover:bg-teal-700 transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                        Get Started
                    </button>
                </nav>

                <button 
                    className="md:hidden p-2 text-gray-700 hover:text-teal-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white/95 shadow-xl border-t border-gray-100">
                    <nav className="px-2 pt-2 pb-4 space-y-1">
                        {navItems.map(item => (
                            <a 
                                key={item.name} 
                                href={item.href} 
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition duration-200"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href="#" className="block px-3 py-2 mt-2 text-center text-base font-semibold bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
                            Get Started
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};


// --- Hero Section (Dynamic Visuals) ---
const Hero = () => (
    <section className="bg-gray-900 pt-20 pb-24 md:pt-24 md:pb-40 overflow-hidden relative">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute w-96 h-96 bg-teal-500 rounded-full opacity-20 blur-3xl animate-blob -top-20 -left-20"></div>
            <div className="absolute w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-blob-delay -bottom-10 right-10"></div>
            <div className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-3xl animate-blob-delay-2 -top-10 -right-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                
                {/* Text Content */}
                <div className="lg:col-span-7 text-center lg:text-left mb-12 lg:mb-0">
                    <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
                        The Library of Breakthroughs
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        <span className="block">Transform Your Life</span> 
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-400">One Book at a Time.</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0">
                        Access expertly curated knowledge on emotional intelligence, financial freedom, and career acceleration. Your future starts now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#products">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center group bg-teal-500 text-gray-900 font-bold text-lg py-3 px-8 rounded-full shadow-xl 
                                              hover:bg-teal-400 transition duration-400 transform hover:scale-105">
                                Discover Best Sellers
                                <span className="ml-2 group-hover:translate-x-1 transition duration-300">&rarr;</span>
                            </button>
                        </a>
                        <a href="#about">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center group bg-transparent text-white font-medium text-lg py-3 px-8 rounded-full 
                                              border-2 border-white hover:bg-white hover:text-gray-900 transition duration-400 transform hover:scale-105">
                                Our Mission
                            </button>
                        </a>
                    </div>
                </div>

                {/* Visual Element (Animated Orbs take this space visually) */}
                <div className="lg:col-span-5 flex justify-center items-center">
                    {/* Placeholder for a more complex visual if needed, but orbs fill this space */}
                    <div className="relative w-72 h-96">
                         <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 transform rotate-6"></div>
                         <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 transform -rotate-6"></div>
                         <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-xl border border-white/30 p-6 flex items-center justify-center">
                            <h2 className="text-3xl font-black text-white text-center leading-snug">
                                <span className='block text-teal-300 text-lg mb-1'>Bookify</span>
                                Knowledge. Delivered.
                            </h2>
                         </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

// --- Products Section (Grid Display) ---
const ProductsSection = () => (
  <section id="products" className="py-20 md:py-32 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
        The Bookify Arsenal
      </h2>
      <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
        Curated works and essential tools to elevate your life in key areas of growth, from relationships to wealth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.route} {...product} />
        ))}
      </div>
    </div>
  </section>
);


// --- About Section (Bento Grid) ---
const BentoCard = ({ className, children, icon, title }) => (
    <div className={`relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col ${className}`}>
        <div className="absolute top-4 right-4 p-2 bg-teal-100 text-teal-600 rounded-full">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-10">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

const AboutSection = () => (
    <section id="about" className="bg-white py-20 md:py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <p className="text-sm font-bold uppercase tracking-widest text-teal-600 mb-3">
                    Our Manifesto
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
                    Why Choose <span className="text-teal-600">Bookify</span>?
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BentoCard 
                    className="md:col-span-2" 
                    title="Psychological Depth" 
                    icon={<Brain className="w-6 h-6" />}
                >
                    Our resources are built on real-world psychology and proven methodologies, ensuring you receive actionable advice, not just theory.
                </BentoCard>
                <BentoCard 
                    className="md:col-span-1" 
                    title="Modern & Accessible" 
                    icon={<Zap className="w-6 h-6" />}
                >
                    Forget dense textbooks. We deliver powerful knowledge in elegant, easy-to-digest formats.
                </BentoCard>
                <BentoCard 
                    className="md:col-span-3" 
                    title="Results-Driven Content" 
                    icon={<Target className="w-6 h-6" />}
                >
                    Every book and tool is designed with a singular focus: delivering measurable improvements in your life, career, or relationships. We provide the map; you start the journey.
                </BentoCard>
            </div>
        </div>
    </section>
);

// --- CTA Section ---
const CTASection = () => (
    <section className="bg-gradient-to-r from-teal-500 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-extrabold mb-4">Stay Ahead of the Curve</h2>
            <p className="text-xl text-teal-100 mb-8">
                Join our newsletter for exclusive insights, new release announcements, and free guides.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-5 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50" 
                />
                <button 
                    type="submit" 
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-gray-900 text-white font-semibold 
                               hover:bg-gray-800 transition duration-300 transform hover:scale-105"
                >
                    Subscribe
                </button>
            </form>
        </div>
    </section>
);


// --- Footer Component ---
const Footer = () => (
    <footer id="footer" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
                
                <div>
                    <h4 className="text-xl font-black text-white mb-4">Bookify</h4>
                    <p className="text-sm text-gray-400">
                        Transformative content for modern life.
                    </p>
                </div>

                <div>
                    <h4 className="text-md font-bold text-teal-400 uppercase tracking-wider mb-4">Products</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="/wealth" className="hover:text-teal-400 transition">Wealth Code</a></li>
                        <li><a href="/cheater" className="hover:text-teal-400 transition">Detector</a></li>
                        <li><a href="/moveon" className="hover:text-teal-400 transition">You Lost Me</a></li>
                        <li><a href="/resume" className="hover:text-teal-400 transition">Resume Toolkit</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-md font-bold text-teal-400 uppercase tracking-wider mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#about" className="hover:text-teal-400 transition">About Us</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition">Careers</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-md font-bold text-teal-400 uppercase tracking-wider mb-4">Connect</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="mailto:info@bookify.com" className="hover:text-teal-400 transition">Email Support</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition">Twitter</a></li>
                        <li><a href="#" className="hover:text-teal-400 transition">LinkedIn</a></li>
                    </ul>
                </div>

            </div>
            
            <div className="text-center text-sm text-gray-500 pt-4">
                &copy; {new Date().getFullYear()} Bookify. All rights reserved. | Built with modern design principles.
            </div>
        </div>
    </footer>
);


// --- Main Page Component ---
export default function Home() {
  return (
    <>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet" />
        <style>{`
          /* Custom style for the background gradient in Hero section */
          .perspective-1000 {
            perspective: 1000px;
          }
          .rotate-y-12 {
            transform: rotateY(12deg);
          }
          /* Ensure a modern default font is used */
          body {
            font-family: 'Inter', sans-serif;
          }
          
          /* Keyframe animations for the gradient orbs */
          @keyframes blob {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -40px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 30px) scale(0.9);
            }
          }
          @keyframes blob-delay {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(-30px, 20px) scale(0.9);
            }
            66% {
              transform: translate(20px, -30px) scale(1.1);
            }
          }
           @keyframes blob-delay-2 {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(20px, 30px) scale(1.1);
            }
            66% {
              transform: translate(-30px, -20px) scale(0.9);
            }
          }

          .animate-blob {
            animation: blob 10s infinite alternate;
          }
          .animate-blob-delay {
            animation: blob-delay 12s infinite alternate;
            animation-delay: 2s;
          }
          .animate-blob-delay-2 {
            animation: blob-delay-2 8s infinite alternate;
            animation-delay: 4s;
          }
        `}</style>
      
      <div className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ProductsSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}