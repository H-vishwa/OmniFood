import { useEffect, useRef } from "react";

export default function TierPitch() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = 500);
    let height = (canvas.height = 500);

    const particles = [];
    const particleCount = 180;

    let mouse = { x: null, y: null };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        // Cluster particles in the center with a wider spread
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 160;
        this.x = width / 2 + Math.cos(angle) * radius;
        this.y = height / 2 + Math.sin(angle) * radius;
        
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 8 + 4; // larger particles
        this.opacity = Math.random() * 0.5 + 0.5; // brighter starting opacity: 0.5 to 1.0
        this.fadeSpeed = Math.random() * 0.003 + 0.001; // slower fade to stay visible longer
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Slow pull back to center
        const dx = width / 2 - this.x;
        const dy = height / 2 - this.y;
        this.speedX += dx * 0.00003;
        this.speedY += dy * 0.00003;

        // Pull particles toward mouse if active
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - this.x;
          const mdy = mouse.y - this.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            this.speedX += (mdx / dist) * force * 0.06;
            this.speedY += (mdy / dist) * force * 0.06;
            
            // Brighten significantly near the cursor
            this.opacity = Math.min(1.0, this.opacity + force * 0.04);
          }
        }

        // Fade in/out
        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = "rgba(255, 255, 255, 1.0)";
        ctx.fillStyle = "rgba(255, 255, 255, 1.0)";
        ctx.lineWidth = 1.8; // thicker plus lines
        
        // Add lightning glow effect
        ctx.shadowColor = "rgba(255, 255, 255, 1.0)";
        ctx.shadowBlur = 12;

        // Draw ONLY "+" signs
        const halfSize = this.size / 2;
        ctx.beginPath();
        ctx.moveTo(this.x - halfSize, this.y);
        ctx.lineTo(this.x + halfSize, this.y);
        ctx.moveTo(this.x, this.y - halfSize);
        ctx.lineTo(this.x, this.y + halfSize);
        ctx.stroke();

        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background radial glow (brighter white center)
      const glow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        240
      );
      glow.addColorStop(0, "rgba(255, 255, 255, 1)");
      glow.addColorStop(0.5, "rgba(255, 255, 255, 1)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
    };
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    
    // Trigger initial sizing
    handleResize();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="bg-[#000000] py-[12rem] px-[4.8rem] max-lg:px-[3.2rem] border-b border-border-color/10 relative z-10 overflow-hidden">
      <div className="max-w-[120rem] mx-auto flex flex-col gap-12">
        {/* Title at the top-left */}
        <div>
          <h2 className="font-serif text-[6.4rem] font-light leading-[1.1] tracking-tight text-white max-xl:text-[5.4rem] max-lg:text-[4.6rem] max-md:text-[3.8rem]">
            Your life is in the top tier.
            <span className="block text-stone-600 mt-2">Your nutrition isn't.</span>
          </h2>
        </div>

        {/* Content Row: Canvas and Narrative side-by-side */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[9.6rem] items-center">
          {/* Left Side: Interactive Constellation Canvas */}
          <div className="w-[60rem] h-[60rem] max-md:w-[32rem] max-md:h-[32rem] max-md:mx-auto relative">
            <canvas
              ref={canvasRef}
              className="w-full h-full block"
            />
          </div>

          {/* Right Side: Narrative Copy */}
          <div className="flex flex-col gap-10 text-[1.7rem] leading-[1.8] text-stone-400 font-sans font-light">
            <p>
              You've spent years building your career. Earning success. Refining your craft.
            </p>
            <p>
              But your daily meals still look like something you threw together between meetings. Quick takeout, cold leftovers, or skipped lunches that leave you drained.
            </p>
            <p>
              You know it needs to change. But your schedule always comes first. And you haven't found a meal service that truly aligns with your high standards.
            </p>
            <p>
              So hours of peak productivity get undone by a rushed, low-energy lunch. And you'll never know how much more focused and energized you could have been.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
