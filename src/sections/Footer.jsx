import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const links = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/#projects" },
  { label: "About", to: "/#about" },
  { label: "AI Lab", to: "/#ai-lab" },
  { label: "Contact", to: "/#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/vishakha143", icon: FaGithub, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vishakha-kumari-857b89251/", icon: FaLinkedin, external: true },
  { label: "LeetCode", href: "https://leetcode.com/u/v-14ishakha/", icon: SiLeetcode, external: true },
  { label: "Email", href: "mailto:vk5201109@gmail.com", icon: Mail, external: false },
];

const focusRing =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export const Footer = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <footer ref={footerRef} className="relative overflow-hidden border-t border-border py-16 md:py-24">
      {hasAnimated && (
        <div className="absolute left-0 right-0 top-0 h-px animate-fade-in bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />
      )}
      <div className="container mx-auto px-6">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="mb-4 text-2xl font-bold">
              VK<span className="text-primary">.</span>
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Building better software,
              <br />
              one line of code at a time.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Navigation</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={`rounded text-sm text-muted-foreground transition hover:text-foreground ${focusRing}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Connect</p>
            <ul className="flex gap-3">
              {socials.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`block rounded-lg border border-border p-2 text-muted-foreground transition hover:border-primary/50 hover:bg-primary/10 hover:text-primary ${focusRing}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-12 border-b border-t border-border py-8">
          <div className="min-h-[4.5rem] space-y-2 font-mono text-sm text-muted-foreground" aria-label="keep learning, keep building, keep growing">
            {hasAnimated &&
              ["keep_learning", "keep_building", "keep_growing"].map((word, i) => (
                <div key={word} className="animate-fade-in" style={{ animationDelay: `${(i + 1) * 200}ms` }}>
                  {`<${word} />`}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 Vishakha Kumari</p>
          <button
            type="button"
            onClick={scrollToTop}
            className={`group flex items-center gap-2 rounded py-1.5 text-xs text-muted-foreground transition hover:text-foreground ${focusRing}`}
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
