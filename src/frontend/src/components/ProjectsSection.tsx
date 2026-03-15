import type { ReactNode } from "react";
import { SectionLabel, SectionWrapper } from "./SectionWrapper";

interface ProjectsSectionProps {
  content: ReactNode;
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <SectionWrapper id="projects" ocid="section.projects">
      <SectionLabel>Projects</SectionLabel>
      <div className="reveal cv-prose text-muted-foreground leading-relaxed space-y-4">
        {content}
      </div>
    </SectionWrapper>
  );
}
