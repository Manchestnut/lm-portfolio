'use client';


import { motion } from "motion/react";
import { CiLink } from "react-icons/ci";

export default function Projects() {

    return (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
        <section className="border-y-2">
          <div className="lg:py-15 lg:px-20 pt-10 pb-24" id="projects">
            <h3 className="text-4xl lg:text-6xl py-5 md:mb-5 font-bold text-teal-700">Projects</h3>
            <div className="sm:w-[600px] md:mx-auto ml-1 lg:pl-0">
              <div className="min-w-sm lg:w-[600px] py-4 sm:pl-10 border-teal-600 md:border-l-4 border-l-2 pl-4">
                  <h4 className="text-xl py-1 text-gray-600 font-medium md:text-3xl">LLM-powered Service Desk Chatbot</h4>
                  <div className="flex text-gray-600 hover:text-teal-500 cursor-pointer w-fit">
                    <CiLink className="text-2xl"/>
                    <a className="px-1 font-medium" href="https://github.com/luke08082000/chatsight" target="_blank" rel="noopener noreferrer">Github</a>
                  </div>
                  <p className="text-gray-600 md:text-lg">A service desk chatbot that leverages OpenAI's large language models (LLMs) to address AWS Glue-related issues and automate support ticket creation in JIRA.</p>
              <div className="flex flex-wrap gap-3 pt-5">
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto w-fit">
                  <p>Lanchain</p>
                </div>
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto w-fit">
                  <p>Chainlit</p>
                </div>
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto text-nowrap w-fit">
                  <p>OpenAI API</p>
                </div>
                <div className="bg-teal-400 px-3 py-1 text-teal-900 font-bold rounded-3xl text-[11px] sm:text-[16px] my-auto text-nowrap w-fit">
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
                <div className="flex flex-wrap gap-3 pt-5">
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
    )
}