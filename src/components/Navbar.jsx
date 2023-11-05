import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex flex-col w-full bg-slate-600 md:flex-row justify-between items-center space-y-2 lg:space-y-0">
      <div className="flex justify-between items-center space-x-2 mr-[15px] md:mx-0 w-screen md:w-screen">
        <p className="text-[#ffffff] font-serif ml-[15px] font-semibold text-[18px] md:text-[36px] lg:text-[48px] leading-normal">
          Askari
        </p>
        {window.innerWidth <= 800 && (
          <button
            className="block"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <FaBars size={24} />
          </button>
        )}
      </div>

      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-[25px] text-white items-center font-poppins text-[18px] md:text-[21px] font-normal leading-normal tracking-[0.63px] space-y-2 md:space-x-4 justify-items-end md:space-y-0 ml=[15px] md:mx-[2vw]`}
      >
        <li>
          <a href="#home"> Home </a>
        </li>
        <li>
          <a href="#about-me">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1ReNwFoWJbiucfW1PMFZXdK50xMnVuMmX/view?usp=sharing"
            download="AskariResume.pdf"
          >
            <button
              type="button"
              className="w-[150px] h-[52px] rounded-[5px] bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700"
            >
              Download CV
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
