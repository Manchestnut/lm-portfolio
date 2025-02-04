'use client';
import { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
export default function NavBar() {
    const [projectsRef, projectsInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
      const [experienceRef, experienceInView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
      });
      const [homeNavRef, homeNavInView] = useInView({
        triggerOnce: false,
        threshold: 0.6
      });
      const [projectsNavRef, projectsNavInView] = useInView({
        triggerOnce: false,
        threshold: 0.6
      });
      const [experienceNavRef, experienceNavInView] = useInView({
        triggerOnce: false,
        threshold: 0.6
      });
      const [activeSection, setActiveSection] = useState("");
    
      useEffect(() => {
        if (homeNavInView) setActiveSection("home")
        else if (projectsNavInView) setActiveSection("projects")
        else if (experienceNavInView) setActiveSection("experience")
      }, [homeNavInView, projectsNavInView, experienceNavInView])
    return (
        <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-auto lg:px-6 lg:py-2 py-1 px-2 bg-teal-500 rounded-3xl z-10 md:block hidden">
        <ul className="flex justify-center md:gap-6 items-center h-full text-sm md:text-lg font-normal text-gray-100">
          <li className={`${
                activeSection === "home"
                  ? "border-b-2"
                  : "text-gray-100"
              } hover:text-white`}><a href="#home">Home</a></li>
          <li className={`${
                activeSection === "projects"
                  ? "border-b-2"
                  : "text-gray-100"
              } hover:text-white`}><a href="#projects">Projects</a></li>
          <li className={`${
                activeSection === "experience"
                  ? "border-b-2"
                  : "text-gray-100"
              } hover:text-white`}><a href="#experience">Experience</a></li>
        </ul>
      </nav>
    )
}