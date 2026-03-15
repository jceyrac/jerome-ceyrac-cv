import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const ocids = [
  "nav.link.1",
  "nav.link.2",
  "nav.link.3",
  "nav.link.4",
  "nav.link.5",
  "nav.link.6",
  "nav.link.7",
  "nav.link.8",
];

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
        >
          JC
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={ocids[i]}
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            data-ocid="theme.toggle"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/60 transition-all duration-200"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border/60 text-muted-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border/60">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={ocids[i]}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
