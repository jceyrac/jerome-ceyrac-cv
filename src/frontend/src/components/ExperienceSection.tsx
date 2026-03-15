import { SectionLabel, SectionWrapper } from "./SectionWrapper";

interface ExperienceEntry {
  role: string;
  company: string;
  meta: string;
  bullets: string[];
}

function parseExperience(md: string): ExperienceEntry[] {
  const entries: ExperienceEntry[] = [];
  const lines = md.split("\n");
  let current: Partial<ExperienceEntry> | null = null;
  let bullets: string[] = [];

  const flush = () => {
    if (current?.role) {
      entries.push({
        role: current.role || "",
        company: current.company || "",
        meta: current.meta || "",
        bullets: [...bullets],
      });
    }
    bullets = [];
  };

  for (const line of lines) {
    const h3 = line.match(/^#{1,3}\s+(.+)/);
    if (h3) {
      flush();
      current = { role: h3[1].trim() };
      continue;
    }

    const boldItalic = line.match(/^\*(.+?)\*$/);
    if (boldItalic && !current) {
      flush();
      current = { role: boldItalic[1].trim() };
      continue;
    }

    if (!current) continue;

    const companyLine = line.match(/^\*\*(.+?)\*\*\s*[\u2014\u2013-]+\s*(.+)$/);
    if (companyLine && !current.company) {
      current.company = companyLine[1].trim();
      current.meta = companyLine[2].trim();
      continue;
    }

    const companySimple = line.match(
      /^([^\u2713\n]+?)\s*[-\u2013\u2014]\s*(.+)$/,
    );
    if (
      companySimple &&
      !current.company &&
      !line.startsWith("\u2713") &&
      !line.startsWith("*") &&
      !line.startsWith("#")
    ) {
      current.company = companySimple[1].trim();
      current.meta = companySimple[2].trim();
      continue;
    }

    if (/^[-*\u2713]\s/.test(line)) {
      bullets.push(line.replace(/^[-*\u2713]\s/, "").trim());
    }
  }
  flush();
  return entries;
}

interface ExperienceSectionProps {
  markdown: string;
}

export function ExperienceSection({ markdown }: ExperienceSectionProps) {
  const entries = parseExperience(markdown);

  if (entries.length === 0) {
    return (
      <SectionWrapper id="experience" ocid="section.experience">
        <SectionLabel>Experience</SectionLabel>
        <div className="reveal text-muted-foreground font-mono text-sm">
          No experience data yet.
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="experience" ocid="section.experience">
      <SectionLabel>Experience</SectionLabel>
      <div className="relative">
        <div className="absolute left-0 top-3 bottom-3 w-px timeline-line md:left-[11px]" />

        <div className="space-y-12 pl-8 md:pl-10">
          {entries.map((entry) => (
            <div
              key={`${entry.role}-${entry.company}`}
              className="reveal relative"
            >
              <div
                className="absolute -left-8 md:-left-10 top-1.5 w-[9px] h-[9px] rounded-full bg-primary border-2 border-background"
                style={{ boxShadow: "0 0 8px oklch(var(--primary) / 0.5)" }}
              />

              <div className="border border-border/50 rounded-lg p-6 bg-card/40 hover:border-primary/40 hover:bg-card/60 transition-all duration-300">
                <div
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {entry.role}
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {entry.company && (
                    <span
                      className="font-mono text-sm font-medium"
                      style={{ color: "oklch(var(--accent))" }}
                    >
                      {entry.company}
                    </span>
                  )}
                  {entry.meta && (
                    <span className="font-mono text-xs text-muted-foreground border border-border/60 px-2 py-0.5 rounded">
                      {entry.meta}
                    </span>
                  )}
                </div>

                {entry.bullets.length > 0 && (
                  <ul className="space-y-1.5">
                    {entry.bullets.map((bullet) => (
                      <li
                        key={`${entry.role}-${bullet.slice(0, 40)}`}
                        className="flex gap-2 items-start text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-0.5 shrink-0 text-xs">
                          \u25b8
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
