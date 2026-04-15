"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
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
  Zap,
  PlayCircle,
  CheckCircle2,
  Target,
  BadgeCheck,
} from "lucide-react";

const PAYMENT_URL = "https://rzp.io/rzp/x1cgunX";

const reasons = [
  {
    title: "Mehnat karke bhi result slow lag raha hai?",
    desc: "Is page ka structure confusion hata kar direct action tak le jaata hai.",
  },
  {
    title: "Kuch log quietly aage kaise nikal jaate hain?",
    desc: "Clean positioning, clear value, aur zero friction checkout ka combination.",
  },
  {
    title: "Aaj samjha to kal advantage tumhara hoga.",
    desc: "Simple flow, premium feel, aur buyer-friendly conversion layout.",
  },
];

const benefits = [
  "Straightforward digital access",
  "Beginner-friendly reading flow",
  "Fast mobile experience",
  "Instant delivery after payment",
  "Clean premium interface",
  "Built for Hindi audience",
];

const trustPoints = [
  "Secure payment flow",
  "Instant access after payment",
  "Fast checkout experience",
  "Mobile-first premium design",
];

const faqs = [
  {
    q: "Payment ke baad kya milega?",
    a: "Payment complete hone ke baad user success page par jayega aur wahan se income.pdf ka download button milega.",
  },
  {
    q: "Kya ye Hindi users ke liye sahi hai?",
    a: "Haan, page ka tone, flow aur wording Hindi audience ke natural reading style ke hisaab se rakha gaya hai.",
  },
  {
    q: "Price badal sakte hain?",
    a: "Haan, aap price text aur Razorpay checkout amount dono change kar sakte hain.",
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

  return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-white/70 backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-amber-300" />
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
      className={`group inline-flex items-center justify-center gap-3 rounded-2xl border border-yellow-300/40 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 px-6 py-4 text-sm font-extrabold text-black shadow-[0_18px_60px_rgba(250,204,21,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.01] ${className}`}
    >
      <span className="flex flex-col items-start leading-tight">
        <span className="flex items-center gap-2">
          <Zap className="h-4 w-4" />
          {label}
        </span>
        {sublabel ? <span className="text-[11px] font-semibold text-black/70">{sublabel}</span> : null}
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
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl transition hover:border-white/20 hover:bg-white/8"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-white sm:text-base">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-amber-300" /> : <ChevronDown className="h-5 w-5 text-amber-300" />}
      </div>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="text-sm leading-7 text-slate-300">{a}</p>
        </div>
      </div>
    </button>
  );
}

function ValueCard({ index, title, desc }) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8">
      <div className="absolute right-4 top-4 text-5xl font-black text-white/5">0{index + 1}</div>
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-200 ring-1 ring-white/10">
        <Target className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{desc}</p>
    </div>
  );
}

