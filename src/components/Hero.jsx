import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { useScrambleText } from "../hooks/useScramble";

export default function Hero() {
  const [time, setTime] = useState("");

  const scrambledPart1 = useScrambleText("A healthy meal ", 1.6, 0.4);
  const scrambledPart2 = useScrambleText("delivered", 1.4, 1.2);
  const scrambledPart3 = useScrambleText("to your door, daily.", 2.0, 1.9);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Endlessly translate the tiny grid pattern diagonally at a very slow, organic pace (12s loop)
    const patternAnim = gsap.to("#plus-pattern", {
      attr: { x: 6, y: 6 },
      duration: 12,
      ease: "none",
      repeat: -1,
    });

    // Gentle vertical float on the watermark text (5s breathing cycle)
    const textAnim = gsap.to("#hero-watermark-text", {
      y: "+=5",
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Entrance animations for description and CTA info (choreographed with longer scramble sequence)
    gsap.fromTo(
      ".hero-desc",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 2.5 }
    );

    gsap.fromTo(
      ".hero-nav-item",
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 3.0,
      }
    );

    return () => {
      patternAnim.kill();
      textAnim.kill();
    };
  }, []);

  return (
    <section
      className="min-h-screen relative bg-bg-main flex flex-col justify-between pt-[14rem] pb-[4rem] border-b border-border-color/10 overflow-hidden max-md:h-auto max-md:pt-[12rem] max-md:pb-[6rem]"
      id="hero">
      {/* Massive Furo-style background watermark matrix text */}
      <div className="absolute top-[2rem] left-0 w-full z-0 select-none pointer-events-none opacity-100">
        <svg viewBox="0 0 1000 300" className="w-full h-auto">
          <defs>
            <pattern
              id="plus-pattern"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse">
              <text
                x="0"
                y="5"
                fill="rgba(255, 255, 255, 0.50)"
                fontSize="5"
                fontFamily="sans-serif">
                +
              </text>
            </pattern>
          </defs>
          <text
            id="hero-watermark-text"
            x="50%"
            y="40%"
            textAnchor="middle"
            fontSize="170"
            fontWeight="900"
            fill="url(#plus-pattern)"
            fontFamily="sans-serif"
            letterSpacing="-8">
            OMNIFOOD
          </text>
        </svg>
      </div>

      {/* Main Content Grid (Horizontal split: Left Title, Right Description) */}
      <div className="max-w-[120rem] w-full mx-auto px-[4.8rem] max-lg:px-[3.2rem] pb-10 relative z-10 my-auto grid grid-cols-[1.6fr_1fr] max-md:grid-cols-1 gap-[6.4rem] items-center">
        {/* Left Side: Headline */}
        <div>
          <h1 className="font-serif text-[7.4rem] font-light leading-[1.05] tracking-tight text-white max-xl:text-[6.4rem] max-lg:text-[5.4rem] max-md:text-[4.2rem]">
            {scrambledPart1}
            <span className="font-serif italic text-primary">{scrambledPart2}</span>
            <span className="block pl-[16rem] max-md:pl-0 mt-4 font-serif text-[5.6rem] max-xl:text-[4.8rem] max-lg:text-[4rem] max-md:text-[3.2rem]">
              {scrambledPart3}
            </span>
          </h1>
        </div>

        {/* Right Side: Description */}
        <div className="flex flex-col gap-6 max-w-[38rem] max-md:mx-auto max-md:items-center max-md:text-center mt-20 max-md:mt-0">
          <p className="text-[1.6rem] leading-[1.8] text-text-muted font-sans font-light hero-desc opacity-0">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
        </div>
      </div>

      {/* Bottom Info Section (mockup style: Left Location, Right Nav Links) */}
      <div className="max-w-[120rem] w-full mx-auto px-[4.8rem] max-lg:px-[3.2rem] relative z-10 grid grid-cols-2 max-md:grid-cols-1 gap-8 items-center mb-8">
        {/* Left Info: Location / Time (using Indian Timing) */}
        <div className="flex items-center gap-6 text-[1.2rem] tracking-[0.25em] uppercase text-stone-500 font-semibold max-md:justify-center hero-nav-item opacity-0">
          <span>New Delhi {time}</span>
        </div>

        {/* Right Info: Navigation links aligned on the bottom right */}
        <div className="flex justify-end max-md:justify-center">
          <nav className="flex items-center gap-[3.2rem] tracking-[0.2em] uppercase text-[1.2rem] font-bold text-stone-400 max-md:justify-center max-xs:flex-col max-xs:gap-4">
            <a className="hover:text-white transition-colors hero-nav-item opacity-0" href="#how">
              Work
            </a>
            <a className="hover:text-white transition-colors hero-nav-item opacity-0" href="#meals">
              Method
            </a>
            <a className="hover:text-white transition-colors hero-nav-item opacity-0" href="#pricing">
              Pricing
            </a>
            <a
              className="hover:text-white transition-colors text-primary mr-2 hero-nav-item opacity-0"
              href="#cta">
              • Contact
            </a>
            <Button
              asChild
              size="default"
              className="h-9 px-5 py-7 uppercase tracking-widest text-[1.1rem] font-semibold bg-primary hover:bg-primary-hover text-white transition-all duration-300 max-xs:ml-0 hero-nav-item opacity-0">
              <a href="#cta">Get Started</a>
            </Button>
          </nav>
        </div>
      </div>
    </section>
  );
}
