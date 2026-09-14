import { useState } from "react";
import {
  Trophy,
  Code2,
  Mic2,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Zonal Cricket Champion",
    description:
      "Secured 1st prize in a zonal-level cricket competition during college.",
  },
  {
    icon: Code2,
    title: "100+ DSA Problems",
    description:
      "Solved 100+ Data Structures and Algorithms problems in Java while improving problem-solving and coding skills.",
  },
  {
    icon: Mic2,
    title: "Elocution Competition Winner",
    description:
      "Won elocution competitions at both school level and graduation level, demonstrating strong communication and public speaking skills.",
  },
  {
    icon: BrainCircuit,
    title: "ISRO AI & ML Course",
    description:
      "Completed an ISRO course focused on Artificial Intelligence, Machine Learning, and Geodata Analysis.",
  },
];

export const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAchievement = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const previousAchievement = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
  };

  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-sm uppercase tracking-widest text-primary font-medium">
            Achievements
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Milestones{" "}
            <span className="text-primary glow-text">
              that matter.
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Highlights from my technical development, competitions,
            and extracurricular achievements.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-7xl mx-auto">

          {/* Cards Window */}
          <div className="overflow-hidden px-3 pt-10 pb-4">

            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {[...achievements, ...achievements].map(
                (achievement, index) => {
                  const Icon = achievement.icon;

                  return (
                    <div
                      key={`${achievement.title}-${index}`}
                      className="
                        shrink-0
                        w-full
                        sm:w-1/2
                        lg:w-1/4
                        px-3
                      "
                    >
                      <div className="relative h-full">

                        {/* Icon Outside Card */}
                        <div
                          className="
                            absolute
                            -top-8
                            left-7
                            z-20
                            w-16
                            h-16
                            rounded-2xl
                            bg-background
                            border
                            border-primary/30
                            flex
                            items-center
                            justify-center
                            shadow-xl
                            shadow-primary/20
                          "
                        >
                          <Icon className="w-8 h-8 text-primary" />
                        </div>

                        {/* Achievement Card */}
                        <div
                          className="
                            glass
                            rounded-2xl
                            p-7
                            pt-12
                            min-h-[280px]
                            flex
                            flex-col
                            hover:-translate-y-2
                            hover:border-primary/40
                            hover:shadow-xl
                            hover:shadow-primary/10
                            transition-all
                            duration-300
                          "
                        >
                          <span className="text-xs uppercase tracking-widest text-primary font-medium">
                            Achievement{" "}
                            {(index % achievements.length) + 1}
                            {" / "}
                            {achievements.length}
                          </span>

                          <h3 className="mt-4 text-xl font-semibold leading-snug">
                            {achievement.title}
                          </h3>

                          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 px-3">

            {/* Previous */}
            <button
              type="button"
              onClick={previousAchievement}
              aria-label="Previous achievement"
              className="
                w-12
                h-12
                rounded-full
                glass
                flex
                items-center
                justify-center
                text-muted-foreground
                hover:text-primary
                hover:border-primary/40
                hover:bg-primary/10
                transition-all
                duration-300
              "
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to achievement ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      currentIndex === index
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-primary/50"
                    }
                  `}
                />
              ))}
            </div>

            {/* Next */}
            <button
              type="button"
              onClick={nextAchievement}
              aria-label="Next achievement"
              className="
                w-12
                h-12
                rounded-full
                glass
                flex
                items-center
                justify-center
                text-muted-foreground
                hover:text-primary
                hover:border-primary/40
                hover:bg-primary/10
                transition-all
                duration-300
              "
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};