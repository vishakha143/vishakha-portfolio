import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setCompanionMode } from "@/lib/companion";
import { useAdmin } from "@/context/AdminContext";

export const ProjectsPage = () => {
  const { projects } = useAdmin();
  return (
    <>
      <section className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(32,178,166,0.1),transparent_50%)]" />
        <div className="container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Back to home
          </Link>
          
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary mb-4">Project Archive</p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-6">All Projects</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A collection of full-stack applications, AI integrations, and SaaS platforms I've built and shipped.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-border bg-white/[0.02] backdrop-blur-md hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-primary/30 bg-primary/10 text-xs font-semibold text-primary">
                        {project.number}
                      </span>
                      <div className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                        {project.kind.split(" ")[0]}
                      </div>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-sm text-muted-foreground mb-4">{project.kind}</p>

                  <p className="text-sm text-foreground/80 mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground/60 self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border/30">
                    {project.slug && (
                      <Link
                        to={`/projects/${project.slug}`}
                        onMouseEnter={() => setCompanionMode("analyze")}
                        onMouseLeave={() => setCompanionMode("idle")}
                        onFocus={() => setCompanionMode("analyze")}
                        onBlur={() => setCompanionMode("idle")}
                        className="flex-1 inline-flex items-center justify-center gap-1 text-xs font-medium text-cyan hover:bg-cyan/10 rounded-lg py-2 transition"
                      >
                        Case study
                      </Link>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 text-xs font-medium text-primary hover:bg-primary/10 rounded-lg py-2 transition"
                      >
                        Demo
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/20 rounded-lg py-2 transition"
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Interested in collaborating?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build something amazing together. Reach out and let's discuss your ideas.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
