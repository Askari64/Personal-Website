import React from "react";
import Card from "./Card";

const Services = () => {
  return (
    <div
      id="services"
      className="w-[90%] h-[full] mt-[50px] ml-[56px] flex justify-center flex-col overflow-x-hidden"
    >
      <hr />
      <h1 className="w-full h-[full] font-poppins text-black text-[65px] font-semibold leading-normal tracking-[1.95px] flex justify-center">
        Services
      </h1>
      <p className="w-[full] h-[100px] mt-[15px] text-gray-800 font-poppins text-[25px] font-normal leading-normal tracking-[0.36px] flex justify-center items-center flex-col text-center mx-auto">
        I provide UI/UX Consultation Services, Front-end Development Services
        and Microsoft Power Platform related services. But it ain't limited
        here. <br />
        <a href="mailto:askarir64@gmail.com">
          <span className="text-sky-400 hover:underline">
            <b>Reach out for more</b>
          </span>
        </a>
      </p>
      <div className="flex justify-center w-full gap-[50px] mt-[80px] flex-wrap">
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
