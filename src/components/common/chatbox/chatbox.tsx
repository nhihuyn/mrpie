import React, { useState, useRef } from "react";
import {
  robot,
  zaloLogo,
  bakeryShop,
  send,
  menu,
} from "../../../assets/images";

const Chatbox = () => {
  const [isOpenChatbox, setIsOpenChatbox] = useState(false);

  const openChatbox = () =>{
    setIsOpenChatbox(!isOpenChatbox);
  }
  return (
    <>
      <div className="fixed  top-12 md:top-1/2 right-0 p-1 md:transform md:-translate-y-1/2 flex flex-col justify-end items-end">
        <div className="size-10 md:size-12 ring-4 ring-light-blue-700 bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer">
          <img src={zaloLogo} className="size-7 md:size-8" />
        </div>

        <div className="relative  mt-4 size-10 md:size-12 ring-4 ring-red-700 bg-white rounded-full flex justify-center items-center shadow-lg cursor-pointer" onClick={openChatbox}>
          <img src={robot} className="size-7 md:size-8" />
        </div>
        {isOpenChatbox && (<div className="sticky top-0 mt-2 mr-6">
          <div className=" w-72 md:w-80 h-80 md:h-96 bg-white rounded-xl">
            {/* Header chatbox */}
            <div className="w-full h-1/6 bg-white flex justify-start items-center rounded-xl">
              <div className="flex justify-center items-center size-9 md:size-11  rounded-lg ml-6">
                <img
                  src={bakeryShop}
                  alt=""
                  className="  size-9 md:size-11 shadow-lg rounded-md"
                />
              </div>

              <div className="flex flex-col ml-6">
                <h2 className="font-semibold text-base text-black">
                  Legend - Restaurant
                </h2>
                <p className="font-medium text-sm text-gray-500">
                  Food and entertainment
                </p>
              </div>
            </div>

            {/* Content chatbox */}
            <div className="w-full h-4/6 bg-[#F4F4F4]  px-4">
              {/* Shop Contact */}
              <div className="w-full  flex justify-start  ">
                <div className="w-2/3  bg-[#ECEAEA] rounded-xl p-4 mt-4 ">
                  <p className="font-medium">
                    Hi! Thanks for reaching out. What can i get for you ?
                  </p>
                </div>
              </div>

              {/* User Contact */}
              <div className="w-full  flex justify-end mt-4">
                <div className="w-2/3  flex justify-end bg-[#ECEAEA] rounded-xl p-4">
                  <p className="font-medium">
                    What's event comming soon on Mr.Pie app?
                  </p>
                </div>
              </div>
            </div>

            {/* Footer chatbox */}
            <div className="w-full h-1/6 bg-white rounded-xl px-2 flex justify-center items-center">
              <input
                type="text"
                className="w-3/4 focus:outline-none mx-2 text-md font-normal"
                placeholder="Type your message..."
                maxLength={516}
                multiple
              />
              <div className="p-2 md:p-4 flex w-1/4 ">
                <img src={menu} alt="Menu icon" className="size-6 " />
                <img src={send} alt="Send icon" className="ml-2  size-6" />
              </div>
            </div>
          </div>
        </div>)}
        
      </div>
    </>
  );
};

export default Chatbox;
