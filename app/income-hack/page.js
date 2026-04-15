"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock3,
  Download,
  Gift,
  Lock,
  Sparkles,
  Star,
  ShieldCheck,
  TrendingUp,
  Zap,
  PlayCircle,
  CheckCircle2,
  Target,
  Users,
} from "lucide-react";

const PAYMENT_URL = "https://rzp.io/rzp/x1cgunX"; // replace with your checkout link or Razorpay flow

const hooks = [
  {
    title: "सब लोग काम कर रहे हैं, कम क्यों नहीं हो रहा?",
    desc: "Aise systems jo hustle ko output mein convert karte hain — bina heavy setup ke.",
  },
  {
    title: "Kuch log chup-chaap kaise kama rahe hain?",
    desc: "Ye page curiosity pe nahi, clear outcome pe sell karta hai.",
  },
  {
    title: "Jo aaj seekh lega, wahi aage nikalta hai.",
    desc: "Simple, direct, and built for buyers who want a real next step.",
  },
];

const benefits = [
  "Straight-to-the-point framework",
  "Beginner-friendly action steps",
  "Fast implementation",
  "Digital delivery after payment",
  "Works on mobile-friendly content",
  "Built for Hindi audience mindset",
];

const trustPoints = [
  "Secure payment flow",
  "Instant access after payment",
  "Clean and fast checkout",
  "Mobile-first design",
];

const faqs = [
  {
    q: "What happens after payment?",
    a: "User is redirected to success page and then gets the download link for the PDF file from public folder.",
  },
  {
    q: "Is this page made for Hindi users?",
    a: "Yes, the copy, tone, and CTA flow are written to feel natural for Hindi-speaking buyers.",
  },
  {
    q: "Can I change the price?",
    a: "Yes. Replace the price text and the checkout amount in your Razorpay flow.",
  },
];

function useCountdown(initialSeconds) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return {
    secondsLeft,
    label: `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`,
  };
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/70 backdrop-blur">
        <Sparkles className="h-4 w-4 text-violet-300" />
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-sm leading-7 text-slate-300 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

