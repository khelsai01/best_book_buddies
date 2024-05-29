import React from "react";

const Footer1 = () => {
  const str = "</>";
  return (
    <div className="maxW-full my-44">
      <div
        className="w-[100%] sm:w-[70%] grid grid-cols-2 sm:grid-cols-4  mx-auto
          gap-6"
      >
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl my-8 font-semibold">15+</h1>
          <p className="text-gray-500 px-8">Ready to use React Components</p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold my-8">60+</h1>
          <p className="text-gray-500 px-8 ">
            Perdefined colores for theme setup
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold my-8">{str} </h1>
          <p className="text-gray-500 px-4">
            Detailed decoumentation for each component
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold uppercase my-8">
            free
          </h1>
          <p className="text-gray-500 px-8 ">
            Open source with regular updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
