import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";

const MeaganCard = () => {
  return (
      <div className="maxW-full flex flex-col mx-auto gap-2  sm:shadow-lg  bg-white  py-10 rounded-lg mt-10 ">
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
              <button className="flex flex-row  mx-auto bg-sky-500 p-1  px-6 rounded-full text-white text-sm  gap-2 items-center">
                <span>Follow</span>
                <IoMdAdd className="w-4 h-4 m-auto" />
              </button>
              <button className="flex flex-row  mx-auto items-center p-1 px-5 rounded-full border-2 text-sm gap-2">
                <span>Message</span>
                <FiMessageSquare className="w-5 h-5 m-auto text-gray-500" />
              </button>
            </div>
          </div>
  )
}

export default MeaganCard
