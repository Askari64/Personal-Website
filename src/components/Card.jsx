import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="w-[330px] h-[346px] rounded-[14px] p-6 m-4 relative overflow-hidden bg-slate-900">
      <h2 className="text-[32px] font-bold text-center text-white font-poppins">
        {title}
      </h2>
      <p className="text-[19px] mt-[24px] font-semibold text-center text-gray-400 font-poppins">
        {content}
      </p>
    </div>
  );
};

export default Card;