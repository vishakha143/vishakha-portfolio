import { ArrowDownRight, ArrowUpRight, Code2, Database, Github, Linkedin, Sparkles } from "lucide-react";
import { SiLeetcode, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";

const RESUME_URL = "https://drive.google.com/file/d/16su0EnGDX2EtFG8SCqNhSQJzonOEfEqD/view";
const stats = [["2+","AI-enabled products"],["MERN","full-stack focus"],["100+","DSA problems"]];
const stack = [
  {label:"React",icon:SiReact},{label:"Node",icon:SiNodedotjs},
  {label:"MongoDB",icon:SiMongodb},{label:"Java",icon:Code2},{label:"APIs",icon:Database}
];

export const Hero = () => (
  <section id="home" className="relative isolate min-h-screen overflow-hidden">
    <div className="absolute inset-0 -z-20"><img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover opacity-20" aria-hidden="true"/></div>
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_32%,rgba(32,178,166,0.18),transparent_30%),linear-gradient(180deg,#081015_0%,#0f1418_68%,#0f1418_100%)]"/>
    <div className="container mx-auto px-6 pb-16 pt-32 md:pb-20 md:pt-40">
      <div className="grid min-h-[calc(100vh-10rem)] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-3xl">
          <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-3.5 w-3.5"/><span>Software Engineer · MERN Stack</span>
          </div>
          <h1 className="mt-7 animate-fade-in animation-delay-100 text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-7xl lg:text-[5.9rem]">
            I build products<span className="block text-primary glow-text">people can use.</span>
          </h1>
          <p className="mt-7 max-w-2xl animate-fade-in animation-delay-200 text-base leading-8 text-muted-foreground md:text-lg">
            I’m Vishakha Kumari, a full-stack developer focused on React, Node.js, MongoDB, Java, APIs, and practical AI integrations. I enjoy turning messy problems into clear, reliable experiences.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-in animation-delay-300">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">
              Explore my work<ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
            </a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.02] px-6 py-3.5 text-sm font-semibold transition hover:border-primary/40 hover:bg-primary/5">
              View resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <a href="https://github.com/vishakha143" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:text-primary"><Github className="h-4 w-4"/></a>
            <a href="https://www.linkedin.com/in/vishakha-kumari-857b89251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:text-primary"><Linkedin className="h-4 w-4"/></a>
            <a href="https://leetcode.com/u/v-14ishakha/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:-translate-y-1 hover:border-primary/40 hover:text-primary"><SiLeetcode className="h-4 w-4"/></a>
            <span className="ml-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">Open to opportunities</span>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3">
            {stats.map(([value,label]) => <div key={label} className="rounded-2xl border border-border bg-white/[0.025] p-4"><div className="text-xl font-semibold md:text-2xl">{value}</div><div className="mt-1 text-[11px] uppercase leading-5 tracking-[0.14em] text-muted-foreground">{label}</div></div>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-8 rounded-[2rem] border border-primary/10 bg-primary/[0.03] blur-xl"/>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[#11191f]/90 p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div><p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Developer profile</p><p className="mt-1 text-lg font-semibold">Vishakha.dev <span className="text-primary">/</span> build log</p></div>
              <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary"/><span className="text-xs text-muted-foreground">online</span></div>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl border border-border bg-background/50 p-5">
                <div className="mx-auto max-w-[230px] overflow-hidden rounded-[1.5rem] border border-primary/20"><img src="/profile-photo.jpeg" alt="Vishakha Kumari" className="aspect-[4/5] w-full object-cover"/></div>
                <div className="mt-4 flex items-center justify-between"><span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Builder mode</span><span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">active</span></div>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl border border-border bg-background/50 p-4"><div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">What I ship</div><p className="mt-2 text-sm leading-6 text-foreground/90">Responsive interfaces, REST APIs, auth flows, databases, dashboards, and AI-powered product features.</p></div>
                <div className="rounded-2xl border border-border bg-background/50 p-4"><div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Core stack</div><div className="mt-3 flex flex-wrap gap-2">{stack.map(({label,icon:Icon}) => <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"><Icon className="h-3.5 w-3.5 text-primary"/>{label}</span>)}</div></div>
                <div className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-4"><div className="flex items-center justify-between"><span className="text-xs uppercase tracking-[0.16em] text-primary">Looking for</span><ArrowDownRight className="h-4 w-4 text-primary"/></div><p className="mt-2 text-sm leading-6 text-foreground/90">Entry-level Software Engineering & Full-Stack roles.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);