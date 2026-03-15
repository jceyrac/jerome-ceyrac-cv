import type { ReactNode } from "react";
import { SectionLabel, SectionWrapper } from "./SectionWrapper";

interface AboutSectionProps {
  content: ReactNode;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <SectionWrapper id="about" ocid="section.about">
      <SectionLabel>About</SectionLabel>
      <div className="reveal grid md:grid-cols-[2fr_1fr] gap-12 items-start">
        <div className="cv-prose text-muted-foreground leading-relaxed text-base space-y-4">
          {content}
        </div>
        <div className="space-y-4">
          <div className="border border-border/60 rounded-lg p-5 bg-card/50">
            <div className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
              Location
            </div>
            <p className="text-sm text-foreground">Pully, Switzerland</p>
          </div>
          <div className="border border-border/60 rounded-lg p-5 bg-card/50">
            <div className="font-mono text-xs text-primary mb-3 tracking-widest uppercase">
              Focus
            </div>
            <p className="text-sm text-foreground">
              Product Strategy · Web3 · AI
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
