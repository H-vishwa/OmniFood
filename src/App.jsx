import { useEffect } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import TierPitch from './components/TierPitch';
import FeaturedIn from './components/FeaturedIn';
import HowItWorks from './components/HowItWorks';
import Meals from './components/Meals';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Update ScrollTrigger on Lenis scroll event
    lenis.on("scroll", ScrollTrigger.update);

    // Synchronize Lenis with GSAP ticker
    const tick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TierPitch />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
