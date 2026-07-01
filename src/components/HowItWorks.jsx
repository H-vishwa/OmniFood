import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const steps = [
  {
    number: "01",
    label: "Step One",
    title: "Tell us what you like",
    description:
      "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
    image: "/image/app/app-screen-1.png",
    tag: "Preferences",
  },
  {
    number: "02",
    label: "Step Two",
    title: "Approve weekly plan",
    description:
      "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
    image: "/image/app/app-screen-2.png",
    tag: "Your plan",
  },
  {
    number: "03",
    label: "Step Three",
    title: "Daily door delivery",
    description:
      "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
    image: "/image/app/app-screen-3.png",
    tag: "Delivery",
  },
];

const bottomFeatures = [
  {
    index: "01",
    title: "Built around your cravings",
    desc: "Every meal plan is shaped entirely by your dietary goals, allergies, and flavour preferences.",
  },
  {
    index: "02",
    title: "Designed to keep working",
    desc: "From Monday prep to Friday delivery — the system adapts seamlessly to your busy schedule.",
  },
  {
    index: "03",
    title: "Native in both worlds",
    desc: "Available on iOS and Android with a single tap — manage your meals from anywhere.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) setActiveStep(index);
          }
        });
      },
      { threshold: 0.55 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Header title reveal
    gsap.fromTo(
      "#how h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#how h2",
          start: "top 85%",
        },
      }
    );

    // Stagger step cards slide-up
    gsap.fromTo(
      ".step-card-anim",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".step-card-anim",
          start: "top 80%",
        },
      }
    );

    // Bottom features reveal
    gsap.fromTo(
      ".feature-col-anim",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-col-anim",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section
      className="bg-[#080808] py-[12rem] border-b border-white/5 overflow-hidden"
      id="how"
    >
      {/* ── HEADER ROW ── */}
      <div className="max-w-[120rem] px-[3.2rem] mx-auto flex items-end justify-between mb-[7.2rem] max-md:flex-col max-md:items-start max-md:gap-6">
        {/* Big red title */}
        <h2
          className="font-serif uppercase font-black leading-[0.92] tracking-[-0.03em] text-primary opacity-0"
          style={{ fontSize: "clamp(5.6rem, 10vw, 11rem)" }}
        >
          How it<br />works
        </h2>

        {/* Numbered nav pills */}
        <nav className="flex items-center gap-3 max-md:flex-wrap">
          {steps.map((s, i) => (
            <button
              key={s.number}
              onClick={() =>
                cardRefs.current[i]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }
              className={`text-[1.3rem] font-semibold tracking-widest uppercase px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                activeStep === i
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white/70"
              }`}
            >
              {s.number}
            </button>
          ))}
        </nav>
      </div>

      {/* ── STEP CARDS ── */}
      <div className="max-w-[120rem] px-[3.2rem] mx-auto flex flex-col gap-6">
        {steps.map((step, i) => (
          <div
            key={step.number}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`group relative rounded-[2.4rem] overflow-hidden border transition-all duration-500 step-card-anim opacity-0 ${
              activeStep === i
                ? "border-white/10 bg-[#111]"
                : "border-white/5 bg-[#0a0a0a]"
            }`}
          >
            <div className={`grid max-md:grid-cols-1 ${i === 1 ? "grid-cols-[1.1fr_1fr]" : "grid-cols-[1fr_1.1fr]"}`}>
              {/* text panel — order swapped for step 2 */}
              <div className={`flex flex-col justify-between p-[4.8rem] max-md:p-[3.2rem] ${i === 1 ? "order-last" : ""}`}>
                <div>
                  <span className="inline-block text-[1.2rem] font-semibold tracking-[0.25em] uppercase text-primary mb-6">
                    {step.number} / {step.label}
                  </span>
                  <h3 className="font-serif text-[3.8rem] font-medium leading-[1.1] text-white tracking-tight mb-6 max-lg:text-[3rem]">
                    {step.title}
                  </h3>
                  <p className="text-[1.7rem] leading-[1.8] text-white/45 font-sans font-light max-w-[44rem]">
                    {step.description}
                  </p>
                </div>
                {/* Tag pill at bottom-left */}
                <span className="mt-8 self-start text-[1.2rem] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-white/10 text-white/40">
                  {step.tag}
                </span>
              </div>

              {/* image panel — order swapped for step 2 */}
              <div className={`relative flex items-end justify-center bg-[radial-gradient(ellipse_at_bottom,rgba(224,62,26,0.06)_0%,transparent_70%)] min-h-[38rem] max-md:min-h-[28rem] overflow-hidden ${i === 1 ? "order-first" : ""}`}>
                {/* Subtle dot-grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "4rem 4rem",
                  }}
                />
                <img
                  src={step.image}
                  alt={step.title}
                  className="relative z-10 h-[90%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)] transition-transform duration-700 group-hover:-translate-y-3 my-4"
                  style={{ maxHeight: "38rem" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOTTOM FEATURE CALLOUTS ── */}
      <div className="max-w-[120rem] px-[3.2rem] mx-auto mt-[9.6rem] border-t border-white/5 pt-[6.4rem] grid grid-cols-3 gap-8 max-md:grid-cols-1">
        {bottomFeatures.map((feat) => (
          <div key={feat.index} className="flex flex-col gap-4 feature-col-anim opacity-0">
            <span className="font-serif italic text-[1.4rem] text-primary tracking-wide">
              {feat.index}
            </span>
            <h4 className="font-serif text-[2.2rem] font-medium text-white leading-[1.2] tracking-tight">
              {feat.title}
            </h4>
            <p className="text-[1.5rem] leading-[1.7] text-white/40 font-sans font-light">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
