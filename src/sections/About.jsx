import {
  Code2,
  BrainCircuit,
  Database,
  Layers3,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solving",
    description:
      "Strengthening my Java and DSA skills by solving problems and improving my approach to coding challenges.",
  },
  {
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Building complete web applications with React, Node.js, Express, MongoDB, and modern development tools.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description:
      "Exploring practical AI features that make applications more useful, intuitive, and easier to interact with.",
  },
  {
    icon: Database,
    title: "Backend & Data",
    description:
      "Working with REST APIs, authentication, databases, and efficient data handling across full-stack applications.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="animate-fade-in">
            <span className="text-sm uppercase tracking-widest text-primary font-medium">
              About Me
            </span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
            Building{" "}
            <span className="text-primary glow-text">
              practical
            </span>{" "}
            solutions with purpose.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
            I'm Vishakha Kumari, a Software Engineer and recent
            graduate who enjoys turning ideas into reliable,
            user-focused applications. My primary focus is
            full-stack development, with Java and DSA strengthening
            my problem-solving foundation.
          </p>

          <p className="mt-4 text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-300">
            I've built projects such as ShopPilot and Visera,
            working across frontend development, backend APIs,
            databases, authentication, and AI-powered features.
            I enjoy understanding how each part of a system works
            and continuously improving the way I build it.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Engineering Snapshot */}
          <div className="glass rounded-2xl p-7 md:p-8 glow-border animate-fade-in animation-delay-300">
            <div className="flex items-center justify-between mb-7">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-medium">
                  Engineering Focus
                </p>

                <h3 className="mt-2 text-2xl font-semibold">
                  How I approach development
                </h3>
              </div>

              <div className="w-11 h-11 rounded-xl glass flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="space-y-5">

              <div className="about-point">
                <span className="about-point-number">
                  01
                </span>

                <div>
                  <h4 className="font-semibold">
                    Understand the problem
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Break requirements into smaller, practical
                    problems before jumping into implementation.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <span className="about-point-number">
                  02
                </span>

                <div>
                  <h4 className="font-semibold">
                    Build with clarity
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Focus on readable code, sensible architecture,
                    reusable components, and maintainable APIs.
                  </p>
                </div>
              </div>

              <div className="about-point">
                <span className="about-point-number">
                  03
                </span>

                <div>
                  <h4 className="font-semibold">
                    Improve through iteration
                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    Test, debug, optimize, and learn from each
                    implementation instead of stopping at “working.”
                  </p>
                </div>
              </div>

            </div>

            {/* Small Tech Line */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Core Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "SQL",
                  "Python",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs glass text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-6 group hover:-translate-y-1 hover:border-primary/40 transition-all duration-300 animate-fade-in"
                  style={{
                    animationDelay: `${(index + 4) * 100}ms`,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mission */}
        <div className="mt-10 glass rounded-2xl p-6 md:p-8 glow-border animate-fade-in animation-delay-600">
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-primary" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              "I want to build software that is not only functional,
              but thoughtfully engineered, easy to use, and useful
              to the people who interact with it."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};