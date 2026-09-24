import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANION_EVENT } from "@/lib/companion";

const modes = {
  idle: { label: "STANDBY", hint: "Hover the navigation or a project to see me react." },
  build: { label: "BUILD", hint: "Looking at the work: products, code, live demos." },
  ai: { label: "AI", hint: "Looking at the AI Lab: what is actually running." },
  analyze: { label: "ANALYZE", hint: "Looking at a case study: problem, solution, architecture." },
  connect: { label: "CONNECT", hint: "Looking at contact: the fastest way to reach Vishakha." },
};

// A small, decorative companion. It only reflects which part of the site the
// visitor is pointing at; it does not run any AI or collect data.
export const AIActivityCard = () => {
  const [mode, setMode] = useState("idle");

  useEffect(() => {
    const onMode = (e) => setMode(modes[e.detail] ? e.detail : "idle");
    window.addEventListener(COMPANION_EVENT, onMode);
    return () => window.removeEventListener(COMPANION_EVENT, onMode);
  }, []);

  const { label, hint } = modes[mode];

  return (
    <div className="w-full rounded-2xl border border-border bg-white/[0.02] p-5">
      <div className="flex items-center gap-5">
        <div className="relative h-16 w-16 shrink-0" aria-hidden="true">
          <div className="absolute inset-0 rounded-full border border-cyan/30 animate-slow-drift" />
          <div className="absolute inset-2 rounded-full border border-cyan/30 animate-slow-drift" style={{ animationDelay: "-1s" }} />
          <div className="absolute inset-3.5 flex items-center justify-center rounded-full bg-cyan/15 text-cyan shadow-glow-cyan animate-glow-pulse">
            <Sparkles className="h-4 w-4" />
          </div>
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">AI companion</p>
          <p className="mt-1 font-mono text-lg font-bold tracking-widest text-cyan">{label}</p>
          <p className="mt-1 text-xs leading-5 text-muted-foreground">{hint}</p>
        </div>
      </div>
      <p className="mt-4 border-t border-border/50 pt-3 text-[11px] text-muted-foreground">
        Decorative. It reacts to your pointer and keyboard focus only; nothing is sent or stored.
      </p>
    </div>
  );
};
