import { ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React.js",
  "JavaScript",
  "Node.js",
  "SQL",
  "MongoDB",
  "Java",
  "Python",
  "Git/GitHub",
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/vishakha143",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/vishakha-kumari-857b89251/",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/v-14ishakha/",
    label: "LeetCode",
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Role Badge */}
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer · MERN Stack
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting{" "}
                <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hello, I'm Vishakha Kumari — a passionate Software Engineer
                focused on building modern web experiences with MERN Stack.
              </p>
            </div>

            {/* Resume + Social Links */}
            <div className="flex flex-wrap items-center gap-5 animate-fade-in animation-delay-300">
              {/* Resume */}
              <AnimatedBorderButton
                href="https://drive.google.com/file/d/16su0EnGDX2EtFG8SCqNhSQJzonOEfEqD/view"
              >
                Resume
              </AnimatedBorderButton>

              {/* Divider */}
              <div className="hidden sm:block h-8 w-px bg-border/60" />

              {/* Follow */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  Follow
                </span>

                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <div
                      key={social.label}
                      className="relative group"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="
                          w-10 h-10
                          rounded-full
                          glass
                          flex items-center justify-center
                          text-muted-foreground
                          hover:text-primary
                          hover:bg-primary/10
                          hover:border-primary/40
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        <Icon className="w-5 h-5" />
                      </a>

                      {/* Tooltip */}
                      <span
                        className="
                          absolute left-1/2
                          -translate-x-1/2
                          top-full mt-2
                          px-3 py-1.5
                          rounded-md glass-strong
                          text-xs text-foreground
                          whitespace-nowrap
                          opacity-0 invisible
                          group-hover:opacity-100
                          group-hover:visible
                          transition-all duration-200
                          pointer-events-none
                          z-50
                        "
                      >
                        {social.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Profile */}
          <div className="relative flex justify-center animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Profile Image */}
              <div
                className="
                  relative
                  w-64 h-64
                  md:w-72 md:h-72
                  rounded-full
                  p-2
                  glass
                  glow-border
                "
              >
                <img
                  src="/profile-photo.jpeg"
                  alt="Vishakha Kumari"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Available Badge */}
              <div className="absolute bottom-2 right-0 glass rounded-full px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />

                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Fresher Badge */}
              <div className="absolute top-4 -left-6 glass rounded-xl px-4 py-2">
                <span className="text-sm font-semibold text-primary">
                  Fresher
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Marquee */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-8 py-4"
                >
                  <span
                    className="
                      text-xl
                      font-semibold
                      text-muted-foreground/50
                      hover:text-muted-foreground
                      transition-colors
                    "
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
          <a
            href="#about"
            className="
              flex flex-col
              items-center
              gap-2
              text-muted-foreground
              hover:text-primary
              transition-colors
            "
          >
            <span className="text-xs uppercase tracking-wider">
              Scroll
            </span>

            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};