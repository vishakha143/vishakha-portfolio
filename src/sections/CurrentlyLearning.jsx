import { Zap, BookOpen, Code2, Compass } from "lucide-react";

const learningItems = [
  {
    icon: Zap,
    category: "Building",
    items: ["AI-powered applications", "Full-stack systems"]
  },
  {
    icon: BookOpen,
    category: "Learning",
    items: ["AI Engineering", "System Design", "Advanced DSA"]
  },
  {
    icon: Code2,
    category: "Practicing",
    items: ["DSA with Java", "Web performance optimization"]
  },
  {
    icon: Compass,
    category: "Exploring",
    items: ["New developer tools", "Emerging technologies"]
  }
];

export const CurrentlyLearning = () => (
  <section id="learning" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Growth</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
          Currently Learning
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          Growth isn't about looking back at what I've built — it's about staying curious and constantly expanding my capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {learningItems.map(({ icon: Icon, category, items }) => (
          <div
            key={category}
            className="rounded-2xl border border-border bg-white/[0.02] p-6 hover:border-primary/40 hover:bg-primary/[0.05] transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{category}</h3>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
