import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const ProfileCarousel = () => {
  return (
    <div className="w-[250px] flex bg-white justify-between p-4 my-6 rounded-lg mx-auto">
      <div className="flex gap-2">
        <img
          src="/assets/avatar.png"
          alt="Meagan Fisher"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-sm md:text-[12px] lg:text-sm font-semibold m-auto">
          Meagan Fisher
        </h1>
      </div>

      <FaPlusCircle className="cursor-pointer mt-3 text-sky-500 " />
    </div>
  );
};

export default ProfileCarousel;
