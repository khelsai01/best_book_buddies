import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";

const CarouselPrice = () => {
  return (
    <div className="bg-white w-[250px] h-[210px] flex flex-col mx-auto gap-2 shadow-lg py-6 rounded-lg mt-10 justify-start p-6">
      <div>
        <h1 className="text-2xl font-medium ">$1,410.16</h1>
        <p className="text-gray-400 text-sm">per month</p>
      </div>
      <hr />
      <div className="flex justify-between mx-auto gap-4">
        <div>
          <p className="text-sm">Payment Card</p>
          <p className="text-gray-400 text-sm">Component</p>
        </div>
        <div>
          <div className="flex flex-row justify-center ">
            <MdOutlineStar className="text-sky-500" />
            <MdOutlineStar className="text-sky-500" />
            <MdOutlineStar className="text-sky-500" />
            <MdOutlineStar className="text-sky-500" />
            <MdOutlineStarBorder className="text-gray-500" />
          </div>
          <p className="text-gray-400 text-sm">Rated 4.0/5</p>
        </div>
      </div>
      <div className="w-[90%] flex flex-col mx-auto bg-blue-600 text-white rounded-lg px-2 text-center">
        <p className="text-sm">use this design text </p>
        <p className="text-sm">system text</p>
      </div>
    </div>
  );
};

export default CarouselPrice;
