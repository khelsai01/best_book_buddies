import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const ImageCard = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className=" flex flex-col mx-auto gap-2  w-full ">
      <div className="w-full shadow-2xl rounded-lg">
        <img
          src="/assets/download.png"
          alt="meafan fisher"
          className="m-auto object-cover rounded-t-lg"
        />
        <div className="flex justify-between p-4">
          <div className="flex gap-2">
            <img
              src="/assets/avatar2.png"
              alt="Meagan Fisher"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-md font-semibold m-auto">Meagan Fisher</h1>
          </div>
          <div onClick={handleLike} className="cursor-pointer">
            {liked ? (
              <FaHeart className="text-2xl text-red-600 m-auto" />
            ) : (
              <FaRegHeart className="text-2xl text-gray-600 m-auto" />
            )}
          </div>
        </div>
      </div>
      <div className="shadow-2xl mt-3 p-6 rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              src="/assets/avatar3.png"
              alt=" avatar3"
              className="rounded-full w-12 h-12"
            />
            <div className="text-start ">
              <h1 className="font-semibold ">John Doe</h1>
              <p className="text-sm text-gray-500 ">UI/UX Designer</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="ae c0 ds dt du w-6 h-6 m-auto mt-4 "
            >
              <path
                fill="#00000"
                fill-rule="evenodd"
                d="M19.2928932,9.29289322 L9.29289322,19.2928932 C9.10535684,19.4804296 8.85100293,19.5857864 8.58578644,19.5857864 L5,19.5857864 C4.44771525,19.5857864 4,19.1380712 4,18.5857864 L4,15 C4,14.7347835 4.10535684,14.4804296 4.29289322,14.2928932 L14.2928932,4.29289322 C14.6834175,3.90236893 15.3165825,3.90236893 15.7071068,4.29289322 L19.2928932,7.87867966 C19.6834175,8.26920395 19.6834175,8.90236893 19.2928932,9.29289322 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
