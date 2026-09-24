import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { AILab } from "@/sections/AILab";
import { ProblemSolving } from "@/sections/ProblemSolving";
import { Education } from "@/sections/Education";
import { Achievements } from "@/sections/Achievements";
import { CurrentlyLearning } from "@/sections/CurrentlyLearning";
import { BeyondCode } from "@/sections/BeyondCode";
import { Contact } from "@/sections/Contact";

function App() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <AILab />
      <ProblemSolving />
      <Education />
      <Achievements />
      <CurrentlyLearning />
      <BeyondCode />
      <Contact />
    </>
  );
}

export default App;
