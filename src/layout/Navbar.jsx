import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/Button";

const navlinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/16su0EnGDX2EtFG8SCqNhSQJzonOEfEqD/view";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMobileMenu}
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          VK<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  px-4 py-2
                  text-sm
                  text-muted-foreground
                  hover:text-foreground
                  rounded-full
                  transition-colors
                  cursor-pointer
                "
              >
                {link.label}
              </a>
            ))}

            {/* Resume */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                text-sm
                text-muted-foreground
                hover:text-primary
                rounded-full
                transition-colors
                cursor-pointer
              "
            >
              Resume
            </a>
          </div>
        </div>

        {/* Desktop Contact */}
        <div className="hidden md:block">
          <a href="#contact" className="inline-block">
            <Button
              size="sm"
              className="
                cursor-pointer
                group
              "
            >
              <span className="flex items-center gap-2">
                Contact Me
                <ArrowRight
                  className="
                    w-4 h-4
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setIsMobileMenuOpen((prev) => !prev)
          }
          className="
            md:hidden
            p-2
            text-white
            hover:text-primary
            transition-colors
            cursor-pointer
          "
          aria-label={
            isMobileMenuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navlinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="
                  text-lg
                  text-muted-foreground
                  hover:text-foreground
                  py-2
                  transition-colors
                  cursor-pointer
                "
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="
                text-lg
                text-muted-foreground
                hover:text-primary
                py-2
                transition-colors
                cursor-pointer
              "
            >
              Resume
            </a>

            {/* Mobile Contact */}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="w-full"
            >
              <Button
                size="lg"
                className="w-full cursor-pointer group"
              >
                <span className="flex items-center justify-center gap-2">
                  Contact Me
                  <ArrowRight
                    className="
                      w-5 h-5
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};