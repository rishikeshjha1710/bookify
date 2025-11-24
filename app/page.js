"use client"
import React, { useState } from "react"
import {
  Menu,
  X,
  BookOpen,
  Users,
  DollarSign,
  Briefcase,
  ArrowRight,
  Zap,
  Target,
  Brain,
} from "lucide-react"

// --- Product Data ---
const PRODUCTS = [
  {
    title: "You Lost Me — When I Found Myself",
    description:
      "An intimate journey through heartbreak, healing, and reclaiming your identity. For the ones who refuse to stay broken.",
    imageSrc: "/moveon.jpg",
    route: "/moveon",
    icon: <BookOpen className="w-6 h-6 text-cyan-500" />,
  },
  {
    title: "The Cheating Detector",
    description:
      "Understand patterns, body language, and psychological tells so you stop doubting yourself and start trusting your intuition.",
    imageSrc: "/cheater.jpg",
    route: "/cheater",
    icon: <Users className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Wealth Reprograming Code",
    description:
      "Shift your money mindset from survival to abundance with deep subconscious rewiring and practical wealth rituals.",
    imageSrc: "/Banner.png",
    route: "/wealth",
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
  },
  {
    title: "The Essential Resume Tool Kit",
    description:
      "ATS-conscious templates, positioning tactics and job-hunt strategy to turn a basic resume into a profile that gets picked.",
    imageSrc: "https://placehold.co/400x550/3b82f6/ffffff?text=Resume+Kit",
    route: "/resume",
    icon: <Briefcase className="w-6 h-6 text-blue-500" />,
  },
]

// --- Product Card Component ---
const ProductCard = ({ title, description, imageSrc, route, icon }) => (
  <div
    className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.08)]
                overflow-hidden transition duration-500 ease-out transform hover:-translate-y-2 
                border border-slate-100 flex flex-col"
  >
    {/* Glow border on hover */}
    <div
      className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent
                 group-hover:border-teal-300/70 group-hover:shadow-[0_0_40px_rgba(45,212,191,0.35)]
                 transition-all duration-500"
    />

    <div className="relative h-72 w-full overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
    </div>

    <div className="p-6 flex flex-col flex-grow relative z-10 bg-white/95">
      <div className="mb-4 flex items-center">
        <div className="flex items-center justify-center rounded-full bg-slate-50 p-2 shadow-inner">
          {icon}
        </div>
        <h3 className="ml-3 text-lg font-extrabold text-slate-900 leading-snug tracking-tight">
          {title}
        </h3>
      </div>
      <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed line-clamp-3">
        {description}
      </p>

      <a
        href={route}
        className="relative inline-flex items-center justify-between text-xs font-semibold tracking-[0.18em] 
                   uppercase border-t border-slate-100 pt-4 text-teal-600 group-hover:text-teal-700
                   transition duration-300"
      >
        <span>Access now</span>
        <span className="inline-flex items-center">
          <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </a>
    </div>
  </div>
)

// --- Header/Navigation Component ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "Our Mission", href: "#about" },
    { name: "Stay Updated", href: "#newsletter" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-amber-50 backdrop-blur-xl  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/log.png"
            alt="Bookify Logo"
            width={32}
            height={32}
            className="w-9 h-9 rounded-xl shadow-sm"
          />
          <div className="ml-3">
            <span className="block text-xl font-black  tracking-tight">
              Bookify
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Stories • Systems • Shifts
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-600 transition duration-200"
            >
              {item.name}
            </a>
          ))}
          <button
            className="px-5 py-2 text-sm font-semibold bg-slate-900 text-white rounded-full 
                       hover:bg-slate-800 transition duration-200 shadow-md hover:shadow-lg 
                       transform hover:-translate-y-[1px]"
          >
            Get Started
          </button>
        </nav>

        <button
          className="md:hidden p-2 text-slate-700 hover:text-teal-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-xl border-t border-slate-100">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-600 transition duration-150"
              >
                {item.name}
              </a>
            ))}
            <button
              className="w-full block px-3 py-2 mt-3 text-center text-sm font-semibold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

// --- Hero Section ---
const Hero = () => (
  <section className="bg-slate-950 pt-20 pb-24 md:pt-24 md:pb-40 overflow-hidden relative">
    {/* Animated Gradient Orbs */}
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      <div className="absolute w-96 h-96 bg-teal-500 rounded-full opacity-20 blur-3xl animate-blob -top-24 -left-16" />
      <div className="absolute w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-blob-delay -bottom-16 right-10" />
      <div className="absolute w-72 h-72 bg-rose-500 rounded-full opacity-20 blur-3xl animate-blob-delay-2 -top-6 -right-24" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left mb-12 lg:mb-0">
          <p className="text-teal-300 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            THE LIBRARY OF TURNING POINTS
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            <span className="block">Rewrite your story.</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400">
              One Bookify title at a time.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Breakthrough books and toolkits for the three things that hurt the most: love, money and
            career. You&apos;re not just reading — you&apos;re finally doing something about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#products">
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center group bg-teal-400 text-slate-950 font-semibold text-base 
                           py-3.5 px-8 rounded-full shadow-[0_18px_60px_rgba(45,212,191,0.5)]
                           hover:bg-teal-300 transition duration-200 transform hover:-translate-y-[2px]"
              >
                Discover bestsellers
                <span className="ml-2 inline-flex items-center justify-center rounded-full bg-slate-900/5 p-1">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
            </a>
            <a href="#about">
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center group bg-transparent text-white font-medium text-base 
                           py-3.5 px-8 rounded-full border border-white/20 hover:bg-white hover:text-slate-950 
                           transition duration-200 transform hover:-translate-y-[2px]"
              >
                What makes Bookify different
              </button>
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="lg:col-span-5 flex justify-center items-center mt-4 lg:mt-0">
          <div className="relative w-72 h-96 md:w-80 md:h-[380px] perspective-1000">
            <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-xl border border-white/10 transform rotate-6" />
            <div className="absolute inset-0 bg-white/5 rounded-3xl backdrop-blur-xl border border-white/10 transform -rotate-6" />
            <div className="absolute inset-0 bg-slate-900/40 rounded-3xl backdrop-blur-2xl border border-white/15 p-6 flex flex-col items-center justify-center shadow-[0_25px_80px_rgba(15,23,42,0.8)]">
              <span className="text-xs uppercase tracking-[0.3em] text-teal-300/80 mb-2">
                BOOKIFY ORIGINALS
              </span>
              <h2 className="text-3xl font-black text-white text-center leading-snug">
                Curated to
                <span className="block text-teal-300">hit where it matters.</span>
              </h2>
              <p className="mt-4 text-xs text-slate-300 text-center max-w-xs">
                Not generic self-help. Specific problems, specific playbooks, written for this generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// --- Products Section ---
const ProductsSection = () => (
  <section id="products" className="py-20 md:py-28 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
          The Bookify Arsenal
        </h2>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Each title is designed to solve one painful problem deeply — not ten problems lightly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.route} {...product} />
        ))}
      </div>
    </div>
  </section>
)

