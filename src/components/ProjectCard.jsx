import React from "react";

const ProjectCard = ({ title, content, image, link }) => {
  return (
    <div className="w-[330px] h-auto bg-opacity-80 backdrop-blur-lg bg-sky-400 rounded-[14px] p-6 m-4 flex flex-col items-center">
      <a href={link}>
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-t-[14px]"
        />
      </a>
      <h3 className="text-black text-[32px] font-semibold text-center font-poppins mt-4">
        {title}
      </h3>
      <p className="text-gray-800 text-[19px] font-normal text-center font-poppins mt-4">
        {content}
      </p>
    </div>
  );
};

export default ProjectCard;
