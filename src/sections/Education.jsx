import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Sengunthar Engineering College",
    university: "Anna University",
    period: "2022 – 2026",
    score: "CGPA: 8.4 / 10",
    icon: GraduationCap,
    coursework:
      "Data Structures & Algorithms · Object-Oriented Programming · Database Management Systems · Computer Networks",
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Dr. D. RAM DAV Public School",
    university: "CBSE",
    period: "2022",
    score: "87%",
    icon: BookOpen,
  },
  {
    degree: "Secondary (Class X)",
    institution: "Patmer School",
    university: "CBSE",
    period: "2019",
    score: "85%",
    icon: BookOpen,
  },
];

export const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Education
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            My academic{" "}
            <span className="text-primary glow-text">
              foundation.
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A foundation in computer science, programming,
            problem solving, and software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">

          {/* Vertical Timeline Line */}
          <div
            className="
              absolute
              left-4 md:left-1/2
              top-0 bottom-0
              w-px
              bg-border
              md:-translate-x-1/2
            "
          />

          <div className="space-y-14 md:space-y-20">

            {education.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 0;

              return (
                <div
                  key={item.degree}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    gap-8
                    md:gap-16
                    items-center
                    animate-fade-in
                  "
                  style={{
                    animationDelay: `${index * 700}ms`,
                  }}
                >

                  {/* Timeline Dot */}
                  <div
                    className="
                      absolute
                      left-4 md:left-1/2
                      top-8
                      -translate-x-1/2
                      z-20
                    "
                  >
                    <div
                      className="
                        w-4 h-4
                        rounded-full
                        bg-primary
                        border-4
                        border-background
                        shadow-lg
                        shadow-primary/30
                      "
                    />
                  </div>

                  {/* Left Card / Empty Space */}
                  {isRight ? (
                    <div className="hidden md:block" />
                  ) : (
                    <EducationCard item={item} Icon={Icon} />
                  )}

                  {/* Right Card / Empty Space */}
                  {isRight ? (
                    <EducationCard item={item} Icon={Icon} />
                  ) : (
                    <div className="hidden md:block" />
                  )}

                  {/* Mobile Card */}
                  <div className="md:hidden ml-10">
                    <EducationCard item={item} Icon={Icon} />
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};


/* Education Card */

const EducationCard = ({ item, Icon }) => {
  return (
    <div
      className="
        glass
        rounded-2xl
        p-6 md:p-7
        group
        text-left
        hover:border-primary/40
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >

      {/* Icon + Period */}
      <div className="flex items-center gap-4 mb-5">

        <div
          className="
            w-12 h-12
            shrink-0
            rounded-xl
            glass
            flex
            items-center
            justify-center
            group-hover:bg-primary/10
            transition-all
            duration-300
          "
        >
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <span className="text-sm text-muted-foreground">
          {item.period}
        </span>

      </div>

      {/* Degree */}
      <h3 className="text-xl md:text-2xl font-semibold leading-snug">
        {item.degree}
      </h3>

      {/* Institution */}
      <p className="mt-3 text-primary font-medium">
        {item.institution}
      </p>

      {/* University */}
      <p className="mt-1 text-sm text-muted-foreground">
        {item.university}
      </p>

      {/* Score */}
      <div className="mt-5">
        <span
          className="
            inline-flex
            px-4 py-2
            rounded-full
            glass
            text-sm
            font-medium
            text-muted-foreground
          "
        >
          {item.score}
        </span>
      </div>

      {/* Coursework */}
      {item.coursework && (
        <div className="mt-6 pt-5 border-t border-border">

          <p
            className="
              text-xs
              uppercase
              tracking-widest
              text-muted-foreground
              mb-2
            "
          >
            Relevant Coursework
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.coursework}
          </p>

        </div>
      )}

    </div>
  );
};