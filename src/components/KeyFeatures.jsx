import React from "react";

const KeyFeatures = () => {
  return (
    <div className="maxW-full p-0 sm:p-10 ">
      <div className="w-[100%] sm:w-[85%] flex flex-col mx-auto justify-start shadow-lg px-6 py-36">
        <div className="flex flex-col items-start gap-6 ml-4">
          <button className="bg-black text-white rounded-full p-2 px-4 left-0">
            Key Features
          </button>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-start">
            Why use Atomize React?
          </h1>
          <p className="text-gray-500 text-[14px] text-start flex flex-col text-lg  ">
            Atomize Reaft helps you in building fully responsive websites
            <span> and products that match your style.</span>
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-4  mt-10 gap-4 mx-auto place-items-center"
        >
          <div className="flex flex-col items-start gap-8 shadow-lg rounded-lg p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="my-4"
            >
              <g fill="none" fill-rule="evenodd">
                <rect width="32" height="32" fill="#FFC148" rx="3" />
                <path
                  stroke="#000"
                  stroke-linecap="square"
                  stroke-width="2"
                  d="M21.5 1L21.5 31M10.5 1L10.5 31"
                />
              </g>
            </svg>
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold my-4">Flexible Grid</h2>
              <p className="text-gray-500 text-start  ">
                Change grid variables or give decimal column size.
              </p>
            </div>

            <button className="text-sky-600">See How</button>
          </div>
          <div className="flex flex-col items-start gap-8 shadow-lg rounded-lg p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
               className="my-4"
            >
              <g fill="none" fill-rule="evenodd">
                <rect width="32" height="32" fill="#FF6B38" rx="3" />
                <path
                  stroke="#000"
                  stroke-width="2"
                  d="M2.73376067,9.42433109 C2.54450231,9.21993206 2.27856362,9.10373912 2,9.10373912 C1.44771525,9.10373912 1,9.55145437 1,10.1037391 L1,29 C1,30.1045695 1.8954305,31 3,31 L20.4224638,31 C20.6743841,31 20.9170226,30.9049173 21.1018718,30.7337607 C21.5071166,30.358534 21.5314511,29.7258368 21.1562245,29.320592 L2.73376067,9.42433109 Z"
                />
              </g>
            </svg>
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold my-4">Stke Guide</h2>
              <p className="text-gray-500 text-start  ">
                Update the throughout the application easily.
              </p>
            </div>

            <button className="text-sky-600">See How</button>
          </div>
          <div className="flex flex-col items-start gap-8 shadow-lg rounded-lg p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
               className="my-4"
            >
              <g fill="none" fill-rule="evenodd">
                <rect width="32" height="32" fill="#1CDB9E" rx="3" />
                <rect
                  width="11"
                  height="11"
                  x="20"
                  y="20"
                  stroke="#000"
                  stroke-width="2"
                />
                <rect
                  width="11"
                  height="11"
                  x="1"
                  y="1"
                  stroke="#000"
                  stroke-width="2"
                />
              </g>
            </svg>

            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold my-4">Spacing</h2>
              <p className="text-gray-500 text-start  ">
                A better and controlled way of update spacing.
              </p>
            </div>

            <button className="text-sky-600">See How</button>
          </div>
          <div className="flex flex-col items-start gap-8 shadow-lg rounded-lg p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
               className="my-4"
            >
              <g fill="none" fill-rule="evenodd">
                <rect
                  width="12"
                  height="16"
                  x="20"
                  y="16"
                  fill="#43A4FF"
                  rx="3"
                />
                <rect width="32" height="11" fill="#43A4FF" rx="3" />
                <rect
                  width="11"
                  height="14"
                  x="1"
                  y="17"
                  stroke="#000"
                  stroke-width="2"
                />
              </g>
            </svg>
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold my-4">Responsive</h2>
              <p className="text-gray-500 text-start  ">
               Better control to make the app responsive.
              </p>
            </div>

            <button className="text-sky-600">See How</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
