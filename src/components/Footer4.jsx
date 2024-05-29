import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";

const Footer4 = () => {
  return (
    <div className="maxW-full my-24">
      <div className="flex flex-col justify-between items-center">
        <div>
          <p className="text-gray-800 text-center font-medium">
            Design & Developed by Proksh Luthra
          </p>
        </div>
        <div className="flex flex-row gap-4 my-10">
          <FaGithub className="w-6 h-6 cursor-pointer" />
          <FaBehance className="w-6 h-6 cursor-pointer" />
          <CiBasketball className="w-6 h-6 cursor-pointer" />
          <FaTwitter className="w-6 h-6 cursor-pointer" />
          <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer4;
