import { Navbar } from "@/layout/Navbar";
import {Hero} from "@/sections/Hero"
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Education} from "@/sections/Education";
import {Contact} from "@/sections/Contact";
import {Achievements} from "@/sections/Achievements";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
