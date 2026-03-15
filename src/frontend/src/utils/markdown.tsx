import type { ReactNode } from "react";
import React from "react";

function parseInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const regex =
    /(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  let last = 0;

  let m = regex.exec(text);
  while (m !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[2]) nodes.push(<strong key={m.index}>{m[2]}</strong>);
    else if (m[3]) nodes.push(<em key={m.index}>{m[3]}</em>);
    else if (m[4])
      nodes.push(
        <code key={m.index} className="font-mono text-sm bg-muted px-1 rounded">
          {m[4]}
        </code>,
      );
    else if (m[5] && m[6])
      nodes.push(
        <a key={m.index} href={m[6]} target="_blank" rel="noopener noreferrer">
          {m[5]}
        </a>,
      );
    last = regex.lastIndex;
    m = regex.exec(text);
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

export function renderMarkdown(md: string): ReactNode {
  const lines = md.split("\n");
  const elements: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    // HR
    if (/^---+$/.test(line.trim())) {
      elements.push(<hr key={key++} className="border-border my-4" />);
      i++;
      continue;
    }

    // Headings
    const h = line.match(/^(#{1,4})\s+(.+)$/);
    if (h) {
      const level = h[1].length;
      const text = parseInline(h[2]);
      const cls = [
        level === 1 ? "text-2xl font-bold font-display mt-6 mb-2" : "",
        level === 2
          ? "text-xl font-semibold font-display mt-5 mb-2 text-primary"
          : "",
        level === 3 ? "text-lg font-semibold mt-4 mb-1" : "",
        level === 4
          ? "text-base font-medium mt-3 mb-1 text-muted-foreground"
          : "",
      ].join("");
      elements.push(
        React.createElement(`h${level}`, { key: key++, className: cls }, text),
      );
      i++;
      continue;
    }

    // Unordered list
    if (/^[-*]\s/.test(line)) {
      const items: ReactNode[] = [];
      let listIdx = 0;
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        const idx = listIdx++;
        items.push(
          <li key={`li-${key}-${idx}`} className="flex gap-2 items-start">
            <span className="text-primary mt-0.5 shrink-0">{'\u25b8'}</span>
            <span>{parseInline(lines[i].replace(/^[-*]\s/, ""))}</span>
          </li>,
        );
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-1 ml-0 my-2">
          {items}
        </ul>,
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items: ReactNode[] = [];
      let olIdx = 0;
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        const idx = olIdx++;
        items.push(
          <li key={`ol-${key}-${idx}`}>
            {parseInline(lines[i].replace(/^\d+\.\s/, ""))}
          </li>,
        );
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-1 my-2">
          {items}
        </ol>,
      );
      continue;
    }

    // Paragraph
    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,4}\s/.test(lines[i]) &&
      !/^[-*]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !/^---+$/.test(lines[i])
    ) {
      paragraphLines.push(lines[i]);
      i++;
    }
    if (paragraphLines.length > 0) {
      elements.push(
        <p key={key++} className="leading-relaxed mb-2">
          {parseInline(paragraphLines.join(" "))}
        </p>,
      );
    }
  }

  return <>{elements}</>;
}
