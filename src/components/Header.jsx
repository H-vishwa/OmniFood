import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
    const handleScroll = () => {
      const heroElement = document.getElementById("hero");
      const threshold = heroElement ? heroElement.offsetHeight - 100 : window.innerHeight - 100;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-[8rem] px-[4.8rem] mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-lg:px-[3.2rem] ${
        isOpen ? "z-[40]" : "z-[1000]"
      } ${
        isScrolled 
          ? "bg-bg-main/90 backdrop-blur-md border-b border-border-color/10 shadow-sm opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-full pointer-events-none"
      }`} 
      id="Header"
    >
      {/* Left: OMNIFOOD Brand Logo + New Delhi Time */}
      <div className="flex items-center gap-8">
        <a href="#">
          <img className="h-[2rem] brightness-0 invert transition-all duration-300 hover:opacity-80" alt="Omnifood" src="/image/logos/omnifood-logo.png" />
        </a>
        <span className="text-[1.2rem] tracking-[0.25em] uppercase text-stone-500 font-semibold max-md:hidden mt-0.5">
          New Delhi {time}
        </span>
      </div>

      {/* Right: Navigation links matching the Hero's bottom layout */}
      <nav className="hidden md:flex items-center gap-[3.2rem] tracking-[0.2em] uppercase text-[1.2rem] font-bold text-stone-400">
        <a className="hover:text-white transition-colors" href="#how">Work</a>
        <a className="hover:text-white transition-colors" href="#meals">Method</a>
        <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
        <a className="hover:text-white transition-colors text-primary" href="#cta">• Contact</a>
      </nav>

      {/* Mobile navigation via shadcn Sheet drawer */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button 
              aria-label="Open navigation menu" 
              className={`border-none bg-transparent cursor-pointer p-2 text-text-main flex items-center justify-center transition-opacity duration-200 ${
                isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <Menu className="h-[2.6rem] w-[2.6rem]" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-bg-main/95 border-l border-border-color p-8 flex flex-col justify-center" showCloseButton={false}>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/* Custom close button inside portal content to bypass Radix UI click trap */}
            <button 
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu" 
              className="absolute top-[2.2rem] right-[3.2rem] border-none bg-transparent cursor-pointer p-2 text-text-main hover:text-stone-300 transition-colors duration-200 flex items-center justify-center"
            >
              <X className="h-[2.6rem] w-[2.6rem]" />
            </button>
            <div className="flex flex-col gap-8 items-center">
              <span className="text-[1.2rem] tracking-[0.2em] uppercase text-stone-500 font-bold mb-4">
                New Delhi {time}
              </span>
              <a onClick={() => setIsOpen(false)} className="no-underline text-[1.6rem] font-bold tracking-[0.15em] uppercase text-text-muted hover:text-text-main transition-colors" href="#how">Work</a>
              <a onClick={() => setIsOpen(false)} className="no-underline text-[1.6rem] font-bold tracking-[0.15em] uppercase text-text-muted hover:text-text-main transition-colors" href="#meals">Method</a>
              <a onClick={() => setIsOpen(false)} className="no-underline text-[1.6rem] font-bold tracking-[0.15em] uppercase text-text-muted hover:text-text-main transition-colors" href="#pricing">Pricing</a>
              <a onClick={() => setIsOpen(false)} className="no-underline text-[1.6rem] font-bold tracking-[0.15em] uppercase text-primary hover:text-primary-hover transition-colors" href="#cta">Contact</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
