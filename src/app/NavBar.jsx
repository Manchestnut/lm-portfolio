'use client';
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
export default function NavBar() {
  const [menuToggle, setMenuToggle] = useState(false);

  function handleOnToggle() {
    menuToggle ? setMenuToggle(false) : setMenuToggle(true);
  }
    return (
        <nav className="md:fixed md:top-5 md:left-1/2 md:transform md:-translate-x-1/2 lg:w-auto md:px-6 md:py-2 py-4 px-2 bg-teal-500 md:rounded-3xl z-10">
          <AiOutlineMenu className="text-3xl fill-teal-900 md:hidden ml-auto" onClick={handleOnToggle}/>
          <ul className={menuToggle ? 'block px-2 text-gray-100' : 'hidden md:flex justify-center md:gap-6 items-center h-full text-sm md:text-lg text-gray-100'}>
            <li className={`md:hover:text-white`}><a href="#home">Home</a></li>
            <li className={`md:hover:text-white`}><a href="#projects">Projects</a></li>
            <li className={`md:hover:text-white`}><a href="#experience">Experience</a></li>
          </ul>
      </nav>
    )
}