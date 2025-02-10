'use client';
import Link from 'next/link';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoDownloadOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

export default function LandingPage() {
    return (
        <section className="md:pt-44 pt-20 pb-36 w-fit mx-auto" id="home">
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
            <div className="lg:flex grid-cols-2 grid justify-center gap-4 py-6 items-center w-fit min-w-[300px] mx-auto">
              <Link href="/contact">
              <motion.button   
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-nowrap bg-gradient-to-r from-cyan-800 to-teal-600 text-white rounded-md flex items-center gap-2 text-sm md:text-base w-fit justify-center">Get in touch <FaArrowRightLong /></motion.button></Link>
              <button className="flex gap-2 items-center bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-nowrap cursor-pointer text-sm md:text-base w-fit justify-center">
                <a href="/CV_Luke_Manongsong.pdf" download className="flex items-center"><IoDownloadOutline className="text-lg mr-1" />Download CV</a></button>
              <a href="https://www.linkedin.com/in/luke-manongsong-ba5396298/" target="_blank" rel="noopener noreferrer"  className="ml-auto md:ml-0"><motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><AiFillLinkedin className="text-5xl text-teal-900 cursor-pointer"/></motion.div></a>
              <a href="https://github.com/luke08082000" target="_blank" rel="noopener noreferrer"  className="mr-auto md:mr-0"><motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}><AiFillGithub className="text-5xl text-teal-900 cursor-pointer"/></motion.div></a>
            </div>
          </motion.div>
        </section>
    )
}