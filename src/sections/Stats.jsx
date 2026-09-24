import { BookOpen, Code2, Rocket, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Rocket,
    value: "3",
    label: "Full-stack products",
    description: "ShopPilot, Visera and EcoWash, built with React, Node.js and MongoDB.",
  },
  {
    icon: Code2,
    value: "100",
    unit: "+",
    label: "DSA problems",
    description: "Solved in Java while building core problem-solving skills.",
  },
  {
    icon: BookOpen,
    value: "8.4",
    unit: "/10",
    label: "CGPA",
    description: "B.E. Computer Science & Engineering, Anna University affiliated.",
  },
  {
    icon: Sparkles,
    value: "2",
    label: "AI-integrated products",
    description: "Voice-assisted search in ShopPilot and a Gemini resume workflow in Visera.",
  },
];

export const Stats = () => (
  <section id="stats" className="relative py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="mb-10 md:mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">Proof</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">Real work, real metrics</h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, unit, label, description }, idx) => (
          <article
            key={label}
            className="group flex flex-col rounded-2xl border border-border bg-white/[0.02] p-6 transition duration-300 animate-fade-in hover:-translate-y-0.5 hover:border-cyan/40 md:p-7"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan/25 bg-cyan/10">
                <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
              </span>
              <span className="text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
            </div>

            <p className="mt-8 flex items-baseline gap-1 text-5xl font-semibold tracking-[-0.03em] text-foreground md:text-6xl">
              {value}
              {unit && <span className="text-2xl font-medium text-cyan md:text-3xl">{unit}</span>}
            </p>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
