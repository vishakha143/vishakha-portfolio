import { ArrowUpRight, BrainCircuit, Code2, Database, Layers3 } from "lucide-react";
import { SystemVisualization } from "@/components/SystemVisualization";

// Per Spec Section 16: Editorial layout with narrative structure
const highlights = [
  {
    icon: Layers3,
    number: "01",
    title: "Engineering",
    subtitle: "Full-Stack Thinking",
    text: "I like understanding the whole system. Frontend → Backend → Database → User. I’m comfortable moving from interface decisions to APIs, authentication, and database design.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI",
    subtitle: "Practical Integration",
    text: "I use AI when it solves a real product problem. Not for decoration. Smart search, resume assistance, context-aware workflows. AI as a tool, not a gimmick.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Problem Solving",
    subtitle: "Fundamentals First",
    text: "Java and DSA keep me focused on clean logic and breaking problems into smaller steps. 100+ problems solved. Strong foundation in algorithms and data structures.",
  },
  {
    icon: Database,
    number: "04",
    title: "Backend",
    subtitle: "Clarity & Maintainability",
    text: "I care about structured APIs, sensible data models, and reusable code. REST principles. JWT auth. Code that other engineers understand.",
  },
];

export const About = () => (
  <section id="about" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      {/* Main narrative */}
      <div className="mb-16 max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">About</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-[-0.03em]">
          A developer who likes to understand the whole system.
        </h2>
        <p className="mt-6 text-base md:text-lg leading-8 text-muted-foreground">
          I enjoy building practical software where the frontend, backend, data layer, and user experience
          all make sense together. Not isolated silos—connected, intentional systems.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-cyan transition hover:gap-3"
        >
          Let’s build something useful
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Highlights grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {highlights.map(({ icon: Icon, number, title, subtitle, text}, idx) => (
          <article
            key={number}
            className={`group rounded-2xl border p-8 transition duration-300 animate-fade-in hover:scale-105 border-border bg-white/[0.02] hover:border-cyan/40 hover:bg-cyan/[0.03]`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg border transition-all border-cyan/30 bg-cyan/10 group-hover:border-cyan/40`}
              >
                <Icon
                  className={`h-6 w-6 group-hover:scale-110 transition-transform text-cyan`}
                />
              </div>
              <span
                className={`text-xs font-bold tracking-widest text-cyan/70`}
              >
                {number}
              </span>
            </div>

            {/* Content */}
            <h3 className={`text-lg font-semibold text-cyan`}>
              {title}
            </h3>
            <p className="text-xs text-muted-foreground font-medium mt-1">{subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-foreground/80">{text}</p>
          </article>
        ))}
      </div>

      {/* System visualization */}
      <div className="mt-12 rounded-2xl border border-border bg-white/[0.02] p-8 overflow-x-auto">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan mb-8">System Architecture</p>
        <SystemVisualization />
      </div>

      {/* Working philosophy */}
      <div className="mt-12 rounded-2xl border border-cyan/20 bg-cyan/[0.08] p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/10 border border-cyan/20">
            <Code2 className="h-6 w-6 text-cyan" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">Engineering Workflow</p>
            <p className="mt-3 text-base leading-7 text-foreground/85">
              Understand the problem → Design the architecture → Build cleanly → Test thoroughly →
              Debug with purpose → Improve iteratively until the experience feels right.
            </p>
          </div>
          <span className="text-sm font-bold text-cyan whitespace-nowrap">
            Build → Learn → Iterate
          </span>
        </div>
      </div>
    </div>
  </section>
);