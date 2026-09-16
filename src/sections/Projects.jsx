import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowUpRight } from "lucide-react";

export const projects = [
  {
    title: "ShopPilot",
    description:
      "AI-integrated e-commerce platform with product search, voice navigation, cart and order management, and an admin dashboard.",
    tags: ["React", "Node.js", "Express", "MongoDB", "AI"],
    image: "/projects/ShopPilot.png",
    liveLink: "https://shop-pilot-frontend.vercel.app/",
    githubLink: "https://github.com/vishakha143/shopPilot-frontend",
  },
  {
    title: "Visera",
    description:
      "AI-powered resume platform that helps users create and improve resumes through an intuitive and practical web experience.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Gemini AI"],
    image: "/projects/VisEra.png",
    liveLink: "https://visera-git-main-vishakha143s-projects.vercel.app/",
    githubLink: "https://github.com/vishakha143/Visera",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Projects
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Selected <span className="text-primary glow-text">work.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Projects where I've applied full-stack development, problem solving,
            databases, APIs, and AI-powered features to build practical
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-80" />
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full glass text-xs text-muted-foreground border border-border hover:text-primary hover:border-primary/40 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-7">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:text-primary/70 transition-colors"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton
            href="/projects"
            ariaLabel="View all projects"
            newTab={false}
            icon={<ArrowUpRight className="w-5 h-5" />}
          >
            View All Projects
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
