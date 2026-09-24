import { BrainCircuit, Code2, Mic2, Trophy } from "lucide-react";

const achievements = [
  { icon: Code2, number: "01", evidence: "Problem solving", title: "100+ DSA Problems", description: "Solved 100+ DSA problems in Java while strengthening core problem-solving skills." },
  { icon: BrainCircuit, number: "02", evidence: "Technical learning", title: "ISRO AI & ML Course", description: "Completed an ISRO course focused on AI, ML, and geodata analysis." },
  { icon: Trophy, number: "03", evidence: "Discipline · Teamwork", title: "Zonal Cricket Champion", description: "Secured 1st prize in a zonal-level cricket competition." },
  { icon: Mic2, number: "04", evidence: "Communication", title: "Elocution Winner", description: "Won elocution competitions at school and graduation level." },
];

export const Achievements = () => (
  <section id="achievements" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">Proof</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">Beyond the code.</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base">
          Technical progress matters, but communication, teamwork, and discipline matter too.
        </p>
      </div>
      <div className="grid gap-3 pt-8 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map(({ icon: Icon, number, evidence, title, description}) => {
          const accent = "text-cyan";
          return (
            <article key={number} className="group min-h-[220px] rounded-2xl border border-border bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-cyan/30">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50">
                  <Icon className={`h-5 w-5 ${accent}`} aria-hidden="true" />
                </div>
                <span className="text-xs tracking-[0.18em] text-muted-foreground">{number}</span>
              </div>
              <p className={`mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] ${accent}`}>{evidence}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
