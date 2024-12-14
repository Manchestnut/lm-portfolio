'use client';
import Head from "next/head";
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Portfolio na malupet</title>
        <meta name="description"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={`h-24 mb-44 fixed w-full ${scrolled ? "bg-teal-100 bg-opacity-50" : "bg-teal-200"} z-10`}>
        <ul className="flex justify-center gap-8 md:gap-12 items-center h-full text-lg md:text-2xl font-extrabold text-teal-800">
          <li className=""><a href="#home">Home</a></li>
          <li className=""><a href="#projects">Projects</a></li>
          <li className=""><a href="#experience">Experience</a></li>
        </ul>
      </nav>
      <main className="bg-white px-10 dark:bg-gray-950 pt-52" id="home">
        <section className="min-h-screen">
          <div className="w-10 flex justify-center p-2 fixed bottom-4 right-4" onClick={() => setDarkMode(!darkMode)}>
            <Icon className="cursor-pointer text-2xl" />
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
        <section>
          <div className="lg:py-15 lg:px-20 py-20" id="projects">
            <h3 className="text-4xl lg:text-6xl py-5 font-bold text-teal-700">Projects</h3>
            <div className="sm:w-[600px] mx-auto pl-4 lg:pl-0">
              <div className="min-w-sm lg:w-[600px] rounded-xl py-4 sm:pl-10">
                <h4 className="text-xl py-1 text-gray-600 font-medium md:text-3xl">AI Support Chatbot with Jira Integration</h4>
                <div className="flex text-gray-600 hover:text-teal-500 cursor-pointer">
                  <CiLink className="text-2xl"/>
                  <p className="px-1 font-medium">Github</p>
                </div>
                <p className="text-gray-600 md:text-lg">A customer support chatbot that leverages OpenAI's large language models (LLMs) to address AWS Glue-related issues and automate ticket creation in JIRA.</p>
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
              <div className="min-w-sm lg:w-[600px] rounded-xl pt-6 sm:pl-10">
                <h4 className="text-xl pt-3 pb-1 text-gray-600 font-medium md:text-3xl">Capstone Documents Approval System</h4>
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
        <section>
          <div className="lg:p-20 py-20" id="experience">
            <h3 className="text-4xl lg:text-6xl py-5 font-bold text-teal-700">Experience</h3>
            <div className="pl-4 lg:pl-10 sm:w-[600px] mx-auto pt-5">
              <div>
                <p className="text-gray-600 text-light">March 2024 - June 2024</p>
                <h4 className="text-xl py-2 text-gray-600 font-medium md:text-3xl">Data Engineer Intern at Info Alchemy</h4>
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
      </main>
    </div>
  );
}
