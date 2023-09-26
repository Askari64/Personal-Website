import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full h-screen flex flex-col items-center justify-center bg-slate-800 overflow-x-hidden overflow-y-auto py-5 relative"
    >
      <hr />
      <h1 className="text-white text-center font-poppins text-[30px] md:text-[48px] lg:text-[65px] xl:text-[80px] 2xl:text-[100px] font-semibold leading-normal tracking-[0.95px] w-full">
        Services
      </h1>
      <p className="text-gray-400 font-poppins text-[18px] md:text-[25px] lg:text-[30px] xl:text-[36px] 2xl:text-[42px] mt-[15px] font-normal leading-normal tracking-[0.36px] text-center mx-auto w-full">
        I provide UI/UX Consultation Services, Front-end Development Services
        and Microsoft Power Platform related services. But it ain't limited
        here. <br />
        <a href="mailto:askarir64@gmail.com">
          <span className="text-cyan-500 hover:underline">
            <b>Reach out for more</b>
          </span>
        </a>
      </p>
      <div className="flex justify-center w-full gap-[4%] mt-[80px] flex-wrap">
        <Card
          title="UI & UX Consultation"
          content="UI/UX Consultation service for your Websites and Applications"
        />
        <Card
          title="Website/Webapp Development"
          content="Develop Websites/Webapps using React, TypeScript/JavaScript, and Node.js"
        />
        <Card
          title="Automations Development"
          content="Develop automations using Power Automate."
        />
      </div>
    </div>
  );
};

export default Services;