export default function PremiumHindiFunnelPage() {
  const [faqOpen, setFaqOpen] = useState(0);
  const timerLabel = useCountdown(2 * 60 * 60);

  useEffect(() => {
    document.documentElement.classList.add("scroll-smooth");
    return () => document.documentElement.classList.remove("scroll-smooth");
  }, []);

  const stats = useMemo(
    () => [
      { value: "12K+", label: "People interested" },
      { value: "6", label: "Clear benefits" },
      { value: "Instant", label: "Digital delivery" },
    ],
    []
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.16),transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0,rgba(5,8,22,0.15)_55%,rgba(5,8,22,0.82)_100%)]" />

      <div className="relative z-10 pb-24 sm:pb-0">
        <div className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-400 text-black shadow-lg shadow-yellow-400/20">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Bookifie</p>
                <p className="text-[11px] text-slate-400">Premium digital access</p>
              </div>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <div className="rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-1 text-xs font-medium text-yellow-200">
                Offer ends in {timerLabel}
              </div>
              <CTAButton href={PAYMENT_URL} label="Buy Now" sublabel="Secure checkout" />
            </div>
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-xl">
                <PlayCircle className="h-4 w-4 text-amber-300" />
                Change the way you learn about income generation.
              </div>

              <h1 className="max-w-2xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Jo samajh gaya, woh aage nikal gaya.
              </h1>

              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
                Logo ke liye kam krna band kro ab apna kam suru kro ab time aa gya ab nhi to kv nhi yhi shi samay hai ye ho skta bar bar mauka na aye mauka na choro best of luck .buy now.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href={PAYMENT_URL} label="Unlock Access Now" sublabel="Instant payment + download" />
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
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                    <div className="text-2xl font-bold text-white">{item.value}</div>
                    <div className="mt-1 text-xs text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-yellow-300/20 via-violet-500/18 to-cyan-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/6 p-6 shadow-2xl backdrop-blur-2xl">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl" />
                <div className="absolute -bottom-10 left-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">What the buyer sees</p>
                    <h3 className="text-xl font-semibold text-white">Clean, premium, trustworthy</h3>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Secure
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {reasons.map((item, i) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                      <div className="mb-2 flex items-center gap-2 text-xs font-medium text-amber-200">
                        <BadgeCheck className="h-4 w-4" />
                        Why it works {i + 1}
                      </div>
                      <div className="text-base font-semibold text-white">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Today’s price</div>
                      <div className="mt-1 text-3xl font-black text-white">₹249</div>
                    </div>
                    <div className="text-right text-sm text-slate-300">
                      <div className="line-through text-slate-500">₹1,999</div>
                      <div className="mt-1 font-semibold text-emerald-300">80% off</div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <CTAButton href={PAYMENT_URL} label="Buy Now" sublabel="Go to secure payment" className="w-full sm:w-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why this page converts"
            title="Premium design, clear value, strong action"
            subtitle="No unnecessary words. No clutter. Just a clean layout that helps the buyer decide faster."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((item, index) => (
              <ValueCard key={item.title} index={index} title={item.title} desc={item.desc} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <SectionTitle
                eyebrow="What they get"
                title="Simple, useful, premium"
                subtitle="Do this you will never regret. Do this and you will thank yourself later. This is the best time to start. Don't miss out on this opportunity to change your life."
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

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-yellow-300/10 via-violet-500/10 to-cyan-400/10 p-7 backdrop-blur-xl">
              <SectionTitle
                eyebrow="Trust stack"
                title="Why people click the button"
                subtitle="The CTA should feel obvious, attractive, and easy to tap on mobile."
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
                  <Clock3 className="h-4 w-4 text-amber-300" />
                  Limited-time offer feel, without visual noise.
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  The page stays premium and focused while still creating enough urgency to move the user to checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Social proof"
            title="Make the page feel credible"
            subtitle="Use real testimonials later. For now, keep the layout polished and convincing."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "Rahul", c: "Delhi", t: "Straight and premium flow" },
              { n: "Priya", c: "Mumbai", t: "Feels expensive and clean" },
              { n: "Aman", c: "Lucknow", t: "Buy button stands out perfectly" },
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
                  Delivery after payment
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Payment ke baad flow simple rehna chahiye.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Razorpay complete hone ke baad success page dikhao, aur wahan income.pdf ka download button do. Simple, fast, and premium.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-950/30 p-6">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-200">
                  <Download className="h-4 w-4 text-amber-300" />
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
            title="Common doubts, answered fast"
            subtitle="This reduces friction without making the page look crowded."
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
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-yellow-300/10 via-violet-500/10 to-cyan-400/10 p-8 text-center shadow-[0_30px_120px_rgba(0,0,0,0.35)] sm:p-12">
            <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-yellow-300/15 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-violet-500/15 blur-3xl" />
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur">
              <Lock className="h-6 w-6" />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              Ready to move the user to checkout?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Use this structure, connect Razorpay, send them to success page, and show the income.pdf download button after payment.
            </p>
            <div className="mt-8 flex justify-center">
              <CTAButton href={PAYMENT_URL} label="Buy Now" sublabel="Go to payment page" />
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
          © 2026 Bookifie. Premium digital delivery.
        </footer>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#050816]/90 px-4 py-3 backdrop-blur-xl sm:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="flex-1">
            <div className="text-[11px] font-medium text-yellow-200">Limited offer · {timerLabel}</div>
            <div className="text-sm font-semibold text-white">Unlock access now</div>
          </div>
          <CTAButton href={PAYMENT_URL} label="Buy Now" sublabel="Secure" className="shrink-0 px-4 py-3 text-sm" />
        </div>
      </div>
    </main>
  );
}
