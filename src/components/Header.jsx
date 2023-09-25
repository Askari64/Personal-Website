import React from "react";
import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="w-screen h-full flex-shrink-1 flex justify-between  bg-slate-800 overflow-x-hidden">
      <div id="home" className="ml-[56px] md:ml-[16px]">
        <p className="text-white text-[24px] md:text-[32px] lg:text-[48px] font-semibold leading-normal tracking-[0.72px] left-[7px]">
          Hi I am
        </p>
        <p className="text-cyan-500 font-poppins text-[24px] md:text-[32px] lg:text-[48px] font-semibold leading-normal tracking-[0.96px] w-[80%] md:w-[324px] h-[48px] mt-[10px]">
          <a
            href="https://github.com/Askari64"
            target="blank"
            className="hover:underline hover:text-cyan-500 transition-all duration-1000 ease-in"
          >
            Askari Rizvi
          </a>
        </p>
        <h1 className="text-white font-poppins text-[48px] md:text-[64px] lg:text-[100px] font-bold leading-[60px] md:leading-[80px] lg:leading-[120px] tracking-[3px] w-[383px] h-[120px] mt-[20px]">
          React.js
        </h1>
        <h1 className="text-white font-poppins text-[48px] md:text-[64px] lg:text-[100px] font-bold leading-[60px] md:leading-[80px] lg:leading-[120px] tracking-[3px] w-[383px] h-[120px] mt-[0px]">
          Developer
        </h1>
        <p className="text-gray-400 font-poppins text-[16px] md:text-[24px] lg:text-[28px] leading-normal tracking-[0.64px] w-[80%] md:w-[600px] h-[full] mt-[20px]">
          Enthusiastic and a Quick learner.
          <br /> Eager to work and gain valuable experience
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 rounded-[5px] text-black font-poppins text-[18px] md:text-[21px] lg:text-[24px] font-normal leading-normal tracking-[0.63px] w-[188px] md:w-[188px] h-[40px] md:h-[52px] text-center mt-[20px]">
          <a
            href="https://www.linkedin.com/in/syed-mohammed-askari-rizvi-a9b4061a3"
            className="w-full h-full flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </button>{" "}
        <br />
        <br />
      </div>
      <div className="mr-[56px] 2xl:visible xl:visible lg:visible md:visible sm:collapse">
        <img
          src={reactLogo}
          className="w-full max-w-[300px] h-[300px] flex justify-center mt-[80px] mr-[56px] animate-[spin_10s_linear_infinite] "
          alt="React logo"
        />
      </div>
    </header>
  );
};

export default Header;
