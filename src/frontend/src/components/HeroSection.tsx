import { useEffect, useRef } from "react";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      data-ocid="section.hero"
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12">
          {/* Text content */}
          <div ref={ref} className="reveal flex-1 max-w-2xl">
            {/* Big name */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-3 tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Jérôme{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, oklch(var(--primary)), oklch(var(--accent)))",
                }}
              >
                Ceyrac
              </span>
            </h1>

            {/* Role subtitle */}
            <div className="font-mono text-sm text-primary mb-6 tracking-widest uppercase">
              Senior Product Manager
            </div>

            {/* Tagline */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Product strategist bridging Web3, AI, and enterprise software —
              building digital products that scale.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/assets/uploads/CV_Jerome_Ceyrac-_ENCH-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                View CV
                <span>↓</span>
              </a>
              <a
                href="#contact"
                data-ocid="hero.secondary_button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-mono font-medium border border-border hover:border-primary/60 hover:text-primary transition-all"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Profile picture */}
          <div className="shrink-0 relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden glow-primary border-2 border-primary/30">
              <img
                src="/assets/uploads/00441c9f-4f93-45b7-957a-88ece409f73d-2.jpg"
                alt="Jérôme Ceyrac"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/20 animate-glow pointer-events-none" />
          </div>
        </div>        
      </div>
    </section>
  );
}
