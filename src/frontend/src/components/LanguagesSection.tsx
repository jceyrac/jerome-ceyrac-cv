import { SectionLabel, SectionWrapper } from "./SectionWrapper";

const LEVELS = ["Beginner", "Elementary", "Intermediate", "Fluent", "Mother tongue"];
const MAX_IDX = LEVELS.length - 1;

const languages = [
  { name: "French",  level: "Mother tongue" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Intermediate" },
  { name: "German",  level: "Intermediate" },
  { name: "Turkish", level: "Beginner" },
];

export function LanguagesSection() {
  return (
    <SectionWrapper id="languages" ocid="section.languages">
      <SectionLabel>Languages</SectionLabel>
      <div className="reveal max-w-xl space-y-8">
        {languages.map(({ name, level }) => {
          const activeIdx = LEVELS.indexOf(level);
          return (
            <div key={name}>
              {/* Name + level label */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-base font-semibold text-foreground"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {name}
                </span>
                
              </div>

              {/* Segmented scale */}
              <div className="flex gap-1.5">
                {LEVELS.map((l, i) => (
                  <div key={l} className="flex-1 flex flex-col items-center gap-1.5">
                    {/* Segment bar — opacity always relative to full scale */}
                    <div
                      className={`h-2 w-full rounded-full ${
                        i <= activeIdx ? "bg-primary" : "bg-border/40"
                      }`}
                      style={
                        i <= activeIdx
                          ? { opacity: 0.3 + (i / MAX_IDX) * 0.7 }
                          : {}
                      }
                    />
                    {/* Label below every segment */}
                    <span className="font-mono text-[9px] text-muted-foreground text-center leading-tight">
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
