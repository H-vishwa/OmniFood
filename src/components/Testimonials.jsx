import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const SLIDE_DURATION = 5000; // ms per slide

const slides = [
  [
    {
      boldLead: "Omnifood is a life saver!",
      rest: " I just started a company, so there's no time for cooking. I couldn't live without my daily meals now! The AI picks exactly what I need — fresh, healthy, and zero effort on my end.",
      name: "Dave Bryson",
      role: "Founder / Bryson Ventures",
      avatar: "/image/customers/dave.jpg",
    },
    {
      boldLead: "Inexpensive, healthy and great-tasting meals,",
      rest: " without even having to order manually! It feels truly magical. Once you try it, you simply can't go back to the old way of eating.",
      name: "Ben Hadley",
      role: "Founder / Hadley Health Co.",
      avatar: "/image/customers/ben.jpg",
    },
  ],
  [
    {
      boldLead: "The AI algorithm is crazy good,",
      rest: " it chooses the right meals for me every time. It's amazing not to worry about food anymore! I've never eaten this well in my life.",
      name: "Steve Miller",
      role: "Founder / Miller Digital",
      avatar: "/image/customers/steve.jpg",
    },
    {
      boldLead: "I got Omnifood for the whole family,",
      rest: " and it frees up so much time! Plus, everything is organic and vegan and without plastic. Couldn't recommend it more to busy parents.",
      name: "Hannah Smith",
      role: "Founder / Smith & Co.",
      avatar: "/image/customers/hannah.jpg",
    },
  ],
];

const galleryImages = [
  "/image/gallery/gallery-1.jpg",
  "/image/gallery/gallery-2.jpg",
  "/image/gallery/gallery-3.jpg",
  "/image/gallery/gallery-4.jpg",
  "/image/gallery/gallery-5.jpg",
  "/image/gallery/gallery-6.jpg",
  "/image/gallery/gallery-7.jpg",
  "/image/gallery/gallery-8.jpg",
  "/image/gallery/gallery-9.jpg",
  "/image/gallery/gallery-10.jpg",
  "/image/gallery/gallery-11.jpg",
  "/image/gallery/gallery-12.jpg",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const goToSlide = useCallback((index) => {
    setActive(index);
    setProgress(0);
  }, []);

  // Auto-advance + progress bar
  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 50);

    const slideTimer = setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(slideTimer);
    };
  }, [active]);

  return (
    <section
      className="bg-[#070707] border-b border-white/5 py-[12rem] px-[3.2rem] overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-[120rem] mx-auto flex flex-col">

        {/* ── HEADER ── */}
        <div className="text-center mb-[8rem]">
          <p className="text-[1.2rem] font-semibold tracking-[0.25em] uppercase text-white/35">
            Testimonials —{" "}
            <a
              href="#"
              className="text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors duration-200"
            >
              Rated 5/5 on Google
            </a>
          </p>
        </div>

        {/* ── QUOTE PAIR ── */}
        <div className="grid grid-cols-2 gap-[6.4rem] max-md:grid-cols-1 max-md:gap-[4.8rem]">
          {slides[active].map((t, i) => (
            <div key={i} className="flex flex-col justify-between gap-[4rem]">
              {/* Quote text */}
              <p className="font-sans text-[1.8rem] leading-[1.85] max-lg:text-[1.6rem]">
                <span className="text-white font-semibold">{t.boldLead}</span>
                <span className="text-white/38">{t.rest}</span>
              </p>

              {/* Avatar + Name + role */}
              <div className="flex items-center gap-[1.6rem]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-[5.6rem] h-[5.6rem] rounded-full object-cover border border-white/10 shrink-0"
                />
                <div>
                  <p className="font-serif text-[2.4rem] font-light text-white leading-[1.1] mb-1">
                    {t.name}
                  </p>
                  <p className="text-[1.3rem] text-white/35 font-sans tracking-wide">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DOT NAV + PROGRESS ── */}
        <div className="flex items-center justify-center gap-4 mt-[6.4rem]">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative cursor-pointer border-0 bg-transparent p-0 flex items-center justify-center"
            >
              {/* Track */}
              <span className={`block rounded-full transition-all duration-300 ${
                active === i ? "w-[4rem] h-[3px] bg-white/15" : "w-[0.8rem] h-[0.8rem] bg-white/20 hover:bg-white/40"
              }`} />
              {/* Active fill bar */}
              {active === i && (
                <span
                  className="absolute left-0 top-0 h-[3px] rounded-full bg-white transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── GALLERY MARQUEE ── */}
        <div className="mt-[8rem] -mx-[3.2rem] overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
        >
          {/* Single track: images duplicated inside, animated 0 → -50% */}
          <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[...galleryImages, ...galleryImages].map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxSrc(src)}
                className="shrink-0 w-[26rem] h-[17rem] mx-3 overflow-hidden rounded-[1.2rem] border border-white/5 cursor-pointer bg-transparent p-0 group"
              >
                <img
                  src={src}
                  alt={`Gallery ${(i % galleryImages.length) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      <Dialog open={!!lightboxSrc} onOpenChange={(open) => !open && setLightboxSrc(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] bg-transparent border-none p-0 flex items-center justify-center">
          <DialogTitle className="sr-only">Gallery Preview</DialogTitle>
          {lightboxSrc && (
            <img
              src={lightboxSrc}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-[1.2rem] object-contain shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}


