import React from "react";
import MeaganCard from "./MeaganCard";
import ImageCard from "./ImageCard";
import LoginCard from "./LoginCard";
import IconsSection from "./IconsSection";

const MiddleCard = () => {
  return (
    <div className="maxW-full my-16 py-10">
      <div className=" w-[90%] sm:w-[85%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 m-auto gap-6">
        <div className="flex flex-col gap-1">
          <IconsSection />
          <MeaganCard />
        </div>
        <ImageCard />
        <LoginCard />
      </div>
    </div>
  );
};

export default MiddleCard;
