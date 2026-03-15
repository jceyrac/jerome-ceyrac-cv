import { SectionLabel, SectionWrapper } from "./SectionWrapper";

interface SkillGroup {
  category: string;
  skills: string[];
}

function parseSkills(md: string): SkillGroup[] {
  const groups: SkillGroup[] = [];
  const lines = md.split("\n");
  let current: SkillGroup | null = null;

  for (const line of lines) {
    const heading = line.match(/^#{1,3}\s+(.+)/);
    if (heading) {
      if (current) groups.push(current);
      current = { category: heading[1].trim(), skills: [] };
      continue;
    }

    if (!current) continue;

    if (line.trim() && !line.startsWith("#")) {
      const raw = line
        .replace(/^[-*]\s/, "")
        .replace(/\*\*/g, "")
        .trim();
      if (raw) {
        const parts = raw
          .split(/,|\u00b7|\u2022/)
          .map((s) => s.trim())
          .filter(Boolean);
        current.skills.push(...parts);
      }
    }
  }
  if (current) groups.push(current);
  return groups.filter((g) => g.skills.length > 0);
}

interface SkillsSectionProps {
  markdown: string;
}

export function SkillsSection({ markdown }: SkillsSectionProps) {
  const groups = parseSkills(markdown);

  return (
    <SectionWrapper id="skills" ocid="section.skills">
      <SectionLabel>Skills</SectionLabel>
      <div className="space-y-8">
        {groups.map((group) => (
          <div key={group.category} className="reveal">
            <div className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={`${group.category}-${skill}`} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
