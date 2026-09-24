import { ArrowRight, Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/Button";
import { CommandPalette } from "@/components/CommandPalette";
import { useTheme } from "@/context/ThemeContext";
import { setCompanionMode } from "@/lib/companion";

const navlinks = [
  { to: "/#projects", label: "Work", mode: "build" },
  { to: "/#about", label: "About", mode: "idle" },
  { to: "/#ai-lab", label: "AI Lab", mode: "ai" },
  { to: "/#contact", label: "Contact", mode: "connect" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/16su0EnGDX2EtFG8SCqNhSQJzonOEfEqD/view";

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const themeLabel = isDark ? "Switch to light mode" : "Switch to dark mode";
  const ThemeIcon = isDark ? Sun : Moon;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav aria-label="Main" className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className={`text-xl font-bold tracking-tight hover:text-primary transition-colors rounded ${focusRing}`}
        >
          VK<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => setCompanionMode(link.mode)}
                onMouseLeave={() => setCompanionMode("idle")}
                onFocus={() => setCompanionMode(link.mode)}
                onBlur={() => setCompanionMode("idle")}
                className={`whitespace-nowrap px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors lg:px-4 ${focusRing}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`whitespace-nowrap px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-full transition-colors lg:px-4 ${focusRing}`}
            >
              Resume
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          <CommandPalette />

          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-lg border border-border hover:bg-muted transition ${focusRing}`}
            aria-label={themeLabel}
          >
            <ThemeIcon className="h-4 w-4 text-foreground" aria-hidden="true" />
          </button>

          {import.meta.env.DEV && (
            <Link to="/admin" className={`text-xs font-medium text-muted-foreground hover:text-primary transition rounded ${focusRing}`}>
              Admin
            </Link>
          )}

          <Button to="/#contact" size="sm" className="group">
            Let's Talk
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition ${focusRing}`}
            aria-label={themeLabel}
          >
            <ThemeIcon className="h-5 w-5 text-foreground" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={`p-2 text-foreground hover:text-primary transition-colors cursor-pointer rounded ${focusRing}`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navlinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={`text-lg text-muted-foreground hover:text-foreground py-2 transition-colors rounded ${focusRing}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-border my-2 pt-4">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className={`text-lg text-muted-foreground hover:text-primary py-2 transition-colors block rounded ${focusRing}`}
              >
                Resume
              </a>

              <Button to="/#contact" size="lg" onClick={closeMobileMenu} className="group mt-4 w-full">
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
