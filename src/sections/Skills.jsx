// Per Spec Section 17: Skills grouped by category
import { Code2, Database, Zap, Brain } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    category: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    icon: Zap,
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT/Auth"],
  },
  {
    icon: Database,
    category: "Database",
    skills: ["MongoDB", "Mongoose", "MySQL", "SQL"],
  },
  {
    icon: Code2,
    category: "Programming & CS",
    skills: ["Java", "DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  },
  {
    icon: Brain,
    category: "AI & ML",
    skills: ["Gemini AI", "AI-assisted features", "Search workflows", "Resume assistance"],
  },
];

export const Skills = () => (
  <section id="skills" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      {/* Section header */}
      <div className="mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">Technical Stack</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
          Skills & Expertise
        </h2>
        <p className="mt-6 text-base text-muted-foreground max-w-2xl leading-relaxed">
          Full-stack JavaScript and Java developer with a strong foundation in data structures and algorithms,
          working with modern web technologies and practical AI integrations.
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillGroups.map(({ icon: Icon, category, skills }, idx) => (
          <div
            key={category}
            className={`rounded-2xl border p-8 transition duration-300 animate-fade-in hover:scale-105 border-border bg-white/[0.02] hover:border-cyan/40 hover:bg-cyan/[0.03]`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Icon & Title */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg border transition-all border-cyan/30 bg-cyan/10`}
              >
                <Icon className={`h-6 w-6 text-cyan`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {category === "AI & ML" ? "Used in real features" : "Used in my projects"}
                </p>
              </div>
            </div>

            {/* Skills list */}
            <div className="space-y-2">
              {skills.map((skill, skillIdx) => (
                <div
                  key={skill}
                  className={`flex items-center gap-2 text-sm transition duration-200 hover:translate-x-1 animate-slide-in-right`}
                  style={{ animationDelay: `${idx * 100 + skillIdx * 50}ms` }}
                >
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full bg-cyan`}
                  />
                  <span className="text-foreground/90">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note per Spec Section 17 */}
      <div className="mt-12 rounded-2xl border border-border/40 bg-surface-1/50 p-6 md:p-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Note:</span> Projects demonstrate skills more effectively than badges.
          ShopPilot, Visera, and EcoWash show these technologies applied in real projects.
        </p>
      </div>
    </div>
  </section>
);
