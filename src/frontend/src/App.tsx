import { useEffect, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LanguagesSection } from "./components/LanguagesSection";
import { Navbar } from "./components/Navbar";
import { SkeletonLoader } from "./components/SkeletonLoader";
import { SkillsSection } from "./components/SkillsSection";
import { useCVData } from "./hooks/useQueries";
import { renderMarkdown } from "./utils/markdown";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const { data: cv, isLoading } = useCVData();

  const toggleTheme = () => setIsDark((prev) => !prev);

  if (isLoading || !cv) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
        <SkeletonLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection />
        <AboutSection content={renderMarkdown(cv.about || "")} />
        <ExperienceSection markdown={cv.experience || ""} />
        <SkillsSection markdown={cv.skills || ""} />
        <CertificationsSection
          certContent={renderMarkdown(cv.certifications || "")}
          eduContent={renderMarkdown(cv.education || "")}
        />
        <LanguagesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
