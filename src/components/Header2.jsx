import React from "react";
import reactLogo from "../assets/react.svg";

const Header2 = () => {
  return (
    <header className="w-full h-screen flex-shrink-1 flex flex-col items-center justify-center bg-slate-800 overflow-x-hidden py-5 relative">
      <img
        src={reactLogo}
        alt="React Logo"
        className="absolute top-0 right-[2%] m-5 h-16 w-16 animate-[spin_10s_linear_infinite]"
      />

      <div id="home" className="mt-[56px] md:mt-[16px] text-center space-y-5">
        <p
          style={{ marginBottom: "20px" }}
          className="text-white text-[24px] md:text-[32px] lg:text-[48px] font-semibold leading-normal tracking-[0.72px]"
        >
          Hi, I am{" "}
          <span className="text-cyan-500 font-poppins underline hover:text-cyan-500 transition-all duration-1000 ease-in">
            <a href="https://github.com/Askari64" target="blank">
              Askari Rizvi
            </a>
          </span>
        </p>

        <h1
          style={{ marginBottom: "20px" }}
          className="text-white font-poppins text-[48px] md:text-[64px] lg:text-[100px] font-bold leading-[60px] md:leading-[80px] lg:leading-[120px] tracking-[3px] text-center"
        >
          React.js Developer
        </h1>

        <p
          style={{ marginBottom: "20px" }}
          className="text-gray-400 font-poppins text-[16px] md:text-[24px] lg:text-[28px] leading-normal tracking-[0.64px] mt-[20px] text-center"
        >
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
        </button>
      </div>
    </header>
  );
};

export default Header2;
