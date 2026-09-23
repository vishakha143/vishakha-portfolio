import { ArrowUpRight, BrainCircuit, Code2, Database, Layers3 } from "lucide-react";
const highlights=[
  {icon:Layers3,label:"01",title:"Full-stack thinking",text:"I’m comfortable moving from interface decisions to APIs, authentication, and database design."},
  {icon:BrainCircuit,label:"02",title:"Useful AI",text:"I prefer AI features that solve a real product problem, like smarter search or resume assistance."},
  {icon:Code2,label:"03",title:"Problem solving",text:"Java and DSA keep me focused on fundamentals, clean logic, and breaking problems into smaller steps."},
  {icon:Database,label:"04",title:"Backend clarity",text:"I care about structured APIs, sensible data models, reusable code, and maintainable implementations."},
];
export const About=()=>(
<section id="about" className="relative py-24 md:py-32">
<div className="container mx-auto px-6">
<div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
<div><p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">About</p><h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">A developer who likes to understand the whole system.</h2><p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">I enjoy building practical software where the frontend, backend, data layer, and user experience all make sense together.</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3">Let’s build something useful<ArrowUpRight className="h-4 w-4"/></a></div>
<div className="grid gap-4 sm:grid-cols-2">{highlights.map(({icon:Icon,label,title,text})=><article key={label} className="group rounded-3xl border border-border bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.025]"><div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/60"><Icon className="h-5 w-5 text-primary transition group-hover:scale-110"/></div><span className="text-xs font-medium tracking-[0.16em] text-muted-foreground">{label}</span></div><h3 className="mt-7 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div>
</div>
<div className="mt-10 rounded-3xl border border-primary/15 bg-primary/[0.045] p-6 md:p-8"><div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10"><Code2 className="h-5 w-5 text-primary"/></div><div><p className="text-xs uppercase tracking-[0.18em] text-primary">Working style</p><p className="mt-2 text-base leading-7 text-muted-foreground md:text-lg">Understand the problem → design the flow → build cleanly → test, debug, and improve until the experience feels right.</p></div><span className="text-sm font-medium text-foreground/80">Build · Learn · Iterate</span></div></div>
</div></section>
);