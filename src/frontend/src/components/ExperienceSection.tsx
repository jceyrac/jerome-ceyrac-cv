import { SectionLabel, SectionWrapper } from "./SectionWrapper";

interface ExperienceEntry {
  role: string;
  date: string;
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
        date: current.date || "",
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
      const full = h3[1].trim();
      // Extract date after · separator, e.g. "Product Owner · Apr 2024 – Now"
      const dotSplit = full.match(/^(.+?)\s*[·•]\s*(.+)$/);
      if (dotSplit) {
        current = { role: dotSplit[1].trim(), date: dotSplit[2].trim() };
      } else {
        current = { role: full, date: "" };
      }
      continue;
    }

    const boldItalic = line.match(/^\*(.+?)\*$/);
    if (boldItalic && !current) {
      flush();
      current = { role: boldItalic[1].trim(), date: "" };
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
        {entries.map((entry, idx) => (
          <div
            key={`${entry.role}-${entry.company}`}
            className="reveal relative grid grid-cols-[140px_1px_1fr] md:grid-cols-[180px_1px_1fr] gap-x-6 mb-10 last:mb-0"
          >
            {/* Left column — date */}
            <div className="flex flex-col items-end justify-start pt-1 gap-1">
              {entry.date && (
                <>
                  {/* Split date into parts if it contains a dash/en-dash */}
                  {entry.date.split(/\s*[–\-]\s*/).length === 2 ? (
                    <>
                      <span className="font-mono text-xs text-primary font-semibold text-right leading-tight">
                        {entry.date.split(/\s*[–\-]\s*/)[0].trim()}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground text-right">
                        —
                      </span>
                      <span className="font-mono text-xs text-primary font-semibold text-right leading-tight">
                        {entry.date.split(/\s*[–\-]\s*/)[1].trim()}
                      </span>
                    </>
                  ) : (
                    <span className="font-mono text-xs text-primary font-semibold text-right leading-tight">
                      {entry.date}
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Centre column — timeline line + dot */}
            <div className="relative flex flex-col items-center">
              <div
                className="w-[9px] h-[9px] rounded-full bg-primary border-2 border-background shrink-0 mt-1.5 z-10"
                style={{ boxShadow: "0 0 8px oklch(var(--primary) / 0.5)" }}
              />
              {/* Vertical line — hide on last entry */}
              {idx < entries.length - 1 && (
                <div className="flex-1 w-px timeline-line mt-1" />
              )}
            </div>

            {/* Right column — card */}
            <div className="border border-border/50 rounded-lg p-5 bg-card/40 hover:border-primary/40 hover:bg-card/60 transition-all duration-300 mb-2">
              <div
                className="text-base font-bold mb-1 leading-snug"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {entry.role}
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-3">
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
                        {'\u25b8'}
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
    </SectionWrapper>
  );
}
