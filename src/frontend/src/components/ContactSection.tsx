import { useEffect } from "react";
import { Github, Linkedin, Mail, Send, CalendarDays } from "lucide-react";
import { SectionLabel, SectionWrapper } from "./SectionWrapper";

const CALENDLY_URL = "https://calendly.com/jceyrac-xrk";

const contacts = [
  {
    href: "mailto:jceyrac@pm.me",
    icon: <Mail size={15} />,
    label: "Email",
    display: "jceyrac@pm.me",
  },
  {
    href: "https://www.linkedin.com/in/jeromeceyrac/",
    icon: <Linkedin size={15} />,
    label: "LinkedIn",
    display: "linkedin.com/in/jeromeceyrac",
    external: true,
  },
  {
    href: "https://github.com/jceyrac",
    icon: <Github size={15} />,
    label: "GitHub",
    display: "github.com/jceyrac",
    external: true,
  },
  {
    href: "https://t.me/jeanclaude_vd",
    icon: <Send size={15} />,
    label: "Telegram",
    display: "@jeanclaude_vd",
    external: true,
  },
];

export function ContactSection() {
  useEffect(() => {
    // Inject Calendly widget script once
    if (document.getElementById("calendly-script")) return;
    const script = document.createElement("script");
    script.id = "calendly-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Inject Calendly CSS
    if (document.getElementById("calendly-css")) return;
    const link = document.createElement("link");
    link.id = "calendly-css";
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  const openCalendly = () => {
    // @ts-ignore — Calendly is loaded via external script
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <SectionWrapper id="contact" ocid="section.contact">
      <SectionLabel>Contact</SectionLabel>
      <div className="reveal grid md:grid-cols-2 gap-12 items-start">
        {/* Contact links */}
        <div className="space-y-4">
          {contacts.map(({ href, icon, label, display, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-4 p-4 rounded-lg border border-border/60 bg-card/40 hover:border-primary/50 hover:bg-card/70 transition-all group"
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                {icon}
              </div>
              <div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                  {label}
                </div>
                <div className="text-sm font-medium">{display}</div>
              </div>
            </a>
          ))}

          {/* Calendly book a call button */}
          <button
            onClick={openCalendly}
            className="w-full flex items-center gap-4 p-4 rounded-lg border border-primary/40 bg-primary/10 hover:border-primary/70 hover:bg-primary/20 transition-all group"
          >
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors shrink-0">
              <CalendarDays size={15} />
            </div>
            <div className="text-left">
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                Calendly
              </div>
              <div className="text-sm font-medium text-primary">
                Book a call
              </div>
            </div>
          </button>
        </div>

        {/* Right column message */}
        <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
          <p>
            Open to product leadership opportunities, advisory roles, and Web3 /
            AI collaborations.
          </p>
          <p>
            Based in Pully, Switzerland — available for remote or hybrid
            engagements.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
