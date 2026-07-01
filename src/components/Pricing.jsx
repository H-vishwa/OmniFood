import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";

const tabs = ["Starter", "Complete"];

const plans = [
  {
    number: "01",
    name: "Starter",
    tagline: "For busy professionals who want healthy meals without the hassle.",
    bestFor: "Singles, students, remote workers, and anyone eating 1 meal a day.",
    included: [
      "1 meal per day",
      "Free delivery",
      "Order 11am – 9pm",
      "Weekly AI meal plan",
      "Diet customisation",
    ],
    perks: [
      "5,000+ recipe library",
      "Nutritionist-verified",
      "Packaging-free meals",
      "Pause anytime",
      "Cancel anytime",
    ],
    timeline: "Daily delivery",
    price: "₹399 / mo",
    cta: "#cta",
  },
  {
    number: "02",
    name: "Complete",
    tagline: "For families and high-performers who want full daily nutrition covered.",
    bestFor: "Families, fitness-focused individuals, and anyone who wants 2 meals a day.",
    included: [
      "2 meals per day",
      "Free delivery",
      "Order 24 / 7",
      "Weekly AI meal plan",
      "Priority diet support",
    ],
    perks: [
      "Access to new recipes first",
      "Nutritionist consultations",
      "Zero-waste packaging",
      "Pause anytime",
      "Family account sharing",
    ],
    timeline: "Daily delivery",
    price: "₹649 / mo",
    cta: "#cta",
  },
];

