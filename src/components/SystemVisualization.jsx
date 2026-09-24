import { useEffect, useRef, useState } from "react";
import { ArrowRight, Cloud, Database, Monitor, Server, Sparkles } from "lucide-react";

const layers = [
  { label: "Frontend", icon: Monitor },
  { label: "Backend", icon: Server },
  { label: "Database", icon: Database },
  { label: "AI / APIs", icon: Sparkles },
  { label: "Deployment", icon: Cloud },
];

export const SystemVisualization = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setInterval(() => setActive((i) => (i + 1) % layers.length), reduced ? 4000 : 1500);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <ol ref={containerRef} className="flex flex-wrap items-center justify-center gap-2" aria-label="System layers">
      {layers.map(({ label, icon: Icon }, idx) => (
        <li key={label} className="flex items-center gap-2">
          <div
            className={`flex flex-col items-center gap-1.5 rounded-lg border px-4 py-3 transition-all duration-500 ${
              idx === active
                ? "border-cyan/50 bg-cyan/10 text-cyan"
                : "border-border bg-white/[0.02] text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            <span className="whitespace-nowrap text-xs font-medium">{label}</span>
          </div>
          {idx < layers.length - 1 && (
            <ArrowRight
              className={`h-4 w-4 transition-colors duration-500 ${idx === active ? "text-cyan" : "text-muted-foreground/40"}`}
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ol>
  );
};
