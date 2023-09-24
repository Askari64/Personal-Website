import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="w-[330px] h-[346px] bg-opacity-80 backdrop-blur-lg bg-sky-200 rounded-[14px] p-6 m-4">
      <h2 className="text-black text-[32px] font-semibold text-center font-poppins">
        {title}
      </h2>
      <p className="text-grey-400 text-[19px] font-normal text-center font-poppins mt-4">
        {content}
      </p>
    </div>
  );
};

export default Card;