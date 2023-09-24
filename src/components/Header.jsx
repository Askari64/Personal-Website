import React from "react";
import reactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="w-[100%] h-[550px] mt-[80px] flex-shrink-0 flex justify-between overflow-x-hidden">
      <div id="home">
        <p className="text-black text-[24px] font-semibold leading-normal tracking-[0.72px] ml-[56px] left-[7px]">
          Hi I am
        </p>
        <p className="text-cyan-500 font-poppins text-[32px] font-semibold leading-normal tracking-[0.96px] w-[324px] h-[48px] ml-[56px]">
          <a
            href="https://github.com/Askari64"
            target="blank"
            className="hover:underline hover:text-cyan-500 transition-all duration-1000 ease-in"
          >
            Askari Rizvi
          </a>
        </p>

        <h1 className="text-black font-poppins text-[100px] font-bold leading-[120px] tracking-[3px] w-[383px] h-[120px] top-[174px] ml-[56px]">
          React.js
        </h1>
        <h1 className="text-black font-poppins text-[100px] font-bold leading-[120px] tracking-[3px] w-[383px] h-[120px] top-[174px] ml-[230px]">
          Developer
        </h1>
        <p className="text-gray-800 font-poppins text-[28px] leading-normal tracking-[0.64px] w-[600px] h-[full] top-[400px] ml-[56px] mt-[28px]">
          Enthusiastic and a Quick learner.
          <br /> Eager to work and gain valuable experience
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 rounded-[5px] text-black font-poppins text-[21px] font-normal leading-normal tracking-[0.63px] w-[188px] h-[52px] text-center ml-[56px] mt-[22px]">
          <a
            href="https://www.linkedin.com/in/syed-mohammed-askari-rizvi-a9b4061a3"
            className="w-full h-full flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </button>
      </div>
      <div className="mr-[56px]">
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
