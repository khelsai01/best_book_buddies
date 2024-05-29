import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <div className="maxW-full my-44">
          <div className='w-[100%] md:w-[75%] bg-gray-100 sm:rounded-3xl flex flex-col md:flex-row flex-start  md:justify-between items-center mx-auto py-4
          '>
              <div className='basis-[70%] text-start my-16 ml-16'>
                  <div className='flex gap-3 mx-auto'>
                      <h1 className='text-xl sm:text-3xl font-semibold '>UI Templates are ontheir way  </h1>
                      <img src="/assets/rocket.svg" alt="Rocket" className='w-8 h-8' />
                      </div>
                  <p className='text-gray-600 mt-4'>Offical UI templates build on Atomixe React will be released very soon.</p>
              </div>
              <div className= ' w-[200px] cursor-pointer bg-black text-white p-2 px-6 rounded-full flex justify-between items-center mx-auto h-12 ml-16 md:ml-0  '>
                
                  <button className='' >Get notified
                  </button>
                  <FaArrowRightLong className='m-auto ml-9' />
              </div>
              
      </div>
    </div>
  )
}

export default Footer2