// --- About Section (Bento Grid) ---
const BentoCard = ({ className, children, icon, title }) => (
  <div
    className={`relative bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_18px_60px_rgba(15,23,42,0.06)] 
                p-6 md:p-7 flex flex-col border border-slate-100 ${className}`}
  >
    <div className="absolute top-4 right-4 p-2.5 bg-teal-50 text-teal-600 rounded-full shadow-inner">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2 mt-8 tracking-tight">{title}</h3>
    <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">{children}</p>
  </div>
)

const AboutSection = () => (
  <section id="about" className="bg-white py-20 md:py-28 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal-600 mb-3">
          OUR MANIFESTO
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-snug tracking-tight">
          Why people keep coming back to <span className="text-teal-600">Bookify</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
        <BentoCard
          className="md:col-span-2"
          title="Psychological depth without the heavy jargon"
          icon={<Brain className="w-5 h-5" />}
        >
          Every title is built on real-world psychology, behaviour, and patterns we see in actual
          people — not just theory copied from the internet. We translate it into language your
          younger self would understand.
        </BentoCard>
        <BentoCard
          className="md:col-span-1"
          title="Designed for modern attention spans"
          icon={<Zap className="w-5 h-5" />}
        >
          No 300-page lectures. You get sharp, structured chapters, prompts and frameworks that fit
          into a busy feed-scrolling life without losing depth.
        </BentoCard>
        <BentoCard
          className="md:col-span-3"
          title="Built for results, not vibes"
          icon={<Target className="w-5 h-5" />}
        >
          Whether it&apos;s walking away from a toxic storyline, fixing your money patterns, or
          finally getting a serious interview call — each product is engineered around measurable
          shifts. You&apos;ll know when it&apos;s working.
        </BentoCard>
      </div>
    </div>
  </section>
)

// --- CTA / Newsletter Section ---
const CTASection = () => (
  <section
    id="newsletter"
    className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-16 md:py-20"
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
        Stay two steps ahead of your old self.
      </h2>
      <p className="text-sm md:text-base text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
        Get early access to new drops, private discounts, and small, sharp essays on healing, money,
        and work — only for the Bookify inner circle.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your best email"
          className="w-full px-5 py-3 rounded-full text-slate-900 text-sm placeholder-slate-500 
                     focus:outline-none focus:ring-4 focus:ring-teal-400/40 bg-white"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-teal-400 text-slate-950 text-sm font-semibold 
                     hover:bg-teal-300 transition duration-200 transform hover:-translate-y-[2px] shadow-[0_15px_45px_rgba(45,212,191,0.45)]"
        >
          Join the list
        </button>
      </form>
    </div>
  </section>
)

// --- Footer Component ---
const Footer = () => (
  <footer id="footer" className="bg-slate-950 text-white py-10 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-slate-800 pb-8 mb-6">
        <div>
          <h4 className="text-lg font-black text-white mb-3 tracking-tight">Bookify</h4>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            A small, focused library of books and tools for people who are done pretending they&apos;re
            fine.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-teal-400 uppercase tracking-[0.25em] mb-3">
            Products
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-slate-400">
            <li>
              <a href="/wealth" className="hover:text-teal-400 transition">
                Wealth Reprograming Code
              </a>
            </li>
            <li>
              <a href="/cheater" className="hover:text-teal-400 transition">
                The Cheating Detector
              </a>
            </li>
            <li>
              <a href="/moveon" className="hover:text-teal-400 transition">
                You Lost Me — When I Found Myself
              </a>
            </li>
            <li>
              <a href="/resume" className="hover:text-teal-400 transition">
                The Essential Resume Tool Kit
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-teal-400 uppercase tracking-[0.25em] mb-3">
            Company
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-slate-400">
            <li>
              <a href="#about" className="hover:text-teal-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">
                Press
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-teal-400 uppercase tracking-[0.25em] mb-3">
            Connect
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-slate-400">
            <li>
              <a href="mailto:info@bookify.com" className="hover:text-teal-400 transition">
                Email support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-[11px] md:text-xs text-slate-500 pt-1">
        &copy; {new Date().getFullYear()} Bookify. All rights reserved.
      </div>
    </div>
  </footer>
)

// --- Main Page Component ---
export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        body {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
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

      <div className="min-h-screen flex flex-col antialiased bg-white">
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
  )
}