const features = [
  { label: "Never cook again", desc: "365 days a year, including holidays — your meals always show up." },
  { label: "Local & organic", desc: "Every ingredient is sourced fresh from local, certified organic farms." },
  { label: "Zero waste", desc: "All packaging is reusable or compostable. Guilt-free every time." },
  { label: "Pause anytime", desc: "Going on vacation? Pause your plan and we'll refund unused days." },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    // Header reveal
    gsap.fromTo(
      ".pricing-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-header",
          start: "top 85%",
        },
      }
    );

    // Cards reveal
    gsap.fromTo(
      ".pricing-cards-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-cards-container",
          start: "top 80%",
        },
      }
    );

    // Bottom features reveal
    gsap.fromTo(
      ".pricing-feature-col",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pricing-feature-col",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-white py-[12rem] border-b border-stone-200 overflow-hidden" id="pricing">
      <div className="max-w-[120rem] px-[3.2rem] mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-[6.4rem] pricing-header opacity-0">
          <span className="block text-[1.2rem] font-semibold tracking-[0.25em] uppercase text-stone-400 mb-5">
            Packages &amp; Pricing
          </span>
          <h2
            className="font-serif italic text-primary leading-[0.95] mb-3"
            style={{ fontSize: "clamp(5.6rem, 9vw, 9.6rem)" }}
          >
            Two Ways
          </h2>
          <p className="font-serif text-[3.2rem] font-light text-stone-900 leading-[1.1] max-lg:text-[2.6rem]">
            we can eat well together.
          </p>
        </div>

        {/* ── TABS ── */}
        <div className="flex gap-0 mb-[7.2rem] border-b border-stone-200">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`text-[1.4rem] font-semibold tracking-wide pb-4 pr-8 mr-4 cursor-pointer border-0 bg-transparent transition-all duration-200 ${
                activeTab === i
                  ? "text-stone-900 border-b-2 border-stone-900 -mb-[2px]"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── PLAN CARDS ── */}
        <div className="grid grid-cols-2 gap-[1px] mb-[9.6rem] max-md:grid-cols-1 bg-stone-200 border border-stone-200 rounded-[2rem] overflow-hidden pricing-cards-container opacity-0">
          {plans.map((plan, i) => {
            const isHighlighted = i === activeTab;
            return (
              <div
                key={plan.number}
                className={`p-[5.6rem] transition-all duration-300 max-lg:p-[4rem] max-md:p-[3.2rem] ${
                  isHighlighted ? "bg-stone-50" : "bg-white"
                }`}
              >
                {/* ── Plan header ── */}
                <div className="mb-[4.8rem]">
                  <span className="block font-serif italic text-primary/25 leading-[1] mb-4 select-none"
                    style={{ fontSize: "clamp(4rem, 6vw, 6.4rem)" }}>
                    {plan.number}
                  </span>
                  <h3 className="font-serif text-[2.4rem] font-light text-stone-900 mb-3 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-[1.5rem] text-stone-500 font-sans leading-[1.7] mb-2">
                    {plan.tagline}
                  </p>
                  <p className="text-[1.4rem] text-stone-400 font-sans leading-[1.6]">
                    <span className="text-stone-600 font-semibold">Best for:</span>{" "}
                    {plan.bestFor}
                  </p>
                </div>

                {/* ── 2-col breakdown: Included | Perks ── */}
                <div className="grid grid-cols-2 gap-x-[4rem] gap-y-[3.2rem] mb-[4.8rem] border-t border-stone-200 pt-[4rem] max-sm:grid-cols-1">
                  {/* Included */}
                  <div>
                    <p className="text-[1.2rem] font-bold tracking-[0.18em] uppercase text-stone-900 mb-[1.6rem]">
                      Included
                    </p>
                    <ul className="flex flex-col gap-[1.2rem] list-none p-0 m-0">
                      {plan.included.map((item) => (
                        <li key={item} className="text-[1.5rem] text-stone-500 font-sans leading-[1.5]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perks / Services */}
                  <div>
                    <p className="text-[1.2rem] font-bold tracking-[0.18em] uppercase text-stone-900 mb-[1.6rem]">
                      Services
                    </p>
                    <ul className="flex flex-col gap-[1.2rem] list-none p-0 m-0">
                      {plan.perks.map((item) => (
                        <li key={item} className="text-[1.5rem] text-stone-500 font-sans leading-[1.5]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ── Bottom row: Timeline | Investment ── */}
                <div className="grid grid-cols-2 gap-x-[4rem] border-t border-stone-200 pt-[3.2rem] max-sm:grid-cols-1">
                  <div>
                    <p className="text-[1.2rem] font-bold tracking-[0.18em] uppercase text-stone-900 mb-[1.2rem]">
                      Timeline
                    </p>
                    <p className="text-[1.5rem] text-stone-500 font-sans">{plan.timeline}</p>
                  </div>

                  <div>
                    <p className="text-[1.2rem] font-bold tracking-[0.18em] uppercase text-stone-900 mb-[1.2rem]">
                      Investment
                    </p>
                    <p className="font-serif italic text-primary leading-[1.1]"
                      style={{ fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)" }}>
                      From {plan.price}
                    </p>
                    <a
                      href={plan.cta}
                      className="inline-block mt-3 text-[1.2rem] font-semibold tracking-widest uppercase text-stone-400 border-b border-stone-300 pb-[2px] hover:text-stone-900 hover:border-stone-900 transition-colors duration-200 no-underline"
                    >
                      Get started →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM FEATURE STRIP ── */}
        <div className="border-t border-stone-200 pt-[6.4rem] grid grid-cols-4 gap-[3.2rem] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {features.map((f) => (
            <div key={f.label} className="flex flex-col gap-3 pricing-feature-col opacity-0">
              <Check className="w-[1.8rem] h-[1.8rem] text-primary shrink-0" />
              <p className="font-serif text-[1.8rem] font-medium text-stone-900 leading-[1.2]">{f.label}</p>
              <p className="text-[1.4rem] text-stone-500 font-sans leading-[1.7]">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-[1.4rem] text-stone-400 font-sans text-center mt-[4.8rem]">
          Prices include all applicable taxes. Cancel or pause anytime.
        </p>
      </div>
    </section>
  );
}
