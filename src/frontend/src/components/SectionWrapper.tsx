import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  ocid: string;
  className?: string;
  children: ReactNode;
}

export function SectionWrapper({
  id,
  ocid,
  className = "",
  children,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child, idx) => {
            setTimeout(() => child.classList.add("visible"), idx * 100);
          });
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      data-ocid={ocid}
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-20 ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="reveal pb-12">
      <h2
        className="text-4xl sm:text-5xl font-extrabold tracking-tight"
        style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
      >
        {children}
      </h2>
      <div className="mt-3 w-12 h-0.5 bg-primary/60" />
    </div>
  );
}
