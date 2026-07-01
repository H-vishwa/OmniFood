import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedIn() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Word-by-word reveal for narrative paragraph
    const words = el.querySelectorAll(".reveal-word");

    const anim = gsap.to(words, {
      color: "#1c1917", // solid stone-900 black
      stagger: 0.1,
      scrollTrigger: {
        trigger: el,
        start: "top 82%",
        end: "bottom 55%",
        scrub: true,
      },
    });

    // Staggered reveal for the tagline, re-triggerable on scroll
    const taglineAnim = gsap.fromTo(
      ".tagline-word",
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tagline-word",
          start: "top 88%",
          toggleActions: "restart none none reverse",
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
      taglineAnim.scrollTrigger?.kill();
      taglineAnim.kill();
    };
  }, []);

  const lines = [
    "Omnifood is an award-winning daily nutrition service based in New Delhi, designed by world-class chefs and certified nutritionists.",
    "Over the past 5 years, we've helped 10,000+ busy professionals like you turn their eating habits into healthy daily energy",
    "that builds focus, saves time, and keeps you thriving long after lunch –",
    "from corporate leaders and tech startup founders to creative artists and busy parents.",
    "Different routines, same healthy outcome."
  ];

  return (
    <section className="bg-[#f5f5f7] py-[18rem] px-[4.8rem] max-lg:px-[3.2rem] border-b border-stone-200 relative z-10">
      <div className="max-w-[100rem] mx-auto flex flex-col items-center">
        {/* Top Tagline with Tiny Plus Marks */}
        <div className="relative w-full py-50 flex items-center justify-center">
          <span className="absolute top-0 pb-20 text-stone-400 font-light text-[1.4rem]">+</span>
          <span className="absolute bottom-0 text-stone-400 font-light text-[1.4rem]">+</span>
          <span className="absolute left-[8%] pr-02 text-stone-400 font-light text-[1.4rem] max-md:hidden">+</span>
          <span className="absolute right-[8%] pl-20 text-stone-400 font-light text-[1.4rem] max-md:hidden">+</span>
          
          <h3 className="font-serif text-[4rem] text-stone-500 font-light leading-[1.3] text-center max-w-[70rem] max-md:text-[2.6rem] px-4 flex flex-wrap justify-center gap-x-[0.8rem] gap-y-[0.4rem] select-none">
            {"Your health deserves a meal plan that".split(" ").map((word, idx) => (
              <span key={`p1-${idx}`} className="tagline-word inline-block opacity-0">{word}</span>
            ))}
            <span className="font-serif italic text-primary tagline-word inline-block opacity-0">matches</span>
            {"the life you build.".split(" ").map((word, idx) => (
              <span key={`p2-${idx}`} className="tagline-word inline-block opacity-0">{word}</span>
            ))}
          </h3>
        </div>

        {/* Scroll Reveal Narrative Paragraph */}
        <div 
          ref={containerRef} 
          className="max-w-[85rem] mx-auto text-center my-20 text-[2.2rem] leading-[1.8] font-sans font-light tracking-wide max-md:text-[1.8rem] flex flex-col gap-6 px-4"
        >
          {lines.map((line, index) => {
            const words = line.split(" ");
            return (
              <p key={index} className="flex flex-wrap justify-center gap-x-[0.6rem] gap-y-[0.2rem]">
                {words.map((word, wordIdx) => (
                  <span
                    key={wordIdx}
                    className="reveal-word transition-colors duration-200"
                    style={{ color: "#d6d3d1" }} // initial gray color
                  >
                    {word}
                  </span>
                ))}
              </p>
            );
          })}
        </div>

        {/* Bottom Partner Logos in Inverted High Contrast */}
        <div className="w-full mt-12 pt-12 border-t border-stone-200/60">
          <div className="grid grid-cols-4 max-md:grid-cols-3 max-xs:grid-cols-2 gap-8 items-center justify-items-center opacity-80 brightness-0">
            <img src="/image/logos/techcrunch.png" alt="Tech Crunch" className="h-[2.8rem] mb-4 max-lg:h-[2.4rem] max-md:h-8 max-xs:h-[1.8rem] object-contain" />
            <img src="/image/logos/business-insider.png" alt="Business Insider" className="h-[2.8rem] mb-4 max-lg:h-[2.4rem] max-md:h-8 max-xs:h-[1.8rem] object-contain" />
            <img src="/image/logos/the-new-york-times.png" alt="The New York times" className="h-[2.8rem] max-lg:h-[2.4rem] max-md:h-8 max-xs:h-[1.8rem] object-contain" />
            <img src="/image/logos/forbes.png" alt="Forebes" className="h-[2.8rem] max-lg:h-[2.4rem] max-md:h-8 max-xs:h-[1.8rem] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
