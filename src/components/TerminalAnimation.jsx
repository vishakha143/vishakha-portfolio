import { useEffect, useState } from "react";

// Per Spec Section 12: Realistic terminal simulation with build output
const terminalLines = [
  { prompt: "$ npm run build", response: null, delay: 100 },
  { prompt: null, response: "building portfolio...", delay: 200 },
  { prompt: null, response: "✓ components", delay: 200 },
  { prompt: null, response: "✓ routes", delay: 200 },
  { prompt: null, response: "✓ accessibility", delay: 200 },
  { prompt: null, response: "✓ performance", delay: 200 },
  { prompt: null, response: "", delay: 300 },
  { prompt: null, response: "build successful", delay: 400 },
];

export const TerminalAnimation = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (currentLineIndex >= terminalLines.length) {
      setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
      }, prefersReducedMotion ? 3000 : 4000);
      return;
    }

    const currentLine = terminalLines[currentLineIndex];
    const delay = prefersReducedMotion ? 100 : (currentLine.delay || 300);

    const timer = setTimeout(() => {
      setDisplayedLines((prev) => [
        ...prev,
        {
          prompt: currentLine.prompt || "",
          response: currentLine.response || "",
        },
      ]);
      setCurrentLineIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentLineIndex]);

  return (
    <div className="group relative w-full rounded-2xl border border-border/50 bg-[#0D1117] p-6 hover:border-cyan/30 transition-all duration-300 font-mono text-xs">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/30">
        <div className="h-2 w-2 rounded-full bg-red-500/80" />
        <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
        <div className="h-2 w-2 rounded-full bg-green-500/80" />
        <span className="text-[#8B93A1] ml-auto text-[10px] uppercase tracking-widest">
          Terminal
        </span>
      </div>

      {/* Terminal content */}
      <div className="space-y-2 text-foreground/80 min-h-[120px]">
        {displayedLines.map((line, idx) => (
          <div key={idx} className="space-y-0.5 animate-fade-in">
            {line.prompt && (
              <div className="text-cyan font-medium">{line.prompt}</div>
            )}
            {line.response && (
              <div className={`${
                line.response.includes("✓")
                  ? "text-green-400"
                  : line.response.includes("build successful")
                    ? "text-green-400 font-semibold"
                    : "text-[#8B93A1]"
              } ${line.prompt ? "pl-4" : ""}`}>
                {line.response}
              </div>
            )}
          </div>
        ))}

        {/* Blinking cursor */}
        {currentLineIndex < terminalLines.length && (
          <div className="text-cyan">
            <span className="inline-block w-2 h-4 bg-cyan animate-pulse" />
          </div>
        )}
      </div>

      {/* Status indicator */}
      {displayedLines.length > 0 && currentLineIndex >= terminalLines.length && (
        <div className="mt-4 text-[10px] text-green-400 font-semibold">
          ✓ Ready
        </div>
      )}
    </div>
  );
};
