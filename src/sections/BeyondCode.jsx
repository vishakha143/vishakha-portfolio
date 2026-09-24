import { Music, Dumbbell, BookOpen, Camera, Globe, Mic } from "lucide-react";

const interests = [
  { icon: Music, label: "Music", description: "Creating playlists and discovering new artists" },
  { icon: Dumbbell, label: "Badminton", description: "Active and competitive player" },
  { icon: BookOpen, label: "Reading", description: "Tech blogs and non-fiction books" },
  { icon: Camera, label: "Photography", description: "Capturing moments and perspectives" },
  { icon: Globe, label: "Exploring Technology", description: "Staying updated with industry trends" },
  { icon: Mic, label: "Public Speaking", description: "Sharing knowledge and ideas" }
];

export const BeyondCode = () => (
  <section id="beyond-code" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Personality</p>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
          Beyond Code
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          I'm a person first, a developer second. Outside of coding, I'm passionate about personal growth, creative pursuits, and connecting with others.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map(({ icon: Icon, label, description }) => (
          <div
            key={label}
            className="group rounded-2xl border border-border bg-white/[0.02] p-6 transition duration-300 hover:border-primary/40 hover:bg-primary/[0.05] hover:-translate-y-1"
          >
            <div className="h-12 w-12 rounded-xl border border-border bg-primary/10 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/20 transition">
              <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{label}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
