import { Linkedin, Mail } from "lucide-react";
import { SectionLabel, SectionWrapper } from "./SectionWrapper";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" ocid="section.contact">
      <SectionLabel>Contact</SectionLabel>
      <div className="reveal grid md:grid-cols-2 gap-12 items-start">
        {/* Quick contact links */}
        <div className="space-y-4">
          <a
            href="mailto:jceyrac@pm.me"
            className="flex items-center gap-4 p-4 rounded-lg border border-border/60 bg-card/40 hover:border-primary/50 hover:bg-card/70 transition-all group"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              <Mail size={15} />
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                Email
              </div>
              <div className="text-sm font-medium">jceyrac@pm.me</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/jeromeceyrac/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg border border-border/60 bg-card/40 hover:border-primary/50 hover:bg-card/70 transition-all group"
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              <Linkedin size={15} />
            </div>
            <div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
                LinkedIn
              </div>
              <div className="text-sm font-medium">
                linkedin.com/in/jeromeceyrac
              </div>
            </div>
          </a>
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
