import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="w-[100%] h-full mt-[50px] flex justify-between"
    >
      <div>
        <h2 className="w-[330px] h-[98px] top-[55px] font-poppins text-black text-[65px] ml-[56px] font-semibold leading-normal tracking-[1.95px]">
          About Me
        </h2>
        <p className="w-[750px] h-full mt-[15px] font-poppins text-gray-800 text-[21px] ml-[56px] font-normal leading-normal tracking-[0.63px] ">
          👋 I'm{" "}
          <a
            href="https://www.linkedin.com/in/syed-mohammed-askari-rizvi-a9b4061a3"
            className="text-sky-500"
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
            <br /> <hr /> <br />
            <li>
              <h3>
                ✨<b>My Skills Include</b>✨
              </h3>
            </li>
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
      <aside className="mr-[56px]">
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/3OxT8QEGfzdIxaljjQsedI?utm_source=generator"
          width="400"
          height="700px"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </aside>
    </div>
  );
};

export default AboutMe;
