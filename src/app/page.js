"use client";
import { Element } from "react-scroll";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <AboutMe />
      <Element id="#" name="skills" className="element">
      <Skills  />
      </Element>
      <Element id="#1" name="projects" className="element">
        <Projects />
      </Element>
      <Element id="#2" name="education" className="element">
        <Education />
      </Element>
      <Element id="#3" name="contact" className="element">
           <Contact />
      </Element>

      
      
   
    </div>
  );
}
