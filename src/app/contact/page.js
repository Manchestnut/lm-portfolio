'use client';
import { TiAdjustContrast } from "react-icons/ti";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const Icon = darkMode ? MdOutlineDarkMode : MdDarkMode;
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
    <div className={darkMode ? 'dark' : ''}>
      <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-auto lg:px-6 lg:py-2 py-1 px-2 bg-teal-500 rounded-3xl z-10`}>
        <ul className="flex justify-center md:gap-6 items-center h-full text-sm md:text-lg font-normal text-gray-100">
          <li><Link href="/">Go back to home</Link></li>
        </ul>
      </nav>
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
      >
      <main className="bg-white px-10 dark:bg-gray-950 pb-20" >
        <section className="border-b-2">
          <div id="contact" className="lg:px-20 pt-10 pb-24">
            <h3 className="text-4xl lg:text-6xl py-5 md:mb-5 font-bold text-teal-700">Contact me</h3>
            <div>
              <form className="lg:w-1/2">
                <label className="block">Name</label>
                <input type="text" className="bg-gray-800 p-2.5 w-full rounded-md mb-4" placeholder="John Doe" required/>
                <label className="block">Email</label>
                <input type="text" className="bg-gray-800 p-2.5 w-full rounded-md mb-4" placeholder="john@email.com" required/>
                <label className="block">Message</label>
                <textarea className="bg-gray-800 p-2.5 w-full rounded-md mb-4" required></textarea>
                <button className="bg-teal-700 hover:bg-teal-600 text-white py-1.5 px-4 rounded-md">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      </motion.div>
    </div>
  );
}
