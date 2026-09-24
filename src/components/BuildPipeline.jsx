import { useEffect, useState } from "react";
import { CircleCheck, Code2, Lightbulb, Rocket, Sparkles } from "lucide-react";

const stages = [
  { label: "IDEA", icon: Lightbulb },
  { label: "BUILD", icon: Code2 },
  { label: "AI", icon: Sparkles },
  { label: "TEST", icon: CircleCheck },
  { label: "SHIP", icon: Rocket },
];

// Per Spec Section 11: Show IDEA → BUILD → AI → TEST → SHIP with sequential animation
export const BuildPipeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, prefersReducedMotion ? 5000 : 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative w-full rounded-2xl border border-border/50 bg-white/[0.02] p-6 hover:border-cyan/30 hover:bg-cyan/[0.03] transition-all duration-300">
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">
          Build Pipeline
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Engineering workflow visualization
        </p>
      </div>

      {/* Pipeline visualization */}
      <div className="relative">
        {/* Horizontal pipeline */}
        <div className="flex items-center justify-between gap-2">
          {stages.map((stage, idx) => (
            <div key={stage.label} className="flex flex-1 flex-col items-center">
              {/* Stage circle */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg transition-all duration-300 ${
                  idx === activeIndex
                    ? "border-cyan bg-cyan/15 text-cyan shadow-glow-cyan scale-110"
                    : idx < activeIndex
                      ? "border-cyan/40 bg-cyan/10 text-cyan/70"
                      : "border-border/50 bg-background/50 text-muted-foreground"
                }`}
              >
                <stage.icon className="h-4 w-4" aria-hidden="true" />
              </div>

              {/* Stage label */}
              <span
                className={`mt-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                  idx === activeIndex ? "text-cyan" : "text-muted-foreground"
                }`}
              >
                {stage.label}
              </span>

              {/* Arrow connector */}
              {idx < stages.length - 1 && (
                <div
                  className={`absolute mt-5 h-0.5 transition-all duration-300 ${
                    idx < activeIndex
                      ? "bg-cyan/60 w-full"
                      : "bg-border/30 w-full"
                  }`}
                  style={{
                    left: `${(idx + 0.5) * (100 / stages.length)}%`,
                    width: `${100 / stages.length - 4}%`,
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Current stage info */}
        <div className="mt-6 rounded-lg border border-border/40 bg-surface-1/50 p-3">
          <div className="text-xs uppercase tracking-widest text-cyan font-semibold">
            Current: {stages[activeIndex].label}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            {activeIndex === 0 && "Conceptualizing the solution"}
            {activeIndex === 1 && "Writing clean, maintainable code"}
            {activeIndex === 2 && "Integrating AI capabilities"}
            {activeIndex === 3 && "Comprehensive testing"}
            {activeIndex === 4 && "Deploying to production"}
          </div>
        </div>
      </div>
    </div>
  );
};
