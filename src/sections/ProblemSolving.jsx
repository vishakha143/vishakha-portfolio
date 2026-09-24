import { ArrowUpRight, Code2 } from "lucide-react";

export const ProblemSolving = () => (
  <section id="dsa" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Problem Solving</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
            DSA and Algorithms
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            I believe fundamentals matter. Consistent practice with data structures and algorithms keeps me sharp on problem-solving logic and helps me write efficient, scalable code.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-border bg-white/[0.02] p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">LeetCode</span>
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">100+</div>
              <p className="mt-2 text-sm text-muted-foreground">Problems solved across multiple difficulty levels</p>
            </div>

            <div className="rounded-2xl border border-border bg-white/[0.02] p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Primary Language</span>
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">Java</div>
              <p className="mt-2 text-sm text-muted-foreground">Clean, efficient solutions with strong OOP principles</p>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/v-14ishakha/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-primary transition hover:gap-3"
          >
            View LeetCode Profile
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {["Arrays", "Strings", "Trees", "Graphs", "Dynamic Programming", "Linked Lists"].map(
            (topic) => (
              <div
                key={topic}
                className="rounded-xl border border-border bg-white/[0.02] p-4 text-center hover:border-primary/30 hover:bg-primary/[0.05] transition"
              >
                <p className="text-sm font-medium text-foreground">{topic}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </section>
);
