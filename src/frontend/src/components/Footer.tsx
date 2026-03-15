export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t border-border/40 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground">
        <p className="font-mono text-xs">
          © {year} Jérôme Ceyrac — Built on Internet Computer
        </p>
        <a
          href={utmLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs hover:text-primary transition-colors"
        >
          Built with ♥ using caffeine.ai
        </a>
      </div>
    </footer>
  );
}
