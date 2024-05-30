import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";

const CardOne = () => {
  return (
    <div className="maxW-full bg-slate-200 my-10 py-10">
      <div className="w-[100%] sm:w-[70%] grid grid-cols-3 lg:grid-cols-3 mx-auto gap-2">
        <div className="flex flex-col mx-auto gap-4 p-4 rounded-lg">
          <div className="flex justify-between items-center mx-auto gap-3 w-full p-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ae c0 ds dt du w-10 h-10 p-2 rounded-full bg-white shadow-xl border-2 hover:scale-125 duration-500"
              >
                <path
                  fill="#F4541D"
                  fill-rule="evenodd"
                  d="M20.4578131,5.54218691 C19.4708558,4.55476617 18.1319762,4 16.73588,4 C15.3397838,4 14.0009043,4.55476617 13.0139469,5.54218691 L11.9997441,6.55638976 L10.9855413,5.54218691 C8.92997437,3.48662009 5.59724201,3.48662011 3.54167516,5.54218697 C1.4861083,7.59775382 1.48610828,10.9304862 3.5416751,12.9860531 L4.55587795,14.0002559 L11.993314,20.2446014 C11.9970324,20.2477233 12.0024558,20.2477233 12.0061741,20.2446014 L19.4436102,14.0002559 L20.4578131,12.9860531 C21.4452338,11.9990957 22,10.6602162 22,9.26411999 C22,7.86802382 21.4452338,6.52914425 20.4578131,5.54218691 Z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ae c0 ds dt du w-10 h-10 p-2 rounded-full bg-white shadow-xl border-2 hover:scale-125 duration-500"
              >
                <path
                  fill="#0284FE"
                  fill-rule="evenodd"
                  d="M12,18 C15.9720575,18 18.9649443,15.8444121 20.8094763,12 C18.9649443,8.15558794 15.9720575,6 12,6 C8.02794253,6 5.03505566,8.15558794 3.19052368,12 C5.03505566,15.8444121 8.02794253,18 12,18 Z M1,12 C2.903,7.43896104 6.5,4 12,4 C17.5,4 21.097,7.43896104 23,12 C21.097,16.561039 17.5,20 12,20 C6.5,20 2.903,16.561039 1,12 Z M10,12 C10,10.8912362 10.8912362,10 12,10 C13.1087638,10 14,10.8912362 14,12 C14,13.1087638 13.1087638,14 12,14 C10.8912362,14 10,13.1087638 10,12 Z M8,12 C8,14.2133333 9.78666667,16 12,16 C14.2133333,16 16,14.2133333 16,12 C16,9.78666667 14.2133333,8 12,8 C9.78666667,8 8,9.78666667 8,12 Z"
                />
              </svg>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ae c0 ds dt du w-10 h-10 p-2 rounded-full bg-white shadow-xl border-2 hover:scale-125 duration-500"
              >
                <path
                  fill="#F7AF22"
                  fill-rule="evenodd"
                  d="M19.2928932,9.29289322 L9.29289322,19.2928932 C9.10535684,19.4804296 8.85100293,19.5857864 8.58578644,19.5857864 L5,19.5857864 C4.44771525,19.5857864 4,19.1380712 4,18.5857864 L4,15 C4,14.7347835 4.10535684,14.4804296 4.29289322,14.2928932 L14.2928932,4.29289322 C14.6834175,3.90236893 15.3165825,3.90236893 15.7071068,4.29289322 L19.2928932,7.87867966 C19.6834175,8.26920395 19.6834175,8.90236893 19.2928932,9.29289322 Z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ae c0 ds dt du w-10 h-10 p-2 rounded-full bg-white shadow-xl border-2 hover:scale-125 duration-500"
              >
                <path
                  fill="#36AB80"
                  fill-rule="evenodd"
                  d="M16.663227,13.835664 C17.0537513,13.4451398 17.6869163,13.4451398 18.0774406,13.835664 C18.4679649,14.2261883 18.4679649,14.8593533 18.0774406,15.2498776 L13.7764086,19.5509096 C11.5399199,21.7873983 7.91385523,21.7873983 5.67736653,19.5509096 C3.44087782,17.3144209 3.44087782,13.6883563 5.67736653,11.4518676 L12.9133587,4.21587538 C14.534526,2.59470819 17.1629574,2.59470821 18.7841246,4.21587543 C20.4052918,5.83704264 20.4052918,8.46547402 18.78374,10.0870257 L11.5402586,17.3226335 C10.5344129,18.3284792 8.90361468,18.3284792 7.89776892,17.3226335 C6.89192316,16.3167877 6.89192316,14.6859895 7.89818572,13.6797272 L12.2528571,9.330185 C12.6436114,8.9398909 13.2767763,8.94026401 13.6670704,9.33101836 C14.0573645,9.72177271 14.0569914,10.3549376 13.666237,10.7452317 C11.9727537,12.4367203 11.9727537,12.4367203 9.31198248,15.0943573 C9.0871853,15.3191545 9.0871853,15.6836227 9.31198248,15.9084199 C9.53677966,16.1332171 9.9012479,16.1332171 10.1264297,15.9080355 L17.369911,8.67242772 C18.2100297,7.83230907 18.2100297,6.47020763 17.369911,5.63008899 C16.5297924,4.78997035 15.1676909,4.78997034 14.3275723,5.63008895 L7.09158009,12.8660812 C5.63613997,14.3215213 5.63613997,16.6812559 7.09158009,18.1366961 C8.54702021,19.5921362 10.9067549,19.5921362 12.362195,18.1366961 L16.663227,13.835664 Z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ae c0 ds dt du w-10 h-10 p-2 rounded-full bg-white shadow-xl border-2 hover:scale-125 duration-500"
              >
                <path
                  fill="#F4541D"
                  d="M17.8436076,12.841119 L8.54075759,18.8215226 C8.07618755,19.1201747 7.4574737,18.9856717 7.15882152,18.5211017 C7.05513038,18.3598044 7,18.1720957 7,17.9803441 L7,6.01953696 C7,5.46725221 7.44771525,5.01953696 8,5.01953696 C8.19175162,5.01953696 8.37946026,5.07466734 8.54075759,5.17835848 L17.8436076,11.1587621 C18.3081776,11.4574142 18.4426806,12.0761281 18.1440285,12.5406981 C18.0665625,12.6612008 17.9641102,12.763653 17.8436076,12.841119 Z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="ae c0 ds dt du w-10 h-10 p-2 rounded-full bg-white shadow-xl border-2 hover:scale-125 duration-500"
              >
                <path
                  fill="#0284FE"
                  fill-rule="evenodd"
                  d="M11,12.5857864 L11,3 C11,2.44771525 11.4477153,2 12,2 C12.5522847,2 13,2.44771525 13,3 L13,12.5857864 L16.2928932,9.29289322 C16.6834175,8.90236893 17.3165825,8.90236893 17.7071068,9.29289322 C18.0976311,9.68341751 18.0976311,10.3165825 17.7071068,10.7071068 L12.7071068,15.7071068 C12.3165825,16.0976311 11.6834175,16.0976311 11.2928932,15.7071068 L6.29289322,10.7071068 C5.90236893,10.3165825 5.90236893,9.68341751 6.29289322,9.29289322 C6.68341751,8.90236893 7.31658249,8.90236893 7.70710678,9.29289322 L11,12.5857864 Z M20,16 C20,15.4477153 20.4477153,15 21,15 C21.5522847,15 22,15.4477153 22,16 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L4.5,22 C3.11928813,22 2,20.8807119 2,19.5 L2,16 C2,15.4477153 2.44771525,15 3,15 C3.55228475,15 4,15.4477153 4,16 L4,19.5 C4,19.7761424 4.22385763,20 4.5,20 L19.5,20 C19.7761424,20 20,19.7761424 20,19.5 L20,16 Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col mx-auto gap-2 shadow-lg w-full bg-white  py-6 rounded-lg">
            <img
              src="/assets/avatar.png"
              alt="meafan fisher"
              className="m-auto rounded-full p-4"
            />

            <h2 className="text-xl font-semibold text-center">Meagan Fisher</h2>
            <p className="text-sm text-gray-500 text-center">
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
        </div>
        <div className="">2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default CardOne;
