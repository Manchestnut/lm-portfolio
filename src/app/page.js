'use client';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoDownloadOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

export default function Home() {
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
    <div>
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
        <section className="border-b-2 pt-44 pb-36 w-fit mx-auto"id="home" ref={homeNavRef}>
          <motion.div className="text-center pb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-5xl py-2 text-teal-600 font-medium text-center">Luke Manongsong</h2>
            <h3 className="text-2xl py-5 md:text-3xl font-medium text-teal-800">Web Developer</h3>
            <p className="text-medium py-5 leading-8 text-gray-600 md:text-lg max-w-2xl">
              A recent graduate with foundational experience across diverse areas, including developing AI-powered
              solutions, building full-stack web applications, and working on data engineering projects to ensure data
              quality.
            </p>
            <div className="lg:flex grid-cols-2 grid justify-center gap-4 py-6 items-center w-fit mx-auto">
              <Link href="/contact">
              <motion.button   
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-cyan-800 to-teal-600 text-white rounded-md flex items-center gap-2 text-sm md:text-base">Get in touch <FaArrowRightLong /></motion.button></Link>
              <button className="flex gap-1 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-nowrap cursor-pointer text-sm md:text-base"><a href="/CV_Luke_Manongsong.pdf" download className="flex items-center"><IoDownloadOutline className="text-lg" />Download CV</a></button>
              <a href="https://www.linkedin.com/in/luke-manongsong-ba5396298/" target="_blank" rel="noopener noreferrer"  className="ml-auto md:ml-0"><motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><AiFillLinkedin className="text-5xl text-teal-900 cursor-pointer"/></motion.div></a>
              <a href="https://github.com/luke08082000" target="_blank" rel="noopener noreferrer"  className="mr-auto md:mr-0"><motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><AiFillGithub className="text-5xl text-teal-900 cursor-pointer"/></motion.div></a>
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
                  <h4 className="text-xl py-1 text-gray-600 font-medium md:text-3xl">LLM-powered Service Desk Chatbot</h4>
                  <div className="flex text-gray-600 hover:text-teal-500 cursor-pointer w-fit">
                    <CiLink className="text-2xl"/>
                    <a className="px-1 font-medium" href="https://github.com/luke08082000/chatsight" target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                  <p className="text-gray-600 md:text-lg">A service desk chatbot that leverages OpenAI's large language models (LLMs) to address AWS Glue-related issues and automate support ticket creation in JIRA.</p>
              <div className="flex gap-3 pt-5">
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto">
                  <p>Lanchain</p>
                </div>
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto">
                  <p>Chainlit</p>
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
                <div className="flex text-gray-600 hover:text-teal-500 cursor-pointer w-fit">
                  <CiLink className="text-2xl"/>
                  <a className="px-1 font-medium" href="https://github.com/luke08082000/SE2" target="_blank" rel="noopener noreferrer">Github</a>
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
