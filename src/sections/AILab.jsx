import { ArrowRight, ArrowUpRight, Mic, Sparkles, FlaskConical } from "lucide-react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { defaultProjects } from "@/data/projects";

const flowFor = (slug) => defaultProjects.find((p) => p.slug === slug)?.caseStudy?.aiFlow ?? [];

const experiments = [
  {
    icon: Sparkles,
    label: "AI resume assistance",
    title: "Gemini-powered workflow",
    project: "Visera",
    slug: "visera",
    text: "Visera sends resume content through an API to Gemini AI to help users create and improve their resumes, behind authenticated, protected flows.",
    flow: flowFor("visera"),
  },
  {
    icon: Mic,
    label: "Voice product search",
    title: "AI-assisted discovery",
    project: "ShopPilot",
    slug: "shoppilot",
    text: "ShopPilot lets shoppers find products with voice-assisted search, turning spoken or typed input into a product query against the API and MongoDB.",
    flow: flowFor("shoppilot"),
  },
];

export const AILab = () => (
  <section id="ai-lab" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="mb-16 max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/[0.06] px-4 py-2">
          <Sparkles className="h-4 w-4 text-cyan" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-wider text-cyan">AI Lab</span>
        </div>
        <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">AI where it solves a real problem.</h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          The AI work here is what is actually running in my projects. Nothing on this page is a concept demo.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {experiments.map(({ icon: Icon, label, title, project, slug, text, flow }) => (
          <article key={slug} className="rounded-2xl border border-cyan/25 bg-cyan/[0.04] p-7 transition duration-300 hover:border-cyan/40">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10">
                <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{label}</p>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-foreground/80">{text}</p>

            <ol className="mt-6 flex flex-wrap items-center gap-2" aria-label={`${project} AI workflow`}>
              {flow.map((node, i) => (
                <Fragment key={node}>
                  <li className="rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs text-foreground/85">{node}</li>
                  {i < flow.length - 1 && <ArrowRight className="h-3.5 w-3.5 text-cyan/70" aria-hidden="true" />}
                </Fragment>
              ))}
            </ol>

            <Link to={`/projects/${slug}`} className="mt-6 inline-flex items-center gap-2 py-1.5 text-sm font-semibold text-cyan transition hover:gap-3">
              Read the {project} case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-start gap-4 rounded-2xl border border-dashed border-border p-6">
        <FlaskConical className="mt-1 h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Future experiments</p>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            New AI experiments will be listed here once they are built, so this section only ever shows work that exists.
          </p>
        </div>
      </div>
    </div>
  </section>
);
