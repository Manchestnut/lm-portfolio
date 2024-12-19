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
      <main className="bg-white px-10 dark:bg-gray-950 pb-20" >
        <section className="border-b-2 pt-44 pb-36"id="home" ref={homeNavRef}>
          <div className="w-10 flex justify-center p-2 fixed bottom-4 right-4" onClick={() => setDarkMode(!darkMode)}>
            <Icon className="cursor-pointer text-2xl dark:text-white" />
          </div>
          <motion.div className="text-center pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl py-2 text-teal-600 font-medium text-center">Luke Manongsong</h2>
            <h3 className="text-2xl py-5 md:text-3xl font-medium text-teal-800">Web Developer</h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl">Recent graduate with a passion for programming and web development.</p>
            <div className="flex justify-center gap-4 py-6">
            <motion.button   
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-gradient-to-r from-cyan-800 to-teal-600 text-white rounded-md"><Link href="/contact">Get in touch</Link></motion.button>
            <button className="flex gap-1 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-nowrap cursor-pointer"><IoDownloadOutline className="text-lg" />Download CV</button>

            </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin/>
            <AiFillInstagram/>
          </div>
          </motion.div>
          {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden z-0">
            <Image src={'/dev-ed-wave.png'} alt="Waving person" layout="fill" objectFit="cover"/>
          </div> */}
        </section>
        <motion.div 
                ref={projectsRef}
                initial={{ opacity: 0, y: 50 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
        >
        <section className="border-b-2">
          <div className="lg:py-15 lg:px-20 pt-10 pb-24" id="projects" ref={projectsNavRef}>
            <h3 className="text-4xl lg:text-6xl py-5 md:mb-5 font-bold text-teal-700">Projects</h3>
            <div className="sm:w-[600px] md:mx-auto ml-1 lg:pl-0">
              <div className="min-w-sm lg:w-[600px] py-4 sm:pl-10 border-teal-600 md:border-l-4 border-l-2 pl-4">
                  <h4 className="text-xl py-1 text-gray-600 font-medium md:text-3xl">AI Support Chatbot with Jira Integration</h4>
                  <div className="flex text-gray-600 hover:text-teal-500 cursor-pointer">
                    <CiLink className="text-2xl"/>
                    <p className="px-1 font-medium">Github</p>
                  </div>
                  <p className="text-gray-600 md:text-lg">A customer support chatbot that leverages OpenAI's large language models (LLMs) to address AWS Glue-related issues and automate support ticket creation in JIRA.</p>
              <div className="flex gap-3 pt-5">
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto">
                  <p>Python</p>
                </div>
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto text-nowrap">
                  <p>OpenAI API</p>
                </div>
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto text-nowrap">
                  <p>Jira API</p>
                </div>
              </div>
            </div>
              <div className="min-w-sm lg:w-[600px] mt-6 py-4 sm:pl-10 md:border-l-4 border-teal-600 border-l-2 pl-4">
                <h4 className="text-xl pb-1 text-gray-600 font-medium md:text-3xl">Capstone Documents Approval System</h4>
                <div className="flex text-gray-600 hover:text-teal-500 cursor-pointer">
                  <CiLink className="text-2xl"/>
                  <p className="px-1 font-medium">Github</p>
                </div>
                <p className="text-gray-600 md:text-lg">A submission and approval system designed to streamline the management of capstone documents.</p>
                <div className="flex gap-3 pt-5">
                  <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto text-nowrap">
                    <p>HTML / CSS</p>
                  </div>
                  <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto text-nowrap">
                    <p>Node JS / Express</p>
                  </div>
                  <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto">
                    <p>MySQL</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </section>
        </motion.div>
        <motion.div 
                  ref={experienceRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, ease: "easeOut" }}
        >
        <section className="border-b-2">
          <div className="pb-24 lg:px-20 pt-10" id="experience" ref={experienceNavRef}>
            <h3 className="text-4xl lg:text-6xl py-5 md:mb-5 font-bold text-teal-700">Experience</h3>
            <div className="pl-4 lg:pl-10 sm:w-[600px] md:mx-auto py-4 border-teal-600 md:border-l-4 border-l-2 ml-1">
              <div>
                <p className="text-gray-600 text-light">March 2024 - June 2024</p>
                <h4 className="text-xl py-2 text-gray-600 font-medium md:text-3xl">Data Engineering Intern at Info Alchemy</h4>
                <p className="text-gray-600 md:text-lg">Studied fundamentals of data engineering and developed data validation scripts in AWS Glue using Python and SQL.</p>
              </div>
                <div className="flex pt-5 gap-3 items-start">
                  <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto">
                    <p>Python</p>
                  </div>
                  <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto">
                    <p>SQL</p>
                  </div>
                  <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto">
                    <p>AWS</p>
                  </div>
              </div>
            </div>
          </div>
        </section>
        </motion.div>
      </main>
    </div>
  );
}
