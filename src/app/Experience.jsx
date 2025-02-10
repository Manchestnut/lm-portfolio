'use client';
import { motion } from "motion/react";

export default function Experience() {

    return (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        <section className="border-b-2">
          <div className="pb-24 lg:px-20 pt-10" id="experience">
            <h3 className="text-4xl lg:text-6xl py-5 md:mb-5 font-bold text-teal-700">Experience</h3>
            <div className="pl-4 lg:pl-10 sm:w-[600px] md:mx-auto py-4 border-teal-600 md:border-l-4 border-l-2 ml-1">
              <div>
                <p className="text-gray-600 text-light">March 2024 - June 2024</p>
                <h4 className="text-xl py-2 text-gray-600 font-medium md:text-3xl">Data Engineering Intern at Info Alchemy</h4>
                <p className="text-gray-600 md:text-lg">Studied fundamentals of data engineering and developed data validation scripts in AWS Glue using Python and SQL.</p>
              </div>
                <div className="flex flex-wrap pt-5 gap-3 items-start">
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
    )
}