import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SocialIcon = ({ children }) => (
  <a
    href="#"
    className="inline-flex justify-center items-center border border-white/10 rounded-full h-[4rem] w-[4rem] text-white/60 bg-white/5 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
  >
    {children}
  </a>
);

export default function CTA() {
  return (
    <section
      className="relative bg-[#080808] py-[12rem] px-[3.2rem] border-b border-white/5 overflow-hidden"
      id="cta"
    >

      <div className="max-w-[120rem] mx-auto relative z-10 grid grid-cols-[1fr_48rem] gap-[9.6rem] items-center max-lg:grid-cols-1 max-lg:gap-[6.4rem]">

        {/* ── LEFT: Editorial copy ── */}
        <div>
          <span className="block text-[1.2rem] font-semibold tracking-[0.25em] uppercase text-white/35 mb-5">
            Subscribe
          </span>
          <h2
            className="font-serif italic text-primary leading-[0.95] mb-6"
            style={{ fontSize: "clamp(5.2rem, 8vw, 9rem)" }}
          >
            Start Eating<br />Healthy Today
          </h2>
          <p className="font-serif text-[2.4rem] font-light text-white leading-[1.3] mb-[4.8rem] max-w-[46rem]">
            Join 250,000+ people eating better,<br />spending less, and never cooking again.
          </p>

          <ul className="flex flex-col gap-[2rem] list-none p-0 m-0">
            {[
              "Cancel or pause anytime — no lock-in",
              "First delivery in under 48 hours",
              "Personalised by AI from day one",
            ].map((point) => (
              <li key={point} className="flex items-start gap-[1.4rem]">
                <span className="mt-[0.4rem] w-[1.6rem] h-[1.6rem] shrink-0 rounded-full border border-primary/60 flex items-center justify-center">
                  <span className="w-[0.6rem] h-[0.6rem] rounded-full bg-primary block" />
                </span>
                <span className="text-[1.6rem] text-white/50 font-sans leading-[1.6]">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: Auth card ── */}
        <div className="border border-white/10 rounded-[2rem] bg-[#111] overflow-hidden">
          <Tabs defaultValue="signup" className="w-full">

            {/* Real tab strip — styled as underline bar */}
            <TabsList className="grid grid-cols-2 w-full bg-transparent rounded-none h-auto p-0">
              <TabsTrigger
                value="login"
                className="py-[1.8rem] text-[1.5rem] font-semibold tracking-wide rounded-none bg-transparent border-0 shadow-none
                  text-white/30 hover:text-white/60
                  data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none
                  transition-all duration-200"
              >
                Log In
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="py-[1.8rem] text-[1.5rem] font-semibold tracking-wide rounded-none bg-transparent border-0 shadow-none
                  text-white/30 hover:text-white/60
                  data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none
                  transition-all duration-200"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <div className="p-[4rem] max-sm:p-[2.8rem]">

            {/* LOGIN */}
            <TabsContent value="login">
              <CardHeader className="text-center p-0 mb-[2.8rem]">
                <CardTitle className="font-serif text-[2.6rem] font-light text-white m-0 leading-tight">Welcome Back</CardTitle>
                <CardDescription className="text-[1.4rem] text-white/30 mt-[0.6rem] font-sans">Log in with your social account or email</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {/* Social icons — full-width rows */}
                <div className="flex flex-col gap-[1rem] mb-[2.8rem]">
                  <a href="#" className="flex items-center justify-center gap-[1.2rem] border border-white/10 rounded-[0.8rem] py-[1.1rem] text-[1.4rem] font-medium text-white/55 bg-white/4 hover:bg-white/8 hover:border-white/20 hover:text-white transition-all duration-200 no-underline">
                    <svg viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-current shrink-0"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" /></svg>
                    Continue with Facebook
                  </a>
                  <a href="#" className="flex items-center justify-center gap-[1.2rem] border border-white/10 rounded-[0.8rem] py-[1.1rem] text-[1.4rem] font-medium text-white/55 bg-white/4 hover:bg-white/8 hover:border-white/20 hover:text-white transition-all duration-200 no-underline">
                    <svg viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-current shrink-0"><path d="M12.24 10.285V13.4h6.887c-.28 1.56-2.08 4.58-6.887 4.58-4.14 0-7.51-3.42-7.51-7.64s3.37-7.64 7.51-7.64c2.36 0 3.94 1 4.84 1.87l2.44-2.39C17.92 2.22 15.3 1 12.24 1 6.58 1 2 5.58 2 11.24s4.58 10.24 10.24 10.24c5.92 0 9.87-4.16 9.87-10.05 0-.68-.07-1.19-.16-1.71h-9.71z" /></svg>
                    Continue with Google
                  </a>
                </div>
                {/* OR divider */}
                <div className="flex items-center gap-3 mb-[2.4rem]">
                  <div className="flex-1 h-[1px] bg-white/8" />
                  <span className="text-[1.2rem] text-white/25 font-sans tracking-widest uppercase">or</span>
                  <div className="flex-1 h-[1px] bg-white/8" />
                </div>
                <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-[1.6rem]">
                  <div className="flex flex-col gap-[0.6rem]">
                    <Label htmlFor="login-email" className="text-[1.3rem] text-white/40 font-medium font-sans tracking-wide">Email address</Label>
                    <Input id="login-email" type="email" placeholder="hello@example.com"
                      className="h-[5rem]  bg-white/6 border border-white/18 px-[1.6rem] text-[1.7rem] text-white rounded-[0.8rem] placeholder:text-white/18 focus-visible:border-primary/60 focus-visible:ring-0 transition-colors duration-200" />
                  </div>
                  <div className="flex flex-col gap-[0.6rem]">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="login-password" className="text-[1.3rem] text-white/40 font-medium font-sans tracking-wide">Password</Label>
                      <a href="#" className="text-white/25 text-[1.3rem] no-underline hover:text-primary transition-colors font-sans">Forgot password?</a>
                    </div>
                    <Input id="login-password" type="password"
                      className="h-[5rem] bg-white/6 border border-white/18 px-[1.6rem] text-[1.7rem] text-white rounded-[0.8rem] placeholder:text-white/18 focus-visible:border-primary/60 focus-visible:ring-0 transition-colors duration-200" />
                  </div>
                  <Button type="submit" size="lg"
                    className="w-full text-[1.4rem] tracking-widest uppercase h-[5rem] font-bold bg-primary hover:bg-primary/90 text-white shadow-none transition-all duration-300 mt-[0.8rem] rounded-[0.8rem]">
                    Log In
                  </Button>
                </form>
              </CardContent>
            </TabsContent>

            {/* SIGN UP */}
            <TabsContent value="signup">
              <CardHeader className="text-center p-0 mb-[2.8rem]">
                <CardTitle className="font-serif text-[2.6rem] font-light text-white m-0 leading-tight">Create Account</CardTitle>
                <CardDescription className="text-[1.4rem] text-white/30 mt-[0.6rem] font-sans">Sign up for a free subscription account</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {/* Social icons — full-width rows */}
                <div className="flex flex-col gap-[1rem] mb-[2.8rem]">
                  <a href="#" className="flex items-center justify-center gap-[1.2rem] border border-white/10 rounded-[0.8rem] py-[1.1rem] text-[1.4rem] font-medium text-white/55 bg-white/4 hover:bg-white/8 hover:border-white/20 hover:text-white transition-all duration-200 no-underline">
                    <svg viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-current shrink-0"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" /></svg>
                    Continue with Facebook
                  </a>
                  <a href="#" className="flex items-center justify-center gap-[1.2rem] border border-white/10 rounded-[0.8rem] py-[1.1rem] text-[1.4rem] font-medium text-white/55 bg-white/4 hover:bg-white/8 hover:border-white/20 hover:text-white transition-all duration-200 no-underline">
                    <svg viewBox="0 0 24 24" className="w-[1.8rem] h-[1.8rem] fill-current shrink-0"><path d="M12.24 10.285V13.4h6.887c-.28 1.56-2.08 4.58-6.887 4.58-4.14 0-7.51-3.42-7.51-7.64s3.37-7.64 7.51-7.64c2.36 0 3.94 1 4.84 1.87l2.44-2.39C17.92 2.22 15.3 1 12.24 1 6.58 1 2 5.58 2 11.24s4.58 10.24 10.24 10.24c5.92 0 9.87-4.16 9.87-10.05 0-.68-.07-1.19-.16-1.71h-9.71z" /></svg>
                    Continue with Google
                  </a>
                </div>
                {/* OR divider */}
                <div className="flex items-center gap-3 mb-[2.4rem]">
                  <div className="flex-1 h-[1px] bg-white/8" />
                  <span className="text-[1.2rem] text-white/25 font-sans tracking-widest uppercase">or</span>
                  <div className="flex-1 h-[1px] bg-white/8" />
                </div>
                <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-[1.6rem]">
                  <div className="flex flex-col gap-[0.6rem]">
                    <Label htmlFor="signup-name" className="text-[1.3rem] text-white/40 font-medium font-sans tracking-wide">Full name</Label>
                    <Input id="signup-name" type="text" placeholder="John Doe"
                      className="h-[5rem] bg-white/6 border border-white/18 px-[1.6rem] text-[1.7rem] text-white rounded-[0.8rem] placeholder:text-white/18 focus-visible:border-primary/60 focus-visible:ring-0 transition-colors duration-200" />
                  </div>
                  <div className="flex flex-col gap-[0.6rem]">
                    <Label htmlFor="signup-email" className="text-[1.3rem] text-white/40 font-medium font-sans tracking-wide">Email address</Label>
                    <Input id="signup-email" type="email" placeholder="hello@example.com"
                      className="h-[5rem] bg-white/6 border border-white/18 px-[1.6rem] text-[1.7rem] text-white rounded-[0.8rem] placeholder:text-white/18 focus-visible:border-primary/60 focus-visible:ring-0 transition-colors duration-200" />
                  </div>
                  <div className="flex flex-col gap-[0.6rem]">
                    <Label htmlFor="signup-password" className="text-[1.3rem] text-white/40 font-medium font-sans tracking-wide">Password</Label>
                    <Input id="signup-password" type="password"
                      className="h-[5rem] bg-white/6 border border-white/18 px-[1.6rem] text-[1.7rem] text-white rounded-[0.8rem] placeholder:text-white/18 focus-visible:border-primary/60 focus-visible:ring-0 transition-colors duration-200" />
                  </div>
                  <Button type="submit" size="lg"
                    className="w-full text-[1.4rem] tracking-widest uppercase h-[5rem] font-bold bg-primary hover:bg-primary/90 text-white shadow-none transition-all duration-300 mt-[0.8rem] rounded-[0.8rem]">
                    Get Started Free
                  </Button>
                </form>
              </CardContent>
            </TabsContent>

            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

