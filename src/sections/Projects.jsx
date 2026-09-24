import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setCompanionMode } from "@/lib/companion";
import { useAdmin } from "@/context/AdminContext";
import { optimizeImage } from "@/lib/cloudinary";

export const Projects = () => {
  const { projects } = useAdmin();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Selected work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
              Projects that show how I think.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground md:text-lg">
              I’d rather show the problem, the product, and the engineering behind it than just list
              technologies.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2.5 text-sm font-medium transition hover:border-primary/30 hover:text-primary md:self-auto"
          >
            Open project archive
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 space-y-7">
          {projects.slice(0, 2).map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[2rem] border border-border bg-white/[0.02] transition duration-500 hover:-translate-y-1 hover:border-primary/25"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="relative min-h-[300px] overflow-hidden border-b border-border lg:min-h-[430px] lg:border-b-0 lg:border-r">
                  <img
                    src={optimizeImage(project.image, 1000)}
                    alt={project.title + " project preview"}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-6 top-6 flex items-center gap-2">
                    <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80">
                      {project.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">
                      {index === 0 ? <Sparkles className="h-3 w-3" /> : <Zap className="h-3 w-3" />}
                      {index === 0 ? "AI feature" : "product build"}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 text-sm font-medium text-white/80">{project.kind}</div>
                </div>

                <div className="p-7 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                        Full-stack project
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                        {project.title}
                      </h3>
                    </div>
                    <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border sm:flex">
                      {index === 0 ? (
                        <Sparkles className="h-5 w-5 text-primary" />
                      ) : (
                        <Zap className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {project.features &&
                      project.features.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </div>
                      ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags &&
                      project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-5">
                    {project.slug && (
                      <Link
                        to={`/projects/${project.slug}`}
                        onMouseEnter={() => setCompanionMode("analyze")}
                        onMouseLeave={() => setCompanionMode("idle")}
                        onFocus={() => setCompanionMode("analyze")}
                        onBlur={() => setCompanionMode("idle")}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-cyan/40 hover:text-cyan"
                      >
                        Case study
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-primary transition hover:gap-3"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 py-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                      >
                        <FaGithub className="h-4 w-4" />
                        Source code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            View all {projects.length} projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <p className="text-xs text-muted-foreground">Opens the full project archive, with a case study for each.</p>
        </div>
      </div>
    </section>
  );
};