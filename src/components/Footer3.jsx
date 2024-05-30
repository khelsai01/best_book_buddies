import React from "react";

const Footer3 = () => {
  return (
    <div className="max-full md:w-[85%] hidden sm:block m-auto">
      <div className=" flex justify-center  mx-auto gap-6">
        <div className=" flex flex-col text-start gap-4">
          <h1 className="text-lg font-semibold cursor-pointer">Docs</h1>
          <p className="text-md text-gray-500  cursor-pointer">Installation</p>
          <p className="text-md text-gray-500  cursor-pointer">Theme Setup</p>
          <p className="text-md text-gray-500  cursor-pointer">Grid</p>
          <p className="text-md text-gray-500  cursor-pointer">Atoms</p>
          <p className="text-md text-gray-500  cursor-pointer">Molecules</p>
          <p className="text-md text-gray-500  cursor-pointer">Functions</p>
        </div>
        <div className=" flex flex-col text-start gap-4">
          <h1 className="text-lg font-semibold cursor-pointer">Atomize</h1>
          <p className="text-md text-gray-500  cursor-pointer">Featu res</p>
          <p className="text-md text-gray-500  cursor-pointer">Design</p>
          <p className="text-md text-gray-500  cursor-pointer">Development</p>
        </div>
        <div className=" flex flex-col text-start gap-4">
          <h1 className="text-lg font-semibold cursor-pointer">Resources</h1>
          <p className="text-md text-gray-500  cursor-pointer">Sketch File</p>
          <p className="text-md text-gray-500  cursor-pointer">Github</p>
        </div>
        <div className=" flex flex-col text-start gap-6">
          <h1 className="text-lg font-semibold cursor-pointer">About</h1>
          <p className="text-md text-gray-500  cursor-pointer">Showcase</p>
          <p className="text-md text-gray-500  cursor-pointer">Contribute</p>
        </div>
        <div className=" flex flex-col text-start gap-4">
          <h1 className="text-lg font-semibold cursor-pointer">Extra</h1>
          <p className="text-md text-gray-500  cursor-pointer">Blog</p>
          <p className="text-md text-gray-500  cursor-pointer">Need Help</p>
          <p className="text-md text-gray-500  cursor-pointer">Give Feedback</p>
        </div>
      </div>
    </div>
  );
};

export default Footer3;
