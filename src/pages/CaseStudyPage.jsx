import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, ArrowDown, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useAdmin } from "@/context/AdminContext";
import { optimizeImage } from "@/lib/cloudinary";

const Section = ({ label, title, children }) => (
  <section className="border-t border-border py-12 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">{label}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  </section>
);

const Pending = () => (
  <p className="rounded-xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
    To be added. Real details for this section haven't been written up yet.
  </p>
);

const Flow = ({ nodes, accent }) => (
  <ol className="flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center">
    {nodes.map((node, i) => (
      <Fragment key={node}>
        <li className={`rounded-lg border px-4 py-2 text-sm font-medium ${accent === "cyan" ? "border-cyan/30 bg-cyan/[0.06] text-cyan" : "border-cyan/30 bg-cyan/[0.06] text-cyan"}`}>
          {node}
        </li>
        {i < nodes.length - 1 && (
          <>
            <ArrowDown className="h-4 w-4 text-muted-foreground sm:hidden" aria-hidden="true" />
            <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" aria-hidden="true" />
          </>
        )}
      </Fragment>
    ))}
  </ol>
);

const Notes = ({ text }) => (text ? <p className="leading-8 text-foreground/85">{text}</p> : <Pending />);

export const CaseStudyPage = () => {
  const { slug } = useParams();
  const { projects } = useAdmin();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-40 text-center">
        <h1 className="text-3xl font-semibold">Case study not found</h1>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-cyan">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to all projects
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;

  return (
    <article className="container mx-auto px-6 pb-16 pt-28 md:pt-36">
      <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
      </Link>

      <header className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyan">
            {project.number} · {project.kind}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.03em] md:text-6xl">{project.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{project.subtitle}</p>
          <p className="mt-6 leading-8 text-foreground/85">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{tag}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">
                Live demo <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {project.codeUrl && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground">
                <FaGithub className="h-4 w-4" aria-hidden="true" /> Source code
              </a>
            )}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <img src={optimizeImage(project.image, 1200)} alt={`${project.title} project screenshot`} className="aspect-[4/3] w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
        </div>
      </header>

      {cs && (
        <div className="mt-16">
          <Section label="01" title="Problem"><Notes text={cs.problem} /></Section>
          <Section label="02" title="Solution"><Notes text={cs.solution} /></Section>
          <Section label="03" title="Key features">
            <ul className="space-y-3">
              {cs.highlights?.map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground/85">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
          </Section>
          <Section label="04" title="Architecture">
            {cs.architecture ? <Flow nodes={cs.architecture} /> : <Pending />}
          </Section>
          <Section label="05" title="AI integration">
            {cs.aiFlow ? <Flow nodes={cs.aiFlow} accent="cyan" /> : (
              <p className="text-muted-foreground">No AI integration is listed for this project.</p>
            )}
          </Section>
          <Section label="06" title="Engineering decisions"><Notes text={cs.decisions} /></Section>
          <Section label="07" title="Security"><Notes text={cs.security} /></Section>
          <Section label="08" title="Performance"><Notes text={cs.performance} /></Section>
          <Section label="09" title="Challenges"><Notes text={cs.challenges} /></Section>
          <Section label="10" title="Lessons learned"><Notes text={cs.lessons} /></Section>
          <Section label="11" title="Future improvements"><Notes text={cs.future} /></Section>
        </div>
      )}
    </article>
  );
};
