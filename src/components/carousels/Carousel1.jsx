import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

const Carousel1 = () => {
  return (
    <div className="w-[250px] flex flex-col mx-auto gap-2 shadow-lg  bg-white py-6 rounded-lg mt-6 ">
      <img
        src="/assets/avatar.png"
        alt="meafan fisher"
        className="m-auto rounded-full p-4"
      />

      <h2 className="text-md font-semibold text-center">Meagan Fisher</h2>
      <p className=" text-gray-500 text-sm text-center my-4">
        Engineering Manager
      </p>
      <div className="flex flex-row mx-auto gap-2">
        <button className="flex flex-row  mx-auto bg-sky-500 p-1  px-2 rounded-full text-white text-[12px]  gap-2 items-center">
          <span>Follow</span>
          <IoMdAdd className=" m-auto" />
        </button>
        <button className="flex flex-row  mx-auto items-center p-1 px-2 rounded-full border-2 text-[12px] gap-2">
          <span>Message</span>
          <FiMessageSquare className=" m-auto text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default Carousel1;
