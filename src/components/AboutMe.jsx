import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="w-full h-screen flex flex-col items-center justify-center bg-slate-900 overflow-x-hidden overflow-y-auto py-5 relative"
    >
      <div className="mt-[56px] md:mt-[16px] text-center space-y-5">
        <h2 className="text-white text-[24px] md:text-[32px] lg:text-[48px] font-semibold leading-normal tracking-[0.72px]">
          About Me
        </h2>
        <p className="text-gray-400 font-poppins text-[16px] md:text-[24px] lg:text-[28px] leading-normal tracking-[0.64px] mt-[20px] text-center">
          👋 I'm{" "}
          <a
            href="https://www.linkedin.com/in/syed-mohammed-askari-rizvi-a9b4061a3"
            className="text-cyan-500 underline hover:text-cyan-500 transition-all duration-1000 ease-in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>Askari</u>
          </a>
          , 🎓 BCA'24, and based in 📍 Lucknow, India. <br /> I'm a React.js
          Developer with enthusiasm to expand my knowledge about technologies.
          <br /> <br />
          <ul>
            <li>👩‍💻 I'm consistently upskilling myself</li>
            <li>🧠 I'm learning React.js and anything I fancy with it</li>
            <li>📫 Reach me out on my LinkedIn</li>
            <li>❤️ I love Modern Minimalistic design</li>
          </ul>
          <br /> <br />
          <h3>
            ✨<b>My Skills Include</b>✨
          </h3>{" "}
          <br />
          <br />
          <ul className="grid grid-cols-3 gap-4 ">
            <li>🌐 HTML</li>
            <li>🖌️ CSS</li>
            <li>🚀 JavaScript</li>
            <li>🖥️ Node.js</li>
            <li>⚛️ React.js</li>
            <li>📘 TypeScript</li>
            <li>👨‍💻 Git</li>
            <li>🎨 Figma</li>
            <li>🤖 Power Automate</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
