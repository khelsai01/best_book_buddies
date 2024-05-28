import React from 'react'
import { IoIosPlay } from "react-icons/io";

const Header1 = () => {
  return (
      <div className='w-full h-[40%] sm:h-[45%] flex justify-center items-center flex-col gap-8'>
          <div className='w-full sm:w-[55%] mt-9 ' >
              <h1 className='text-2xl sm:text-3xl font-medium my-6 text-center'>Design System for React JS</h1>
              <p className='text-md md:text-lg text-center p-6'>Atomize React is a Ui framework that helps developers collaborate with designers and build consistent user interface effortlessly.</p>
          </div>
          <div className='sm:mt-6 gap-5 flex flex-col md:flex-row'>
              <button className='bg-sky-500 p-3 px-8 text-white rounded-lg hover:bg-sky-400 text-center'>Get Started Now</button>

              <button className=' group p-3 px-5 text-gray-600 border-2 rounded-lg text-center flex gap-2 mx-auto' ><IoIosPlay className='text-2xl cursor-pointer group-hover:text-sky-600' /><span>Watch video</span></button>

          </div>
      
    </div>
  )
}

export default Header1
