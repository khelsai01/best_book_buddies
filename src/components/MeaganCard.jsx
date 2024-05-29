import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";

const MeaganCard = () => {
  return (
      <div className="flex flex-col mx-auto gap-2 shadow-lg w-full bg-white  py-10 rounded-lg ">
            <img
              src="/assets/avatar.png"
              alt="meafan fisher"
              className="m-auto rounded-full p-4"
            />

            <h2 className="text-xl font-semibold text-center">Meagan Fisher</h2>
            <p className="text-sm text-gray-500 text-cente my-6">
              Engineering Manager
            </p>
            <div className="flex flex-row mx-auto gap-2">
              <button className="flex flex-row  mx-auto bg-sky-500 p-2 px-6 rounded-full text-white text-md gap-2">
                <span>Follow</span>
                <IoMdAdd className="w-4 h-4 m-auto" />
              </button>
              <button className="flex flex-row  mx-auto p-2 px-5 rounded-full border-2 text-md gap-2">
                <span>Message</span>
                <FiMessageSquare className="w-5 h-5 m-auto" />
              </button>
            </div>
          </div>
  )
}

export default MeaganCard
