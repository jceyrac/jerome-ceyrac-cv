import type { ReactNode } from "react";
import { SectionLabel, SectionWrapper } from "./SectionWrapper";

interface CertificationsSectionProps {
  certContent: ReactNode;
  eduContent: ReactNode;
}

export function CertificationsSection({
  certContent,
  eduContent,
}: CertificationsSectionProps) {
  return (
    <>
      <SectionWrapper id="certifications" ocid="section.certifications">
        <SectionLabel>Certifications</SectionLabel>
        <div className="reveal cv-prose text-muted-foreground space-y-4 text-sm leading-relaxed">
          {certContent}
        </div>
      </SectionWrapper>

      <SectionWrapper id="education" ocid="section.education">
        <SectionLabel>Education</SectionLabel>
        <div className="reveal cv-prose text-muted-foreground space-y-4 text-sm leading-relaxed">
          {eduContent}
        </div>
      </SectionWrapper>
    </>
  );
}
