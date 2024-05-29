import React from "react";

const LoginCard = () => {
  return (
    <div className="flex flex-col mx-auto gap-10   w-full shadow-2xl rounded-lg py-10 sm:py-0">
      <div className="mt-10">
        <h1 className="text-2xl font-semibold text-center ">
          Login into your account
        </h1>
        <p className="text-gray-400 text-center text-[12px] m-auto mt-2">
          Don't have an account yet?{" "}
          <span className="text-sky-500 cursor-pointer mx-1">Create New</span>
        </p>
      </div>
      <div className="flex flex-col gap-6 w-[90%] mx-auto mt-8">
        <div className="flex ">
          <input
            type="email"
            placeholder="jogndoe@gmail.com"
            className="rounded-full p-2 w-full px-4 border-2 "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="ae c0 ds dt du bk fx fy fz w-6 h-6 ml-[-40px] m-auto"
          >
            <path
              fill="#A7AAB0"
              fill-rule="evenodd"
              d="M22.0001063,5.98448999 C22.0002481,5.99422236 22.0002479,6.00395091 22.0001063,6.01367238 L22.0001063,18.5 C22.0001063,19.3284271 21.3285334,20 20.5001063,20 L3.50010627,20 C2.67167915,20 2.00010627,19.3284271 2.00010627,18.5 L2.00010627,6.01367238 C1.99996468,6.00395091 1.99996447,5.99422236 2.00010627,5.98448999 L2.00010627,5.5 C2.00010627,4.67157288 2.67167915,4 3.50010627,4 L20.5001063,4 C21.3285334,4 22.0001063,4.67157288 22.0001063,5.5 L22.0001063,5.98448994 Z M4.80288191,6 L12.0001063,10.7981496 L19.1973306,6 L4.80288191,6 Z M20.0001063,7.86851709 L12.5548065,12.8320503 C12.2189071,13.0559832 11.7813055,13.0559832 11.4454061,12.8320503 L4.00010627,7.86851709 L4.00010627,18 L20.0001063,18 L20.0001063,7.86851709 Z"
            />
          </svg>
        </div>
        <div className="flex my-4">
          <input
            type="text"
            placeholder="Password"
            className="rounded-full p-2 w-full px-4 border-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="ae c0 ds dt du w-6 h-6 ml-[-40px] m-auto"
          >
            <path
              fill="#A7AAB0"
              fill-rule="evenodd"
              d="M12,18 C15.9720575,18 18.9649443,15.8444121 20.8094763,12 C18.9649443,8.15558794 15.9720575,6 12,6 C8.02794253,6 5.03505566,8.15558794 3.19052368,12 C5.03505566,15.8444121 8.02794253,18 12,18 Z M1,12 C2.903,7.43896104 6.5,4 12,4 C17.5,4 21.097,7.43896104 23,12 C21.097,16.561039 17.5,20 12,20 C6.5,20 2.903,16.561039 1,12 Z M10,12 C10,10.8912362 10.8912362,10 12,10 C13.1087638,10 14,10.8912362 14,12 C14,13.1087638 13.1087638,14 12,14 C10.8912362,14 10,13.1087638 10,12 Z M8,12 C8,14.2133333 9.78666667,16 12,16 C14.2133333,16 16,14.2133333 16,12 C16,9.78666667 14.2133333,8 12,8 C9.78666667,8 8,9.78666667 8,12 Z"
            />
          </svg>
        </div>
      </div>
          <div>
              <button className="text-sky-500 text-center w-[90%] p-2 bg-gray-300 rounded-full font-mono">Login</button>
      </div>
    </div>
  );
};

export default LoginCard;
