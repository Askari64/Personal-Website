import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-[90%] h-[full] mt-[50px] ml-[56px] inline-flex flex-col justify-center items-center gap-[48px] flex-shrink-0"
    >
      <h2 class="text-black text-center font-poppins text-[65px] font-semibold leading-normal tracking-[1.95px] w-full h-[98px]">
        Lets Work Together
      </h2>
      <a href="mailto:askarir64@gmail.com">
        <button className="w-[200px] h-[75px] flex-shrink-0 rounded-[14px] bg-sky-600 text-white text-center font-poppins text-[24px] font-semibold leading-normal tracking-[0.72px]">
          Mail Me!
        </button>
      </a>
    </div>
  );
};

export default Contact;
