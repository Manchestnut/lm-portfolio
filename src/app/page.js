'use client';
import { TiAdjustContrast } from "react-icons/ti";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const Icon = darkMode ? MdOutlineDarkMode : MdDarkMode;
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
    };
    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 lg:w-auto lg:px-6 lg:py-2 py-1 rounded-3xl ${scrolled ? "bg-teal-500" : "bg-teal-500"} z-10`}>
        <ul className="flex justify-center gap-6 items-center h-full text-sm md:text-lg font-normal text-gray-100 ">
          <li className="px-2"><a href="#home">Home</a></li>
          <li className="px-2"><a href="#projects">Projects</a></li>
          <li className="px-2"><a href="#experience">Experience</a></li>
          <li className="px-2"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <main className="bg-white px-10 dark:bg-gray-950 pb-20" id="home">
        <section className="border-b-2 pt-44 pb-36 ">
          <div className="w-10 flex justify-center p-2 fixed bottom-4 right-4" onClick={() => setDarkMode(!darkMode)}>
            <Icon className="cursor-pointer text-2xl dark:text-white" />
          </div>
          <div className="text-center pb-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium text-center">Luke Manongsong</h2>
            <h3 className="text-2xl py-5 md:text-3xl font-medium text-teal-800">Web Developer</h3>
            <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl">Recent graduate with a passion for programming and web development.</p>
            <button className="flex gap-1 items-center mt-6 mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-nowrap cursor-pointer"><IoDownloadOutline className="text-lg" />Download CV</button>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin/>
            <AiFillInstagram/>
          </div>
          {/* <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden z-0">
            <Image src={'/dev-ed-wave.png'} alt="Waving person" layout="fill" objectFit="cover"/>
          </div> */}
        </section>
        <section className="border-b-2">
          <div className="lg:py-15 lg:px-20 pt-10 pb-24" id="projects">
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
        <section className="border-b-2">
          <div className="pb-24 lg:px-20 pt-10" id="experience">
            <h3 className="text-4xl lg:text-6xl py-5 md:mb-5 font-bold text-teal-700">Experience</h3>
            <div className="pl-4 lg:pl-10 sm:w-[600px] md:mx-auto py-4 border-teal-600 md:border-l-4 border-l-2 ml-1">
              <div>
                <p className="text-gray-600 text-light">March 2024 - June 2024</p>
                <h4 className="text-xl py-2 text-gray-600 font-medium md:text-3xl">Data Engineering Intern at Info Alchemy</h4>
                <p className="text-gray-600 md:text-lg">Studied fundamentals of data engineering and developed data validation scripts in AWS Glue.</p>
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
    </div>
  );
}
