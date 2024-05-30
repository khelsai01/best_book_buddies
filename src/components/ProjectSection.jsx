import React from "react";
import CarouselSection from "./CarouselSection";

const ProjectSection = () => {
  return (
    <div className="maxW-full my-16 sm:my-36">
      <div className="w-[100%] sm:w-[90%] m-auto my-24">
        <h1 className=" w-[100%] sm:w-[80%] text-3xl md:text-5xl text-center font-medium md:font-semibold text-gray-800 mx-auto">
          Code the perfect design for each project using Atomize.
        </h1>
      </div>
      <div className="w-[95%] sm:w-[85%] flex flex-col sm:flex-row mx-auto py-10">
        <div className="mx-auto w-[80%] sm:w-[80%]">
          <img
            src="/assets/project.png"
            alt="project image"
            className="w-full m-auto  rounded-3xl"
          />
        </div>
        <div className="m-auto relative sm:absolute  z-1 sm:flex-1 sm:right-16 sm:h-full">
          <CarouselSection />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