function CTAButton({ href, label, sublabel, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_rgba(139,92,246,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] sm:px-8 sm:py-4 sm:text-base ${className}`}
    >
      <span className="flex flex-col items-start leading-tight">
        <span className="flex items-center gap-2">
          <Zap className="h-4 w-4" />
          {label}
        </span>
        {sublabel ? <span className="text-[11px] font-medium text-slate-900/70">{sublabel}</span> : null}
      </span>
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur transition hover:border-white/20 hover:bg-white/7"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-white sm:text-base">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-violet-300" /> : <ChevronDown className="h-5 w-5 text-violet-300" />}
      </div>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="text-sm leading-7 text-slate-300">{a}</p>
        </div>
      </div>
    </button>
  );
}

function HookCard({ index, title, desc }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8">
      <div className="absolute right-4 top-4 text-5xl font-black text-white/5">0{index + 1}</div>
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-violet-200 ring-1 ring-white/10">
        <Target className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
    </div>
  );
}

export default function PremiumHindiFunnelPage() {
  const [faqOpen, setFaqOpen] = useState(0);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const { label: timerLabel } = useCountdown(2 * 60 * 60);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = useMemo(
    () => [
      { value: "12K+", label: "Interested readers" },
      { value: "6", label: "Key frameworks" },
      { value: "Instant", label: "Digital delivery" },
    ],
    []
  );

  const anchors = {
    buy: PAYMENT_URL,
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#060816] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.24),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.15),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.14),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <div className="relative z-10">
        <div className="sticky top-0 z-50 border-b border-white/10 bg-[#060816]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 shadow-lg shadow-violet-500/20">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Bookifie</p>
                <p className="text-[11px] text-slate-400">Premium digital access</p>
              </div>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Offer ends in {timerLabel}
              </div>
              <CTAButton href={anchors.buy} label="Buy Now" sublabel="Secure checkout" />
            </div>
          </div>
        </div>

        <section ref={heroRef} className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur">
                <PlayCircle className="h-4 w-4 text-cyan-300" />
                Hidden income angle for Hindi users
              </div>

              <h1 className="max-w-2xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Jo log samajh gaye, woh aage nikal gaye.
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
                Ye page generic ad nahi hai. Ye ek clean premium funnel hai jo curiosity, pain aur outcome ko combine karke user ko buy karne tak le jaata hai.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href={anchors.buy} label="Unlock Access Now" sublabel="Instant payment + download" />
                <a
                  href="#details"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  See what’s inside
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-cyan-400/20 via-violet-500/20 to-fuchsia-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Premium access</p>
                    <h3 className="text-xl font-semibold text-white">Instant digital delivery</h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Secure
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {hooks.map((hook, i) => (
                    <div key={hook.title} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-violet-200">
                        <BadgeCheck className="h-4 w-4" />
                        Hook {i + 1}
                      </div>
                      <div className="text-base font-semibold text-white">{hook.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{hook.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Today’s price</div>
                      <div className="mt-1 text-3xl font-black">₹399</div>
                    </div>
                    <div className="text-right text-sm text-slate-300">
                      <div className="line-through text-slate-500">₹1,999</div>
                      <div className="mt-1 font-semibold text-emerald-300">80% off</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <CTAButton href={anchors.buy} label="Buy Now" sublabel="Go to secure payment" className="w-full sm:w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why this converts"
            title="Strong hook, clean layout, direct CTA"
            subtitle="This page is built to feel premium, modern, and trustworthy. It removes confusion and pushes the user toward action fast."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {hooks.map((item, index) => (
              <HookCard key={item.title} index={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <SectionTitle
                eyebrow="What you get"
                title="Simple, premium, useful"
                subtitle="Show the buyer exactly what they are paying for. No fluff. Just value and clarity."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <span className="text-sm leading-6 text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-fuchsia-500/10 p-7 backdrop-blur-xl">
              <SectionTitle
                eyebrow="Trust stack"
                title="Why people click the CTA"
                subtitle="The button should not feel like an ad. It should feel like the obvious next step."
              />
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {trustPoints.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <ShieldCheck className="h-5 w-5 text-cyan-300" />
                    <span className="text-sm font-medium text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Clock3 className="h-4 w-4 text-violet-300" />
                  Limited-time offer feel, without clutter.
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  The goal is to reduce hesitation and keep the user moving toward the payment screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Social proof"
            title="Make the page feel real and high value"
            subtitle="Use honest proof later. For now, the structure should support trust and momentum."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "Rahul", c: "Delhi", t: "Clear copy + fast buying flow" },
              { n: "Priya", c: "Mumbai", t: "Feels premium on mobile" },
              { n: "Aman", c: "Lucknow", t: "CTA is impossible to miss" },
            ].map((t) => (
              <div key={t.n} className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex gap-1 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{t.t}</p>
                <div className="mt-5 text-sm font-semibold text-white">{t.n}</div>
                <div className="text-xs text-slate-400">{t.c}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300">
                  <Gift className="h-4 w-4" />
                  Bonus delivery after payment
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Buyer journey should feel smooth.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  After payment, send them to a success page, then show a clear download button for the PDF. Keep the experience clean and premium.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/30 p-6">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <Download className="h-4 w-4 text-cyan-300" />
                  Flow
                </div>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-violet-500/20 text-violet-200">1</div>
                    Click CTA
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-cyan-500/20 text-cyan-200">2</div>
                    Razorpay payment
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/20 text-emerald-200">3</div>
                    Success page
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-fuchsia-500/20 text-fuchsia-200">4</div>
                    Download PDF
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Keep objections out of the way"
            subtitle="Answer the simple questions right on the page. That improves trust and clicks."
          />
          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <AccordionItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={faqOpen === idx}
                onToggle={() => setFaqOpen(faqOpen === idx ? -1 : idx)}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-cyan-500/15 to-fuchsia-500/20 p-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:p-12">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Ready to make the CTA unavoidable?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Use this layout, then connect Razorpay, redirect to success, and show the PDF download link after payment.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href={anchors.buy} label="Buy Now" sublabel="Go to payment page" />
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
          © 2026 Bookifie. Premium digital delivery.
        </footer>
      </div>
    </main>
  );
}
