"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// pages/index.js — Next.js (JavaScript) + Tailwind CSS landing page
export default function Home() {
  const [openModal, setOpenModal] = useState(false)
  const [slide, setSlide] = useState(0)

  const testimonials = [
    {
      name: 'Anisha R.',
      role: 'Product Analyst — Hired at Flipkart',
      quote:
        'Used the ATS template + DM scripts — got interviews within 2 weeks and an offer in 5. The outreach playbook really works.',
      avatar: 'https://i.pravatar.cc/128?img=12',
    },
    {
      name: 'Vikram S.',
      role: 'Software Dev — Fresher',
      quote:
        'I followed the job-hunt routine and used the cold email templates. Hired in 3 weeks. The ATS report helped me tune keywords.',
      avatar: 'https://i.pravatar.cc/128?img=24',
    },
    {
      name: 'Neha P.',
      role: 'UX Designer',
      quote:
        'The psychological hooks work — recruiters remembered my one-line value proposition. Editable DOCX made customisation easy.',
      avatar: 'https://i.pravatar.cc/128?img=34',
    },
    {
      name: 'Rohit K.',
      role: 'Software Engineer',
      quote:
        'Applied to 12 companies using the ATS template and got 4 screening calls. The DM templates got me a referral.',
      avatar: 'https://i.pravatar.cc/128?img=47',
    },
    {
      name: 'Sana M.',
      role: 'Product Analyst',
      quote:
        'Hired within 3 weeks. The outreach cadence and personalization tokens increased response rates dramatically.',
      avatar: 'https://i.pravatar.cc/128?img=58',
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
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold"><img src='log.png'></img></div>
          <div>
            <div className="font-semibold text-lg">Bookify</div>
            <div className="text-xs text-gray-500">ATS-Optimized • ₹249 • Built for Instagram job-hunters</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#proof" className="hover:underline">Proof</a>
          <a href="#techniques" className="hover:underline">Advanced Tricks</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <button onClick={() => window.location.href = "https://rzp.io/rzp/wFW4xh15"} className="ml-4 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium">Buy ₹249</button>
        </nav>

        <button className="md:hidden p-2 rounded-md border" aria-label="menu">☰</button>
      </header>

      {/* HERO */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Get hired faster — advanced <span className="text-indigo-600">ATS-ready</span> resumes + outreach system</h1>
          <p className="mt-4 text-gray-700 max-w-xl">Complete pack: ATS-scored resume templates, 100+ DM/email outreach templates, interview-selection strategies and psychological outreach techniques — designed for freshers and career-switchers who want results.</p>

          <div className="mt-6 flex gap-4">
            <button onClick={() => window.location.href = "https://rzp.io/rzp/wFW4xh15"} className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg">Get access ₹249</button>
            <a href="#features" className="px-4 py-3 rounded-lg border">See what is inside</a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
            <div className="p-3 bg-white rounded-xl shadow">
              <div className="text-xs text-gray-500">ATS Score (avg)</div>
              <div className="font-bold text-xl">95%</div>
            </div>
            <div className="p-3 bg-white rounded-xl shadow">
              <div className="text-xs text-gray-500">Cold templates</div>
              <div className="font-bold text-xl">100+</div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">Instant PDF + editable DOCX, Google Docs guide, Instagram-ready DM & short-form templates included.</div>
        </div>

        <aside className="relative bg-white rounded-3xl shadow-2xl p-6 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-100 rounded-full opacity-60 blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-500">Limited offer</div>
                <div className="text-3xl font-extrabold">₹249</div>
              </div>
              <div className="text-right text-sm text-green-600 font-semibold">Instant delivery</div>
            </div>

            <ul className="mt-6 text-sm text-gray-700 space-y-2">
              <li>• 3 ATS-ready templates (Fresher / Experienced / Switcher)</li>
              <li>• ATS scoring checklist + keywords bank</li>
              <li>• 100+ outreach templates: email, LinkedIn & Instagram DM</li>
              <li>• Job-search playbook, interview scripts & negotiation lines</li>
            </ul>

            <div className="mt-6">
              <button onClick={() => window.location.href = "https://rzp.io/rzp/wFW4xh15"} className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold">Buy now ₹249</button>
              <div className="mt-3 text-xs text-gray-500">30-day interview promise — terms apply</div>
            </div>
          </div>
        </aside>
      </main>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Features — built to get you interviews</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="ATS-first layouts"
            desc="Layouts and keyword placement tuned for top ATS systems so your resume gets parsed and ranked correctly."
          />
          <FeatureCard
            title="Outreach engine"
            desc="100+ subject lines, DM openers, follow-ups and referral request sequences — designed for high reply rates."
          />
          <FeatureCard
            title="Search playbook"
            desc="Exact boolean strings, filters, daily routines and automation templates for LinkedIn, Indeed and Instagram."
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Interview selection strategy"
            desc="How to craft 30-second value lines and screening call scripts so recruiters remember you."
          />
          <FeatureCard
            title="Offer & negotiation mini-guide"
            desc="Quick formulas to evaluate salary offers and counter with confidence."
          />
        </div>
      </section>

      {/* PROOF / STATS / TESTIMONIALS */}
      <section id="proof" className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold">Trusted by <span className="text-indigo-600">20,000+</span> freshers</h2>
              <p className="mt-3 text-gray-700">Over 20,000 users reported interviews and placement progress after using ResumeHive step-by-step system. We anonymize and verify placement screenshots on demand.</p>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <StatCard label="Users" value="20,000+" />
                <StatCard label="Avg. Interview Rate" value="3x" />
                <StatCard label="Avg. Response Time" value="48 hrs" />
              </div>
            </div>

            <div className="w-full lg:w-[520px]">
              <div className="relative">
                <div className="p-6 bg-white rounded-2xl shadow">
                  <div className="flex items-center gap-4">
                    <img src={testimonials[slide].avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="font-semibold">{testimonials[slide].name}</div>
                      <div className="text-xs text-gray-500">{testimonials[slide].role}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{testimonials[slide].quote}</p>

                  <div className="mt-4 flex gap-2">
                    {testimonials.map((t, i) => (
                      <button
                        key={t.name}
                        onClick={() => setSlide(i)}
                        className={`w-2 h-2 rounded-full ${i === slide ? 'bg-indigo-600' : 'bg-gray-300'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  {testimonials.slice(0, 3).map((t) => (
                    <div key={t.name} className="p-3 bg-white rounded-xl shadow text-sm">
                      <div className="font-semibold">{t.name.split(' ')[0]}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                      <p className="mt-2 text-gray-700 text-sm">{t.quote.slice(0, 80)}…</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-xs text-gray-500">Placement proof and anonymized screenshots available for verification after purchase.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANCED TECHNIQUES */}
      <section id="techniques" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Psychological (Advanced) Techniques & Tricks</h2>
        <p className="mt-3 text-gray-700 max-w-2xl">Short, actionable tactics from behavioural science and high-conversion copywriting that increase recruiter replies and interview invites. All templates include in-line examples so you can copy-paste instantly.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <TechniqueCard
            title="Social Proof + Scarcity"
            desc="Mention peer placements, class cohorts and limited availability to build trust and urgency in DMs and emails."
          />
          <TechniqueCard
            title="Value-first opening"
            desc="Start with a 1-line value proposition tailored to the role — recruiters respond to immediate impact claims."
          />
          <TechniqueCard
            title="Micro-commitments"
            desc="Ask for small asks (30-sec chat, a resource, or a referral contact) — increases the chance of 'yes'."
          />
        </div>

        <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
          <h4 className="font-semibold">Included examples</h4>
          <ol className="list-decimal list-inside mt-2 text-sm text-gray-700 space-y-2">
            <li>DM openers with personalization tokens + curiosity gaps.</li>
            <li>Email subject lines that use numbers & specificity to increase opens.</li>
            <li>Follow-up cadence (timing + templates) to avoid ghosting while staying polite.</li>
          </ol>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Pricing</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white shadow">
            <div className="text-sm text-gray-500">Single Pack</div>
            <div className="text-3xl font-extrabold mt-2">₹249</div>
            <div className="mt-4 text-sm text-gray-600">Everything included — instant download</div>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>• ATS templates (PDF + DOCX)</li>
              <li>• 100+ outreach templates</li>
              <li>• Full playbook & interview hacks</li>
            </ul>
            <button onClick={() => window.location.href = "https://rzp.io/rzp/wFW4xh15"} className="mt-6 w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold">Buy ₹249</button>
          </div>

          <div className="p-6 rounded-xl bg-white shadow col-span-2">
            <h3 className="font-semibold">What is inside — full breakdown</h3>
            <ol className="mt-4 list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>3 ATS-ready resume templates (Fresher, Experienced, Switcher)</li>
              <li>ATS scoring checklist & keywords bank</li>
              <li>100 outreach templates (email + Instagram DM + follow-ups)</li>
              <li>Job search boolean strings + automation tips</li>
              <li>Interview scripts, offer-eval sheet, negotiation lines</li>
              <li>Placement proof toolkit (how to share screenshots without exposing PII)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <strong>How will I receive files?</strong>
              <p className="mt-2">Instant download link after purchase. Files include PDF + editable DOCX + ATS checklist.</p>
            </div>
            <div>
              <strong>Is the 20,000+ number real?</strong>
              <p className="mt-2">This is a cumulative count of users who reported positive outcomes after following our playbook. Detailed screenshots and anonymized proof are available after purchase.</p>
            </div>
            <div>
              <strong>Do you offer refunds?</strong>
              <p className="mt-2">30-day money-back if you donot see interviews after following the playbook (terms & minimal evidence required).</p>
            </div>
            <div>
              <strong>Can I edit templates?</strong>
              <p className="mt-2">Yes — DOCX & Google Docs friendly, with clear instructions for customization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUY MODAL (SIMULATED) */}


      {/* FOOTER */}
      <footer className="py-8">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <div>© ResumeHive • Built for Instagram job-hunters • ₹249</div>
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
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow text-center">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-bold text-xl text-indigo-600">{value}</div>
    </div>
  )
}

function TechniqueCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h4 className="font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  )
}
