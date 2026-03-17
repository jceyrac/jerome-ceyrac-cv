import { Github, Linkedin, Mail, Send } from "lucide-react";
import { SectionLabel, SectionWrapper } from "./SectionWrapper";

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
