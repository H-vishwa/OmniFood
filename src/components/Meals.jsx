import { useEffect } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";

const cuisines = [
  {
    number: "01",
    name: "Japanese",
    subtitle: "Crafted with precision & umami",
    description:
      "Our AI curates authentic Japanese recipes — from delicate miso soups to hearty ramen bowls. Every dish is balanced for macronutrients while honoring centuries-old culinary tradition.",
    outcome: "Outcome: A clean, protein-rich meal that energises without bloating.",
    tag: "Vegetarian · Gluten-free",
    image: "/image/meals/meal-1.jpg",
    alt: "Japanese Gyozas",
  },
  {
    number: "02",
    name: "Mediterranean",
    subtitle: "Heart-healthy, deeply flavourful",
    description:
      "From vibrant Greek salads to slow-roasted Moroccan lamb, Mediterranean cuisine is the gold standard for longevity nutrition. High in healthy fats, fibre, and antioxidants.",
    outcome: "Outcome: Sustained energy, reduced inflammation, and a happy gut.",
    tag: "Vegan · Paleo",
    image: "/image/meals/meal-2.jpg",
    alt: "Avocado Salad",
  },
  {
    number: "03",
    name: "Indian",
    subtitle: "Bold spices, balanced nutrition",
    description:
      "Rich dals, fragrant biryanis, and antioxidant-packed curries — Indian cooking is as nutritious as it is vibrant. Our AI ensures every dish fits your macro targets without sacrificing flavour.",
    outcome: "Outcome: A warming, high-fibre meal that keeps you full for hours.",
    tag: "Lactose-free · Kid-friendly",
    image: "/image/meals/meal-1.jpg",
    alt: "Indian Curry Bowl",
  },
];

const diets = [
  "Vegetarian", "Vegan", "Pescatarian", "Gluten-free",
  "Lactose-free", "Keto", "Paleo", "Low FODMAP", "Kid-friendly",
];

