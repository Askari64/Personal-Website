import React from "react";
import ProjectCard from "./ProjectCard";
import QR from "../assets/QR-Generator.png";
import Weatherion from "../assets/Weatherion.png";
import Todo from "../assets/TodoApp.png";

const Projects = () => {
  return (
    <div
      id="project"
      className="w-[90%] h-full mt-[50px] ml-[56px] flex justify-center flex-col overflow-x-hidden"
    >
      <hr />
      <h2 className="flex  w-[400px] h-[98px] font-poppins text-black text-[65px] font-semibold leading-normal tracking-[1.95px] mx-auto">
        My Projects
      </h2>
      <div className="flex justify-center w-full gap-[50px] mt-[80px] flex-wrap">
        <ProjectCard
          title="QR-Generator"
          content="About
          Generate everlasting QR codes with the QR Generator. Say goodbye to expiring codes and create QR codes that stay functional over time. Built with React and powered by react-qr-code, this project ensures your QR codes stand the test of time."
          image={QR}
          link="https://qr-generator-askari64.vercel.app/"
        />
        <ProjectCard
          title="Weatherion"
          content="Weatherion is a web app that lets you search for the weather of any location in the world. It is built with React, TypeScript, Tailwind CSS, and Axios. It has a dark mode, a real-time forecast, and a responsive design. "
          image={Weatherion}
          link="https://weatherion-weather-app.vercel.app/"
        />
        <ProjectCard
          title="Todo App"
          content="This is a simple and private Todo application built with React, TypeScript, and Tailwind CSS. Unlike other Todo apps, this one values your privacy. Your data is stored in your browser's local storage and is not shared with any organization or stored on any servers or databases."
          image={Todo}
          link="https://react-todo-app-askari64.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
