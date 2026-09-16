import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/sections/Projects";

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <main>
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="container mx-auto px-6">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to portfolio
            </a>

            <div className="max-w-3xl mt-12">
              <span className="text-sm uppercase tracking-widest text-primary font-medium">
                Projects
              </span>
              <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-tight">
                Things I've <span className="text-primary glow-text">built.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                A closer look at my full-stack projects, the technologies behind
                them, and the problems they were built to solve.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="container mx-auto px-6 space-y-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="glass rounded-3xl overflow-hidden border border-border/60"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[260px] lg:min-h-[430px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <span className="absolute top-6 left-6 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground border border-border">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-widest text-primary font-medium">
                      Full-stack project
                    </p>
                    <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
                      {project.title}
                    </h2>
                    <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
                      {project.description}
                    </p>

                    <div className="mt-7">
                      <p className="text-sm font-medium mb-3">Tech stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-full glass text-xs border border-border text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 mt-8">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/70 transition-colors"
                      >
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