export default function Meals() {
  useEffect(() => {
    // Header reveal
    gsap.fromTo(
      ".meals-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".meals-header",
          start: "top 85%",
        },
      }
    );

    // Staggered cuisines reveal
    gsap.fromTo(
      ".cuisine-row-anim",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cuisine-row-anim",
          start: "top 80%",
        },
      }
    );

    // Diets grid reveal
    gsap.fromTo(
      ".diets-row-anim",
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".diets-row-anim",
          start: "top 90%",
        },
      }
    );

    // Dynamic side slide-in animation on desktop (re-triggers on scroll)
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const rows = document.querySelectorAll(".cuisine-row-anim");
      rows.forEach((row, i) => {
        const textCol = row.querySelector(".cuisine-text-col");
        const imgCol = row.querySelector(".cuisine-image-col");
        if (!textCol || !imgCol) return;

        // Even index (Row 1 and 3): Text on Left, Image on Right
        if (i % 2 === 0) {
          gsap.fromTo(textCol,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 1.0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 78%",
                toggleActions: "play none none reverse",
              }
            }
          );

          gsap.fromTo(imgCol,
            { opacity: 0, x: 50 },
            {
              opacity: 1,
              x: 0,
              duration: 1.0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 78%",
                toggleActions: "play none none reverse",
              }
            }
          );
        } else {
          // Odd index (Row 2): Image on Left, Text on Right
          gsap.fromTo(textCol,
            { opacity: 0, x: 50 },
            {
              opacity: 1,
              x: 0,
              duration: 1.0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 78%",
                toggleActions: "play none none reverse",
              }
            }
          );

          gsap.fromTo(imgCol,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 1.0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: row,
                start: "top 78%",
                toggleActions: "play none none reverse",
              }
            }
          );
        }
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Simple scroll fade-in for mobile stacked view
      gsap.fromTo(
        ".cuisine-row-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cuisine-row-anim",
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section className="bg-white py-[12rem] border-b border-stone-200 overflow-hidden" id="meals">

      {/* ── HEADER ROW ── */}
      <div className="max-w-[120rem] px-[3.2rem] mx-auto mb-[9.6rem] grid grid-cols-[1fr_1fr] gap-[4.8rem] items-end max-md:grid-cols-1 max-md:gap-[2.4rem] meals-header opacity-0">
        <div>
          <span className="block text-[1.2rem] font-semibold tracking-[0.25em] uppercase text-stone-400 mb-4">
            The Menu
          </span>
          <h2 className="font-serif text-[4.8rem] font-light leading-[1.05] tracking-tight text-stone-900 max-lg:text-[4rem] max-md:text-[3.2rem]">
            Omnifood AI chooses<br />from 5,000+ recipes
          </h2>
        </div>
        <p className="text-[1.7rem] leading-[1.8] text-stone-500 font-sans font-light self-end max-w-[48rem] max-md:max-w-none">
          A globally inspired meal library, filtered to your exact dietary profile — so every delivery feels both exciting and intentional.
        </p>
      </div>

      {/* ── STAGGERED CUISINE BLOCKS ── */}
      <div className="max-w-[120rem] px-[3.2rem] mx-auto flex flex-col">
        {cuisines.map((cuisine, i) => (
          <div
            key={cuisine.number}
            className="border-t border-stone-100 py-[6.4rem] grid grid-cols-[1fr_1fr] gap-[6.4rem] max-md:grid-cols-1 max-md:gap-[3.2rem] cuisine-row-anim"
          >
            {/* ── Text column: Left for odd rows (Japanese/Indian), Right for even row (Mediterranean) ── */}
            <div className={`cuisine-text-col ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
              {/* Large italic red number + name */}
              <h3
                className="font-serif italic font-normal text-primary mb-6 leading-[1]"
                style={{ fontSize: "clamp(3.6rem, 6vw, 6rem)" }}
              >
                {cuisine.number} {cuisine.name}
              </h3>

              {/* Divider */}
              <div className="w-[3.2rem] h-[1px] bg-stone-300 mb-6" />

              {/* Subtitle */}
              <p className="font-sans font-semibold text-[1.6rem] text-stone-800 mb-4">
                {cuisine.subtitle}
              </p>

              {/* Description */}
              <p className="font-sans text-[1.5rem] leading-[1.8] text-stone-600 mb-4 max-w-[48rem]">
                {cuisine.description}
              </p>

              {/* Outcome */}
              <p className="font-sans text-[1.5rem] leading-[1.7] text-stone-700 mb-6">
                <strong className="text-stone-700 font-semibold">Outcome:</strong>{" "}
                {cuisine.outcome.replace("Outcome: ", "")}
              </p>

              {/* Week / tag pill */}
              <span className="text-[1.2rem] font-semibold tracking-widest uppercase text-stone-600">
                {cuisine.tag}
              </span>
            </div>

            {/* ── Image column: Right for odd rows, Left for even row ── */}
            <div
              className={`relative overflow-hidden rounded-[1.6rem] min-h-[32rem] max-md:min-h-[24rem] cuisine-image-col ${
                i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
              }`}
            >
              <img
                src={cuisine.image}
                alt={cuisine.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {/* ── DIETS + LINK ROW ── */}
      <div className="max-w-[120rem] px-[3.2rem] mx-auto mt-[9.6rem] border-t border-stone-100 pt-[6.4rem] grid grid-cols-[1fr_auto] gap-[4.8rem] items-start max-md:grid-cols-1 diets-row-anim opacity-0">
        <div>
          <h4 className="font-serif text-[2.4rem] font-medium text-stone-800 mb-[2.4rem] tracking-tight">
            Works with any diet:
          </h4>
          <ul className="list-none p-0 m-0 grid grid-cols-3 gap-x-[3.2rem] gap-y-[1.2rem] max-sm:grid-cols-2 max-xs:grid-cols-1">
            {diets.map((diet) => (
              <li key={diet} className="flex items-center gap-[1rem] text-[1.5rem] text-stone-600 font-sans">
                <Check className="w-[1.6rem] h-[1.6rem] text-secondary shrink-0" />
                {diet}
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#"
          className="no-underline text-primary border-b border-primary/40 pb-[2px] hover:border-primary transition-colors duration-300 font-semibold tracking-wider uppercase text-[1.3rem] whitespace-nowrap self-center"
        >
          See all recipes →
        </a>
      </div>
    </section>
  );
}
