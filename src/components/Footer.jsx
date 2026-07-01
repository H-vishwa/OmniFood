import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 pt-25 pb-250 px-6 md:px-12 w-full relative overflow-hidden h-200">
      <div className="max-w-[120rem] mx-auto bg-white border border-neutral-200/50 rounded-[3rem] p-8 md:p-12 shadow-xl relative z-10">
        
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] max-lg:grid-cols-[1.8fr_1fr_1fr_1fr] max-md:grid-cols-2 max-sm:grid-cols-1 gap-12">
          
          {/* Branding & Socials & Contact */}
          <div className="flex flex-col pr-0 md:pr-12">
            <a href="#" className="inline-block mb-6">
              <img 
                src="/image/logos/omnifood-logo.png" 
                alt="Omnifood" 
                className="h-[2.4rem] w-auto brightness-0" 
              />
            </a>
            
            <p className="text-[1.4rem] leading-[1.6] text-neutral-500 font-sans mb-6">
              Omnifood is the premier 365-days-per-year food subscription that makes you eat healthy again. AI-tailored to your personal tastes and nutritional needs.
            </p>

            <div className="text-[1.3rem] text-neutral-400 font-sans leading-[1.6] mb-6 flex flex-col gap-1">
              <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
              <p className="mt-1 flex flex-wrap gap-x-2 gap-y-1">
                <a href="tel:415-201-6370" className="hover:text-neutral-900 transition-colors">415-201-6370</a>
                <span>•</span>
                <a href="mailto:hello@omnifood.com" className="hover:text-neutral-900 transition-colors">hello@omnifood.com</a>
              </p>
            </div>

            {/* Social Icons matching the reference image style */}
            <div className="flex gap-5 items-center">
              {/* X / Twitter */}
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200" aria-label="X (formerly Twitter)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="text-neutral-400 hover:text-neutral-900 transition-colors duration-200" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Desktop link grids */}
          <div className="flex flex-col max-sm:hidden">
            <h3 className="text-[1.4rem] font-bold text-neutral-900 font-sans mb-5">Product</h3>
            <ul className="flex flex-col gap-4 list-none p-0">
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#meals">Meals</a></li>
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#pricing">Pricing</a></li>
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">iOS App</a></li>
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">Android App</a></li>
            </ul>
          </div>

          <div className="flex flex-col max-sm:hidden">
            <h3 className="text-[1.4rem] font-bold text-neutral-900 font-sans mb-5">Resources</h3>
            <ul className="flex flex-col gap-4 list-none p-0">
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">Recipe directory</a></li>
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">Help center</a></li>
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">Privacy & terms</a></li>
            </ul>
          </div>

          <div className="flex flex-col max-sm:hidden">
            <h3 className="text-[1.4rem] font-bold text-neutral-900 font-sans mb-5">Company</h3>
            <ul className="flex flex-col gap-4 list-none p-0">
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">About Omnifood</a></li>
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">For Business</a></li>
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">Cooking partners</a></li>
              <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 transition-colors font-sans no-underline" href="#">Careers</a></li>
            </ul>
          </div>

          {/* Mobile Accordion links - styled for Light Theme */}
          <div className="hidden max-sm:block w-full border-t border-neutral-100 pt-6 mt-6">
            <Accordion type="single" collapsible className="w-full text-[1.4rem] font-sans">
              <AccordionItem value="product" className="border-b border-neutral-100">
                <AccordionTrigger className="text-neutral-900 font-bold py-4 hover:no-underline text-[1.4rem]">Product</AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="flex flex-col gap-3 list-none p-0 mt-2">
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#meals">Meals</a></li>
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#pricing">Pricing</a></li>
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">iOS App</a></li>
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">Android App</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="resources" className="border-b border-neutral-100">
                <AccordionTrigger className="text-neutral-900 font-bold py-4 hover:no-underline text-[1.4rem]">Resources</AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="flex flex-col gap-3 list-none p-0 mt-2">
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">Recipe directory</a></li>
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">Help center</a></li>
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">Privacy & terms</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="company" className="border-none">
                <AccordionTrigger className="text-neutral-900 font-bold py-4 hover:no-underline text-[1.4rem]">Company</AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="flex flex-col gap-3 list-none p-0 mt-2">
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">About Omnifood</a></li>
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">For Business</a></li>
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">Cooking partners</a></li>
                    <li><a className="text-[1.4rem] text-neutral-500 hover:text-neutral-900 no-underline" href="#">Careers</a></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-neutral-100 my-8" />

        {/* Bottom copyright & policies row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[1.3rem] text-neutral-400 font-sans">
          <p>© {new Date().getFullYear()} Omnifood. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-neutral-900 underline transition-colors decoration-neutral-200 underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-900 underline transition-colors decoration-neutral-200 underline-offset-4">Terms of Service</a>
            <a href="#" className="hover:text-neutral-900 underline transition-colors decoration-neutral-200 underline-offset-4">Cookies Settings</a>
          </div>
        </div>

      </div>

      {/* Massive modern background watermark text - matching the 'Graphy' aesthetic */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 text-center select-none pointer-events-none text-[clamp(12rem,22vw,30rem)] font-black text-neutral-200/70 tracking-[-0.04em] leading-none z-0">
        Omnifood
      </div>
    </footer>
  );
}
