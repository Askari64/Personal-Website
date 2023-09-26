import React, { useState } from "react";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Mail Me!");

  return (
    <div
      id="contact"
      className="w-full flex flex-col items-center justify-center bg-slate-800 overflow-x-hidden overflow-y-auto py-20 relative"
    >
      <hr />
      <h2 className="text-white text-center font-poppins text-[30px] md:text-[48px] lg:text-[65px] xl:text-[80px] 2xl:text-[100px] font-semibold leading-normal tracking-[0.95px] w-full">
        Let's Work Together
      </h2>
      <a href="mailto:askarir64@gmail.com">
        <button 
          className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 rounded-lg text-black font-poppins text-[18px] md:text-[21px] lg:text-[24px] font-normal leading-normal tracking-[0.63px] w-[188px] md:w-[188px] h-[40px] md:h-[52px] text-center mt-[20px] transition-all duration-700 ease-in-out border border-transparent hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500"
          onMouseEnter={() => setButtonText("I'm Excited 🤩")}
          onMouseLeave={() => setButtonText("Mail Me!")}
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default Contact;
