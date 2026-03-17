import { SectionLabel, SectionWrapper } from "./SectionWrapper";

const languages = [
  { name: "French", level: "Mother tongue", pct: 100 },
  { name: "English", level: "Fluent", pct: 90 },
  { name: "Spanish", level: "Intermediate", pct: 55 },
  { name: "German", level: "Intermediate", pct: 45 },
];

export function LanguagesSection() {
  return (
    <SectionWrapper id="languages" ocid="section.languages">
      <SectionLabel>Languages</SectionLabel>
      <div className="reveal max-w-lg space-y-6">
        {languages.map(({ name, level, pct }) => (
          <div key={name}>
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-base font-semibold text-foreground"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {name}
              </span>
              <span className="font-mono text-xs text-muted-foreground border border-border/60 px-2 py-0.5 rounded">
                {level}
              </span>
            </div>
            {/* Progress bar */}
            <div className="h-1 w-full rounded-full bg-border/40 overflow-hidden">
              <div
                className="h-full rounded-full timeline-line"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
