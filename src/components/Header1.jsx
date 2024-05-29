import React from "react";
import { IoIosPlay } from "react-icons/io";

const Header1 = () => {
  return (
    <div className="maxW-full h-[40%] sm:h-[45%] flex justify-center items-center flex-col gap-8">
      <div className="w-full sm:w-[65%] mt-9 text-center ">
        <h1 className="text-2xl sm:text-4xl font-medium my-6 ">
          Design System for React JS
        </h1>
        <p className="text-md md:text-lg  p-6 w-full mx-auto">
          Atomize React is a Ui framework that helps developers collaborate with
          designers and build consistent user interface effortlessly.
        </p>
      </div>
      <div className="w-[95%] sm:w-[400px] sm:mt-6 gap-5 flex flex-col sm:flex-row  mx-auto">
        <button className="bg-sky-500 p-3 px-8 text-white rounded-lg hover:bg-sky-400 text-center ">
          Get Started Now
        </button>

        <div className=" group p-3 px-5 text-gray-600 border-2 rounded-lg text-center flex gap-2 justify-center items-center">
          <IoIosPlay className="text-2xl cursor-pointer group-hover:text-sky-600" />
          <span>Watch video</span>
        </div>
      </div>
    </div>
  );
};

export default Header1;
