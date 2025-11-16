import React from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  CheckCircle,
  BarChart3,
  Shield,
  Clock,
  Building2,
  Stethoscope,
  Store,
  Users,
  Calculator,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Site() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white text-slate-800">
        {/* NAV */}
        <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
          <div className="mx-auto max-w-6xl px-4 flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-emerald-700 text-white grid place-content-center font-bold">
                M
              </div>
              <div>
                <p className="font-semibold leading-tight">
                  Momentum—Bookkeeping For Growth, LLC
                </p>
                <p className="text-xs text-slate-500 -mt-0.5">
                  Insight that drives profitability
                </p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#services">Services</a>
              <a href="#industries">Industries</a>
              <a href="#about">About</a>
              <a href="#pricing">Pricing</a>
              <a href="#faq">FAQ</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="mailto:info@bookkeepingforgrowth.net"
                className="hidden lg:inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a
                href="https://cal.com/bookkeepingforgrowth"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
              >
                Book a free consult <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section id="home" className="mx-auto max-w-6xl px-4 pt-14 md:pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
              >
                Bookkeeping that turns{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 to-emerald-600">
                  insight
                </span>{" "}
                into profit.
              </motion.h1>

              <p className="mt-4 text-lg text-slate-700">
                We keep your books clean, current, and audit-ready so you can
                focus on growth. QuickBooks experts with healthcare-grade
                attention to detail.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://cal.com/bookkeepingforgrowth"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
                >
                  <Calculator className="h-4 w-4" /> Book a free consult
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Explore services
                </a>

                <p className="w-full mt-2 text-xs text-slate-600">
                  * Bookkeeping cost analysis included with free consultation
                </p>

                <div className="w-full md:w-auto flex flex-wrap items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
                    <CheckCircle className="h-4 w-4 text-emerald-700" />
                    QuickBooks ProAdvisors
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
                    <Shield className="h-4 w-4 text-emerald-700" />
                    Bank-grade security
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm backdrop-blur">
                    <Clock className="h-4 w-4 text-emerald-700" />
                    Month-end close on time
                  </span>
                </div>
              </div>
            </div>

            {/* KPI / credibility card */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl border border-slate-200 bg-white shadow-xl p-6 text-sm">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Monthly Close", value: "3–5 biz days" },
                    { label: "Avg. Cleanup", value: "2-3 week average" },
                    { label: "Client NPS", value: "+72" },
                    { label: "Reconciled Accounts", value: "100%" },
                    { label: "Error Rate", value: "< 0.5%" },
                    { label: "On-Time Reports", value: "99%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 * i, duration: 0.4 }}
                      className="rounded-2xl border border-slate-200 p-3 text-center"
                    >
                      <p className="text-[11px] uppercase tracking-wider text-slate-500">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-lg font-semibold">{stat.value}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl bg-emerald-700 text-white p-4 text-xs">
                  <p className="text-sm font-medium">
                    Bookkeeping from as low as $300/mth*
                  </p>
                  <p className="opacity-90 mt-1">
                    We know the economy is tough. Ask about new‑client
                    incentives and flexible onboarding to help with costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="py-20 md:py-28 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-slate-500">
              What we do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Full-stack bookkeeping designed for growth
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <BarChart3 className="h-5 w-5 text-emerald-700" />,
                  title: "Monthly Bookkeeping",
                  body: "Bank/CC reconciliations, AR/AP, payroll sync, and month-end close with GAAP-aligned financials.",
                },
                {
                  icon: <Shield className="h-5 w-5 text-emerald-700" />,
                  title: "Cleanup & Catch-up",
                  body: "Historical cleanup, categorization fixes, and rebuilding books so you can file with confidence.",
                },
                {
                  icon: <Clock className="h-5 w-5 text-emerald-700" />,
                  title: "Advisory & Reporting",
                  body: "KPI dashboards, cash-flow forecasting, and quarterly review meetings to turn numbers into strategy.",
                },
                {
                  icon: <Calculator className="h-5 w-5 text-emerald-700" />,
                  title: "QuickBooks Setup & Migration",
                  body: "QB Online setup, chart-of-accounts design, app integrations, and training for your team.",
                },
                {
                  icon: <Users className="h-5 w-5 text-emerald-700" />,
                  title: "Controller Services",
                  body: "Budgeting, class/location tracking, revenue recognition support, and audit preparation.",
                },
                {
                  icon: <CheckCircle className="h-5 w-5 text-emerald-700" />,
                  title: "Compliance Ready",
                  body: "1099 prep guidance, sales tax coordination, and documentation that keeps you inspection-ready.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-emerald-700/90 text-white p-2">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-slate-700">{card.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm text-slate-600">
              * We specialize in QuickBooks Online and stay current with
              frequent updates and new features. Our niche is{" "}
              <span className="font-semibold">cleanup &amp; catch-up</span> to
              get you current fast.
            </p>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          className="py-20 md:py-28 bg-slate-50"
        >
          <div className="mx-auto max-w-6xl px-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-slate-500">
              Transparent plans
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Simple, scalable pricing
            </h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter",
                  price: "Bookkeeping from as low as $300/mth*",
                  features: [
                    "Monthly bookkeeping",
                    "2 connected accounts",
                    "Basic financial statements",
                    "Email support",
                  ],
                },
                {
                  name: "Growth",
                  price: "Bookkeeping from as low as $300/mth*",
                  highlight: true,
                  features: [
                    "Everything in Starter",
                    "Up to 6 accounts",
                    "Monthly KPI dashboard",
                    "Quarterly advisory call",
                  ],
                },
                {
                  name: "Controller",
                  price: "Bookkeeping from as low as $300/mth*",
                  features: [
                    "Advanced reporting",
                    "Department/class tracking",
                    "Budgeting & forecasting",
                    "Audit prep",
                  ],
                },
              ].map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-3xl border ${
                    tier.highlight
                      ? "border-emerald-700 bg-emerald-700 text-white"
                      : "border-slate-200 bg-white text-slate-800"
                  } p-6 shadow-sm`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <span className="text-lg font-bold">{tier.price}</span>
                  </div>
                  <ul
                    className={`mt-4 space-y-2 ${
                      tier.highlight ? "text-white" : "text-slate-700"
                    }`}
                  >
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-emerald-700" />
                        <span className={tier.highlight ? "text-white" : ""}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://cal.com/bookkeepingforgrowth"
                    className={`mt-6 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold ${
                      tier.highlight
                        ? "bg-white text-emerald-700 hover:bg-slate-100"
                        : "bg-emerald-700 text-white hover:bg-emerald-600"
                    }`}
                  >
                    Book a free consult <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-slate-600">
                Need historical cleanup or migration? That’s our
                specialty—we’ll scope a fixed one-time project.
              </p>
              <p className="text-slate-700">
                We know the economy is tough: ask about new‑client incentives
                and flexible onboarding to help with costs.
              </p>
              <p className="text-xs text-slate-500">
                * Bookkeeping cost analysis included with free consultation
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-20 md:py-28 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8">
            {/* form card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <form className="grid gap-3">
                <div>
                  <label className="text-sm">Name</label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="text-sm">Company</label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="text-sm">
                    What do you need help with?
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-2xl border border-slate-300 px-3 py-2"
                    rows={4}
                    placeholder="Monthly books, cleanup, migration, reporting…"
                  />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      "https://cal.com/bookkeepingforgrowth",
                      "_blank"
                    )
                  }
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
                >
                  Book a free consult
                </button>
                <p className="mt-2 text-xs text-slate-600">
                  * Bookkeeping cost analysis included with free consultation
                </p>
                <p className="text-xs text-slate-500">
                  Prefer email?{" "}
                  <a
                    className="underline"
                    href="mailto:info@bookkeepingforgrowth.net"
                  >
                    info@bookkeepingforgrowth.net
                  </a>
                </p>
              </form>
            </div>

            {/* expectations card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">What to expect</h3>
              <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-700" /> A
                  friendly, no-pressure conversation
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-700" /> A clear
                  proposal with scope, timeline, and price
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-700" /> Quick
                  start with minimal disruption
                </li>
              </ul>

              <div className="mt-6 grid gap-2 text-sm">
                <a
                  className="inline-flex items-center gap-2"
                  href="mailto:info@bookkeepingforgrowth.net"
                >
                  <Mail className="h-4 w-4" /> info@bookkeepingforgrowth.net
                </a>
                <a
                  className="inline-flex items-center gap-2"
                  href="tel:+17862202753"
                >
                  <Phone className="h-4 w-4" /> (786) 220‑2753
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <p>
              © {new Date().getFullYear()} Momentum—Bookkeeping For Growth, LLC
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <a href="#">Privacy</a>
              <span>•</span>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
