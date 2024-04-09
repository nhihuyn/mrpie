import React from "react";
import "./introduction.css";
import {
  breads,
  cookie,
  food,
  breakfast,
  baker,
  barley,
} from "../../../assets/images";

const Introduction = () => {
  return (
    // Header Title
    <div className=" w-full bg-[#F2EBE6]">
      <div className="w-full h-[320px] bg-[#D64B22] flex flex-col justify-center items-center">
        <h1 className="font-AlfaSlabOne text-6xl text-center  text-[#FF6E42] ">
          MR.PIE
        </h1>
        <h3 className="font-Yellowtail text-2xl text-center text-[#FAAA6F] mt-2">
          Historical of Mr.Pie
        </h3>
        <p className="font-JosefinSans text-xl text-center text-white mt-6">
          History of the world-famous Crystal Diner, <br />
          who introduced a secret sauce that changed the world
        </p>
      </div>

      {/* Event timeline */}
      <div className="w-full h-full p-8">
        <div className="w-full h-full relative antialiased text-sm font-semibold">
          {/* vertical bar */}
          <div className="hidden sm:block w-2 bg-[#62A1D1] absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {/* Event 1 */}
          <div className="mt-6 sm:mt-0 sm:mb-24">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-2/3 mx-auto items-center">
                {/* Left card content */}
                <div className="w-full sm:w-1/2 sm:pr-8 sm:pt-12">
                  <div className="relative w-96 h-56 transform translate-y-2">
                    {/* Card text */}
                    <div className="absolute w-96 h-56 bg-[#F2C17C] z-30 rounded-md font-JosefinSans pl-20 pr-4 py-6 ">
                      <p className="text-xl text-white">The secret sauce</p>
                      <p className="text-md text-black mt-4 leading-6">
                        John Smith and his wife came up with a secret sauce and
                        decided to sell fried chicken along with their secret
                        sauce to their friends and family.
                      </p>
                    </div>

                    {/* Card image */}
                    <img
                      src={breads}
                      alt="Breads image"
                      className="absolute z-40 size-52 top-0 left-0 -translate-x-28 -translate-y-28"
                    />

                    {/* Shape triangle */}
                    <div className="absolute size-40 bg-[#F2C17C] -right-[76px] top-8 rotate-45 -z-1 rounded-b-md rounded-t-md rounded-l-md rounded-r-md"></div>
                  </div>
                </div>

                {/* Right image content */}
                <div className="w-1/2 h-full sm:pl-8 sm:pt-12">
                  <img
                    src={breakfast}
                    alt="breakfast image"
                    className="rounded-xl shadow-lg w-full "
                  />
                </div>
              </div>

              {/* Icon on vertical bar */}
              <div className="rounded-full bg-[#F58847] border-[#F2EBE6] border-4 size-12 absolute left-1/2 -translate-y-4 sm:translate-y-8 transform -translate-x-1/2 flex items-center justify-center"></div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="mt-6 sm:mt-0 sm:mb-24">
            <div className="flex flex-col sm:flex-row items-center">
              <div
                className="flex justify-e
              nd w-2/3 mx-auto items-center"
              >
                {/* Left image content */}
                <div className="w-1/2 h-full sm:pr-8 sm:pt-12">
                  <img
                    src={cookie}
                    alt="cookie image"
                    className="w-full rotate-12"
                  />
                </div>

                {/* Right card content */}

                <div className="w-full sm:w-1/2 sm:pl-40 sm:pt-12 ">
                  <div className="relative w-96 h-56 transform translate-y-2">
                    {/* Card text */}
                    <div className="absolute w-96 h-56 bg-[#80B5F9] z-30 rounded-md font-JosefinSans pr-20 pl-4 py-6 ">
                      <p className="text-xl text-white">CRYSTAL DINNER</p>
                      <p className="text-md text-black mt-4 leading-6">
                        The legend of the secret sauce grew far and wide, after
                        which John and his wife, Sarah, started a fried chicken
                        joint by the name of Crystal Diner.
                      </p>
                    </div>

                    {/* Card image */}
                    <img
                      src={food}
                      alt="Breads image"
                      className="absolute z-40 size-40 rounded-xl shadow-lg top-0 left-0 translate-x-64 -translate-y-24"
                    />

                    {/* Shape triangle */}
                    <div className="absolute size-40 bg-[#80B5F9] -left-[76px] top-8 rotate-45 -z-1 rounded-b-md rounded-t-md rounded-l-md rounded-r-md"></div>
                  </div>
                </div>
              </div>

              {/* Icon on vertical bar */}
              <div className="rounded-full bg-[#F58847] border-[#F2EBE6] border-4 size-12 absolute left-1/2 -translate-y-4 sm:translate-y-8 transform -translate-x-1/2 flex items-center justify-center"></div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="mt-6 sm:mt-0 sm:mb-24">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-2/3 mx-auto items-center overflow-hidden">
                {/* Left card content */}
                <div className="w-full sm:w-1/2 sm:pr-8 sm:pt-12 ">
                  <div className="relative w-96 h-56 transform translate-y-2  ">
                    {/* Card text */}
                    <div className="absolute w-96 h-56 bg-[#F2C17C] z-30 rounded-md font-JosefinSans pl-20 pr-4 py-6  ">
                      <p className="text-xl text-white">The secret sauce</p>
                      <p className="text-md text-black mt-4 leading-6">
                        John Smith and his wife came up with a secret sauce and
                        decided to sell fried chicken along with their secret
                        sauce to their friends and family.
                      </p>
                    </div>

                    {/* Card image */}

                    <img
                      src={barley}
                      alt="Breads image"
                      className="absolute z-40 size-56 top-0 left-0 -translate-x-36   rounded-full shadow-lg"
                    />

                    {/* Shape triangle */}
                    <div className="absolute size-40 bg-[#F2C17C] -right-[76px] top-8 rotate-45 -z-1 rounded-b-md rounded-t-md rounded-l-md rounded-r-md"></div>
                  </div>
                </div>

                {/* Right image content */}
                <div className="w-1/2 h-full sm:pl-12 sm:pt-12">
                  <img src={baker} alt="baker image" className=" w-full " />
                </div>
              </div>

              {/* Icon on vertical bar */}
              <div className="rounded-full bg-[#F58847] border-[#F2EBE6] border-4 size-12 absolute left-1/2 -translate-y-4 sm:translate-y-8 transform -translate-x-1/2 flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
