import React, { useEffect } from "react";
import "./introduction.css";
import {breads,cookie,food,breakfast,baker,stawberry,cupcake,chefHat,cake,teaBreak,} from "../../../assets/images";

const Introduction = () => {

  // Logic for make scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } 
      });
    }, { threshold: 0 }); // Set the threshold to 0

    const hiddenElementsLeft = document.querySelectorAll(".hiddenItemLeft");
    const hiddenElementsRight = document.querySelectorAll(".hiddenItemRight");
    hiddenElementsLeft.forEach((el) => observer.observe(el));
    hiddenElementsRight.forEach((el)=> observer.observe(el));
    // Cleanup function
    return () => {
      hiddenElementsLeft.forEach((el) => observer.unobserve(el));
      hiddenElementsRight.forEach((el)=> observer.unobserve(el));
    };
  }, []);
  
  

  return (
    

    // Heade Title
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
          <div className="block w-2 bg-[#62A1D1] absolute h-full left-0 md:left-1/2 transform -translate-x-1/2"></div>

          {/* Event 1 */}
          <div className="mt-6 sm:mt-0 mb-32 ">
            <div className=" flex flex-row md:flex-row items-center">
              <div className=" flex flex-col md:flex-row  w-full md:mx-auto md:items-center ">
                {/* Left card content */}
                <div className="hiddenItemLeft w-full md:w-1/2 pt-12  flex justify-center md:justify-start xl:justify-center  ">
                  <div className="relative  w-48 h-44  xl:w-72 xl:h-44 2xl:w-80 2xl:h-56 transform translate-y-2">
                    {/* Card text */}
                    <div className="absolute w-72 h-44  2xl:w-80 2xl:h-56  bg-[#F2C17C] z-30 rounded-md font-JosefinSans  pr-4  py-6 ">
                      <p className="text-lg  text-white text-center">
                        The secret sauce
                      </p>
                      <p className="text-md text-black  mt-2 leading-6 p-2 text-center ">
                        John Smith and his wife came up with a secret sauce and
                        decided to sell fried chicken along with their secret
                        sauce to their friends and family.
                      </p>
                    </div>

                    {/* Card image */}
                    <img
                      src={breads}
                      alt="Breads"

                      className="absolute z-40 size-32 xl:size-40 2xl:size-52 top-0 left-0 2xl:-translate-y-28 2xl:-translate-x-28  xl:-translate-x-20 xl:-translate-y-20 -translate-x-12 -translate-y-16"

                    />

                    {/* Shape triangle */}
                    <div className="absolute  size-0 lg:size-32 2xl:size-40 bg-[#F2C17C] -right-[154px]  xl:-right-[63px]  top-6 xl:top-6 2xl:-right-[76px] 2xl:top-8 rotate-45 -z-1 rounded-b-md rounded-t-md rounded-l-md rounded-r-md"></div>
                  </div>
                </div>

                {/* Right image content */}
                <div className="hiddenItemRight w-full md:w-1/2 h-full  flex justify-start pt-4 md:pt-12 pl-6 md:pl-12">
                  <img
                    src={breakfast}
                    alt="breakfast"

                    className="rounded-xl shadow-lg  w-72 h-44 md:w-full md:h-full xl:w-3/4 xl:h-3/4 "

                  />
                </div>
              </div>

              {/* Icon on vertical bar */}
              <div className="rounded-full bg-[#F58847] border-[#F2EBE6] border-4 size-8 md:size-12 absolute left-0 md:left-1/2 -translate-y-4 sm:translate-y-8 transform  -translate-x-1/2 flex items-center justify-center"></div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="hiddenItem mt-6 sm:mt-0 mb-32">
            <div className="flex flex-row md:flex-row items-center">
              <div className="flex flex-col-reverse md:flex-row  w-full md:mx-auto md:items-center">
                {/* Left image content */}
                <div className="hiddenItemLeft w-1/2 flex justify-center h-full pl-6 pt-6 md:pr-8 md:pt-12">
                  <img
                    src={cookie}
                    alt="cookie"

                    className=" w-96 h-44 md:w-full md:h-full xl:w-3/4 xl:h-3/4 rotate-12"

                  />
                </div>

                {/* Right card content */}
                <div className="hiddenItemRight w-fulll  md:w-1/2 pt-2 md:pt-12  flex justify-center md:justify-center xl:justify-center  ">
                  <div className="relative  w-48 h-44  xl:w-72 xl:h-44 2xl:w-80 2xl:h-56 transform translate-y-2">
                    {/* Card text */}
                    <div className="absolute w-72 h-44  2xl:w-80 2xl:h-56  bg-[#F2C17C] z-30 rounded-md font-JosefinSans  pr-4  py-6 ">
                      <p className="text-lg  text-white text-center">
                        The secret sauce
                      </p>
                      <p className="text-md text-black  mt-2 leading-6 p-2 text-center ">
                        John Smith and his wife came up with a secret sauce and
                        decided to sell fried chicken along with their secret
                        sauce to their friends and family.
                      </p>
                    </div>

                    {/* Card image */}
                    <img
                      src={food}

                      alt="Food"
                      className="absolute rounded-xl shadow-lg z-40 size-32 xl:size-40 2xl:size-52  left-0 top-0 translate-x-44 md:translate-x-40 xl:translate-x-48 2xl:translate-x-64  md:-translate-y-36 -translate-y-24"

                    />

                    {/* Shape triangle */}
                    <div className="absolute size-0 lg:size-32 2xl:size-40 bg-[#F2C17C] -left-[62px]  xl:-left-[62px]  top-6 xl:top-6 2xl:-left-[76px] 2xl:top-8 rotate-45 -z-1 rounded-b-md rounded-t-md rounded-l-md rounded-r-md"></div>
                  </div>
                </div>
              </div>

              {/* Icon on vertical bar */}
              <div className="rounded-full bg-[#F58847] border-[#F2EBE6] border-4 size-8 md:size-12 absolute left-0 md:left-1/2 -translate-y-4 sm:translate-y-8 transform  -translate-x-1/2 flex items-center justify-center"></div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="hiddenItem mt-6 sm:mt-0  mb-32">
            <div className="flex flex-row md:flex-row items-center">
              <div className="flex flex-col md:flex-row  w-full md:mx-auto md:items-center">
                {/* Left card content */}
                <div className="hiddenItemLeft w-full md:w-1/2 pt-12  flex justify-center md:justify-start xl:justify-center  ">
                  <div className="relative  w-48 h-44  xl:w-72 xl:h-44 2xl:w-80 2xl:h-56 transform translate-y-2">
                    {/* Card text */}
                    <div className="absolute w-72 h-44  2xl:w-80 2xl:h-56  bg-[#F2C17C] z-30 rounded-md font-JosefinSans  pr-4  py-6 ">
                      <p className="text-lg  text-white text-center">
                        The secret sauce
                      </p>
                      <p className="text-md text-black  mt-2 leading-6 p-2 text-center ">
                        John Smith and his wife came up with a secret sauce and
                        decided to sell fried chicken along with their secret
                        sauce to their friends and family.
                      </p>
                    </div>

                    {/* card image */}
                    <img
                      src={chefHat}
                      alt="chefHat"
                      className="absolute z-40 size-32 xl:size-40 2xl:size-52 top-0 left-0 2xl:-translate-y-32 2xl:-translate-x-32  xl:-translate-x-20 xl:-translate-y-20 -translate-x-12 -translate-y-16"
                    />

                    {/* Shape triangle */}
                    <div className="absolute  size-0 lg:size-32 2xl:size-40 bg-[#F2C17C] -right-[154px]  xl:-right-[63px]  top-6 xl:top-6 2xl:-right-[76px] 2xl:top-8 rotate-45 -z-1 rounded-b-md rounded-t-md rounded-l-md rounded-r-md"></div>
                  </div>
                </div>

                {/* Right image content */}
                <div className="hiddenItemRight w-full md:w-1/2 h-full  flex justify-start pt-4 md:pt-12 pl-6 md:pl-12">
                  <img
                    src={baker}
                    alt="baker"
                    className="  w-72 h-44 md:w-full md:h-full xl:w-3/4 xl:h-3/4 "
                  />
                </div>
              </div>

              {/* Icon on vertical bar */}
              <div className="rounded-full bg-[#F58847] border-[#F2EBE6] border-4 size-8 md:size-12 absolute left-0 md:left-1/2 -translate-y-4 sm:translate-y-8 transform  -translate-x-1/2 flex items-center justify-center"></div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="hiddenItem mt-6 sm:mt-0 mb-28">
            <div className="flex flex-row md:flex-row items-center">
              <div className="flex flex-col-reverse md:flex-row  w-full md:mx-auto md:items-center">
                {/* Left image content */}
                <div className="hiddenItemLeft w-1/2 flex justify-center h-full pl-6 pt-6 md:pr-8 md:pt-12">
                  <img
                    src={teaBreak}
                    alt="teaBreak"
                    className="rounded-xl shadow-lg w-96 h-44 md:w-full md:h-full xl:w-3/4 xl:h-3/4 rotate-12"
                  />
                </div>

                {/* Right card content */}
                <div className="hiddenItemRight w-fulll  md:w-1/2 pt-2 md:pt-12  flex justify-center md:justify-center xl:justify-center  ">
                  <div className="relative  w-48 h-44  xl:w-72 xl:h-44 2xl:w-80 2xl:h-56 transform translate-y-2">
                    {/* Card text */}
                    <div className="absolute w-72 h-44  2xl:w-80 2xl:h-56  bg-[#F2C17C] z-30 rounded-md font-JosefinSans  pr-4  py-6 ">
                      <p className="text-lg  text-white text-center">
                        The secret sauce
                      </p>
                      <p className="text-md text-black  mt-2 leading-6 p-2 text-center ">
                        John Smith and his wife came up with a secret sauce and
                        decided to sell fried chicken along with their secret
                        sauce to their friends and family.
                      </p>
                    </div>

                    {/* Card image */}
                    <img
                      src={cupcake}
                      alt="Cupcake"
                      className="absolute z-40 size-32 xl:size-40 2xl:size-52  left-0 top-0 translate-x-44 md:translate-x-40 xl:translate-x-48 2xl:translate-x-60  md:-translate-y-36 -translate-y-24"
                    />

                    {/* Shape triangle */}
                    <div className="absolute size-0 lg:size-32 2xl:size-40 bg-[#F2C17C] -left-[62px]  xl:-left-[62px]  top-6 xl:top-6 2xl:-left-[76px] 2xl:top-8 rotate-45 -z-1 rounded-b-md rounded-t-md rounded-l-md rounded-r-md"></div>
                  </div>
                </div>
              </div>

              {/* Icon on vertical bar */}
              <div className="rounded-full bg-[#F58847] border-[#F2EBE6] border-4 size-8 md:size-12 absolute left-0 md:left-1/2 -translate-y-4 sm:translate-y-8 transform  -translate-x-1/2 flex items-center justify-center"></div>
            </div>
          </div>

          {/* Event 5 */}
          <div className="hiddenItem mt-6 sm:mt-0  mb-12">
            <div className="flex flex-row md:flex-row items-center">
              <div className="flex flex-col md:flex-row  w-full md:mx-auto md:items-center">
                {/* Left card content */}
                <div className="hiddenItemLeft w-full md:w-1/2 pt-12  flex justify-center md:justify-start xl:justify-center  ">
                  <div className="relative  w-48 h-44  xl:w-72 xl:h-44 2xl:w-80 2xl:h-56 transform translate-y-2">
                    {/* Card text */}
                    <div className="absolute w-72 h-44  2xl:w-80 2xl:h-56  bg-[#F2C17C] z-30 rounded-md font-JosefinSans  pr-4  py-6 ">
                      <p className="text-lg  text-white text-center">
                        The secret sauce
                      </p>
                      <p className="text-md text-black  mt-2 leading-6 p-2 text-center ">
                        John Smith and his wife came up with a secret sauce and
                        decided to sell fried chicken along with their secret
                        sauce to their friends and family.
                      </p>
                    </div>

                    {/* Card image */}
                    <img

                      src={stawberry}
                      alt="strawberry"
                      className="absolute z-40 size-32 xl:size-40 2xl:size-52 top-0 left-0 2xl:translate-y-32 2xl:-translate-x-32  xl:-translate-x-20 xl:-translate-y-20 -translate-x-12 -translate-y-16"

                    />

                    {/* Shape triangle */}
                    <div className="absolute  size-0 lg:size-32 2xl:size-40 bg-[#F2C17C] -right-[154px]  xl:-right-[63px]  top-6 xl:top-6 2xl:-right-[76px] 2xl:top-8 rotate-45 -z-1 rounded-b-md rounded-t-md rounded-l-md rounded-r-md"></div>
                  </div>
                </div>

                {/* Right image content */}

                <div className="hiddenItemRight w-full md:w-1/2 h-full  flex justify-start pt-4 md:pt-12 pl-6 md:pl-12">
                  <img
                    src={cake}
                    alt="cake"
                    className="  w-72 h-72 md:w-full md:h-full xl:w-3/4 xl:h-3/4"
                  />
                </div>
              </div>

              {/* Icon on vertical bar */}
              <div className="rounded-full bg-[#F58847] border-[#F2EBE6] border-4 size-8 md:size-12 absolute left-0 md:left-1/2 -translate-y-4 sm:translate-y-8 transform  -translate-x-1/2 flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
