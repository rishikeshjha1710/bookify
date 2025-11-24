"use client"
import React, { useState, useEffect } from "react"

export default function Home() {
  const [slide, setSlide] = useState(0)

  const testimonials = [
    {
      name: "Anisha R.",
      role: "Product Analyst",
      quote:
        "Bookify’s system turned my random job hunt into a clear routine. My resume started getting shortlisted and HRs actually replied.",
      avatar: "https://i.pravatar.cc/128?img=12",
    },
    {
      name: "Vikram S.",
      role: "Software Developer — Fresher",
      quote:
        "I stopped guessing. I followed the Bookify playbook step by step and landed 3 interviews in a month from almost zero responses.",
      avatar: "https://i.pravatar.cc/128?img=24",
    },
    {
      name: "Neha P.",
      role: "UX Designer",
      quote:
        "The way they explained ATS, hidden job portals and LinkedIn strategy made everything feel simple and doable. I felt in control again.",
      avatar: "https://i.pravatar.cc/128?img=34",
    },
    {
      name: "Rohit K.",
      role: "Software Engineer",
      quote:
        "Bookify made me realise my resume wasn’t the problem alone — it was how and where I was applying. The advanced hooks changed my replies.",
      avatar: "https://i.pravatar.cc/128?img=47",
    },
  ]

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % testimonials.length), 5500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900 antialiased">
      {/* NAV */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
            <img src="log.png" alt="Bookify logo" className="w-12 h-12 object-contain" />
          </div>
          <div>
            <div className="font-semibold text-lg">Bookify</div>
            <div className="text-xs text-gray-500">
              Advanced job hunt & ATS system in one playbook
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#why" className="hover:underline">
            Why Bookify
          </a>
          <a href="#inside" className="hover:underline">
            What&apos;s inside
          </a>
          <a href="#proof" className="hover:underline">
            Results
          </a>
          <a href="#pricing" className="hover:underline">
            Launch offer
          </a>
          <button
            onClick={() => (window.location.href = "https://rzp.io/rzp/wFW4xh15")}
            className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium"
          >
            Get Bookify — ₹249
          </button>
        </nav>

        <button className="md:hidden p-2 rounded-md border" aria-label="menu">
          ☰
        </button>
      </header>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
            For freshers & job switchers who are tired of guessing
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
            Think for a second — you&apos;re not buying a file,{" "}
            <span className="text-indigo-600">you&apos;re buying your next chance.</span>
          </h1>

          <p className="mt-4 text-gray-700 max-w-xl">
            Bookify is a compact, advanced playbook that combines an ATS-friendly resume system
            (built to clear up to 90% of common ATS checks) with the same job search patterns
            experienced candidates quietly use: where they apply, who they contact, and how they stay
            on top of the pile.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={() => (window.location.href = "https://rzp.io/rzp/wFW4xh15")}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg"
            >
              Unlock Bookify — ₹249
            </button>
            <a href="#inside" className="px-4 py-3 rounded-lg border text-sm">
              See what you get inside
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
            <div className="p-3 bg-white rounded-xl shadow">
              <div className="text-xs text-gray-500">ATS focus</div>
              <div className="font-bold text-lg">Resume tuned for ~90% ATS checks</div>
            </div>
            <div className="p-3 bg-white rounded-xl shadow">
              <div className="text-xs text-gray-500">System, not luck</div>
              <div className="font-bold text-lg">From &quot;apply everywhere&quot; → targeted routine</div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            You get instant access after payment — nothing to ship, nothing to wait for.
          </div>
        </div>

        {/* OFFER CARD */}
        <aside className="relative bg-white rounded-3xl shadow-2xl p-6 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-100 rounded-full opacity-60 blur-3xl" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Launch offer</div>
                <div className="text-3xl font-extrabold">₹249</div>
              </div>
              <div className="text-right text-sm text-green-600 font-semibold">
                Full system access
                <br />
                Instant download
              </div>
            </div>

            <ul className="mt-6 text-sm text-gray-700 space-y-2">
              <li>• ATS-friendly resume framework with example layouts and structure</li>
              <li>• Advanced job search map: what experienced people do differently</li>
              <li>• HR & referral connection framework (without awkward messaging shown on screen)</li>
              <li>• Deep-dive on LinkedIn & Naukri hacks that most people never use properly</li>
              <li>• Section on underrated portals and how to extract signal from them</li>
            </ul>

            <div className="mt-6">
              <button
                onClick={() => (window.location.href = "https://rzp.io/rzp/wFW4xh15")}
                className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold"
              >
                Get Bookify now — ₹249
              </button>
              <div className="mt-3 text-xs text-gray-500">
                Limited launch pricing. You keep lifetime access to the current version of the playbook.
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* WHY BOOKIFY */}
      <section id="why" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Why Bookify exists</h2>
        <p className="mt-3 text-gray-700 max-w-2xl">
          If you&apos;ve ever refreshed email waiting for an interview call, you already know this: the
          problem isn&apos;t always your talent. It&apos;s the way your profile enters the system, how
          it&apos;s filtered, and whether you&aposre even seen. Bookify is designed for that invisible
          gap — between &quot;applied&quot; and being noticed.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Built around how hiring actually works"
            desc="Instead of random tips, Bookify follows the journey of your profile in real hiring funnels — ATS filters, recruiter screens, manager reviews."
          />
          <FeatureCard
            title="Emotion + structure"
            desc="We don&apos;t dump scripts in front of you. We show you how strong candidates think about their messaging so you can build your own version."
          />
          <FeatureCard
            title="Focused on freshers & switchers"
            desc="Especially if you&apos;re from a non-IIT/NIT college or switching fields, Bookify gives you a way to compete without needing a big brand name."
          />
        </div>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="inside" className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold">What you get inside Bookify</h2>
          <p className="mt-3 text-gray-700 max-w-2xl">
            We don&apos;t reveal every page here. You see the outline — the real details open only once you&apos;re
            inside. The goal is simple: move you from confusion to a calm, repeatable job hunt routine.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsideCard
              tag="Module 1"
              title="ATS-friendly resume system (~90% checks)"
              points={[
                "Stepwise method to structure your resume so ATS systems can read and rank it correctly.",
                "Guidance on keywords, layout, and sections — tuned for both software and human eyes.",
                "Multiple resume patterns for fresher, experienced, and switching profiles.",
              ]}
            />
            <InsideCard
              tag="Module 2"
              title="Advanced job search patterns used by experienced candidates"
              points={[
                "How people who are serious about jobs plan applications instead of just using the 'Easy Apply' button.",
                "How they decide which roles are worth their time and which ones to ignore.",
                "How they quietly keep themselves in front of the right recruiters without spamming.",
              ]}
            />
            <InsideCard
              tag="Module 3"
              title="HR, recruiter & referral connection framework"
              points={[
                "High-level framework to identify the right people for your profile inside a company.",
                "Clear flow of when to connect, when to follow up, and when to step back.",
                "Referral ladder concept — moving from stranger to a warm internal contact in steps.",
              ]}
            />
            <InsideCard
              tag="Module 4"
              title="LinkedIn & Naukri — used properly"
              points={[
                "How to treat LinkedIn as a search and relationship tool, not just a feed.",
                "Ways to optimise your Naukri presence so recruiters actually see and call you.",
                "Common mistakes that silently reduce your visibility, and what to do differently.",
              ]}
            />
            <InsideCard
              tag="Module 5"
              title="Underrated portals & hidden opportunities"
              points={[
                "Where serious candidates quietly look beyond the usual job boards.",
                "How to use smaller portals without wasting time on low-quality postings.",
                "How to track your usage so you know what&apos;s working and what isn&apos;t.",
              ]}
            />
            <InsideCard
              tag="Module 6"
              title="Advanced hooks that make people pause"
              points={[
                "How to think about hooks that make recruiters stop scrolling.",
                "Positioning yourself so you feel like a solution, not just an applicant.",
                "Examples of emotional angles (without giving away the exact copy).",
              ]}
            />
          </div>
        </div>
      </section>

      {/* PROOF / TESTIMONIALS */}
      <section id="proof" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">People who used Bookify started to feel… different about their job hunt</h2>
        <p className="mt-3 text-gray-700 max-w-2xl">
          These are not miracle stories — they are stories of people who stopped acting at random and started following
          a system they could repeat every week.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-5 bg-white rounded-xl shadow">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-[11px] text-gray-500">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-700">{t.quote}</p>
            </div>
          ))}
        </div>

        {/* Rotating testimonial highlight */}
        <div className="mt-8 max-w-xl p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
          <div className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
            Live highlight from Bookify users
          </div>
          <p className="mt-2 text-sm text-gray-800">{testimonials[slide].quote}</p>
        </div>
      </section>

      {/* PRICING / CTA */}
      <section id="pricing" className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold">Launch offer — Bookify Playbook</h2>
          <p className="mt-3 text-gray-700 max-w-2xl">
            One-time payment, instant access. No upsells inside, no tricks. You&apos;re paying for clarity, not chaos.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-indigo-50 border border-indigo-100 shadow-sm">
              <div className="text-sm text-gray-500">Bookify Playbook</div>
              <div className="text-3xl font-extrabold mt-2">₹249</div>
              <div className="mt-4 text-sm text-gray-600">
                Full digital system — you can read it on mobile, tablet, or laptop.
              </div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• ATS-friendly resume framework</li>
                <li>• Advanced job search patterns</li>
                <li>• HR & referral connection framework</li>
                <li>• LinkedIn & Naukri usage strategy</li>
                <li>• Underrated portal guide</li>
                <li>• Advanced hooks & emotional positioning</li>
              </ul>
              <button
                onClick={() => (window.location.href = "https://rzp.io/rzp/wFW4xh15")}
                className="mt-6 w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold"
              >
                Get Bookify — ₹249
              </button>
              <div className="mt-3 text-[11px] text-gray-500">
                You&apos;ll receive a download link immediately after successful payment.
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white shadow col-span-2">
              <h3 className="font-semibold text-lg">What changes after you get inside</h3>
              <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-2">
                <li>You stop wondering whether your resume is even entering the system properly.</li>
                <li>You know exactly which days you apply, follow up, and review your pipeline.</li>
                <li>You understand who to connect with — and when — instead of sending random requests everywhere.</li>
                <li>You can finally say, &quot;Yes, I have a job hunt system&quot; instead of, &quot;I&apos;m just trying everything.&quot;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <div>© Bookify • Advanced job hunt & ATS playbook • ₹249</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function InsideCard({ tag, title, points }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <div className="text-[11px] uppercase tracking-wide text-indigo-500 font-semibold">
        {tag}
      </div>
      <h3 className="mt-1 font-semibold text-sm">{title}</h3>
      <ul className="mt-3 list-disc list-inside text-sm text-gray-600 space-y-1">
        {points.map((p, idx) => (
          <li key={idx}>{p}</li>
        ))}
      </ul>
    </div>
  )
}
