import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "@material-tailwind/react";
import "./mainpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faArrowRight,
  faUser,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";

import {
  pizza,
  bread,
  facebookLogo,
  instagramLogo,
  youtubeLogo,
  Mobile,
  motorbike,
  smallYoutubeLogo,
  smallFacebookLogo,
} from "../../../assets/images/index.ts";
import Map from "./components/Map.tsx";
import { Link } from "react-router-dom";


const Mainpage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isIconShowUp, setIsIconShowUp] = useState(false);
  return (
    <>
      {/* Mainpage content */}
      <div className="w-full h-full bg-[#F2EBE6] px-0 lg:px-12">
        {/* Carousel introduce */}
        <Carousel
          loop
          autoplay
          transition={{ duration: 1 }}
          className="w-full h-[520px]"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          placeholder="image"
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>

        {/* Video introduce */}
        <iframe
          width={"100%"}
          height={"640px"}
          src="https://www.youtube.com/embed/bWsymhNkKXA?si=N2QrkgSgY3ICBHus"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Social introduce */}

        <div className="w-full h-[640px] bg-black">
          {/* Header */}
          <div className="w-full h-[30%]  bg-[#683A2F]">
            <div className="flex h-full justify-around items-center p-2 lg:p-4">
              {/* Item Youtube  */}
              <div className="flex flex-col justify-center items-center lg:flex-row ">
                {/* Logo brand */}
                <div
                  className="flex justify-center items-center bg-white size-16 lg:size-28 rounded-xl shadow-lg
                "
                >
                  <img src={youtubeLogo} alt="" className="size-2/3" />
                </div>

                {/* Content */}

                <div className=" lg:ml-5 flex justify-center items-center flex-col py-2 lg:py-4">
                  <p className="font-bold  text-md lg:text-xl text-white">
                    YOUTUBE
                  </p>
                  <div className="bg-white w-full h-6 rounded-md flex items-center justify-center p-2 mt-2">
                    <img
                      src={smallYoutubeLogo}
                      alt="Logo youtube"
                      className="size-3 lg:size-5"
                    />
                    <p className="font-bold text-md ml-1">Click here!</p>
                  </div>
                </div>
              </div>

              {/* Item Facebook */}
              <div className="flex flex-col justify-center items-center lg:flex-row">
                {/* Logo brand */}
                <div
                  className="flex justify-center items-center bg-white size-16 lg:size-28 rounded-xl shadow-lg
                "
                >
                  <img
                    src={facebookLogo}
                    alt=""
                    className="rounded-xl w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className=" lg:ml-5 flex justify-center items-center flex-col py-2 lg:py-4">
                  <p className="font-bold text-md lg:text-xl text-white">
                    FACEBOOK
                  </p>
                  <div className="bg-white w-full h-6 rounded-md flex items-center justify-center p-2 mt-2">
                    {/* <img
                    src={smallFacebookLogo}
                    alt="Logo youtube"
                    className="w-5 h-5 rounded-sm"
                  /> */}
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className="size-3 lg:size-5 rounded-sm"
                    />
                    <p className="font-bold text-md ml-1">Click here!</p>
                  </div>
                </div>
              </div>

              {/* Item Instagram */}
              <div className="flex flex-col justify-center items-center lg:flex-row">
                {/* Logo Brand */}
                <div
                  className="flex justify-center items-center bg-white size-16 lg:size-28 rounded-xl shadow-lg
                "
                >
                  <img src={instagramLogo} alt="" className="w-2/3 h-2/3" />
                </div>

                {/* Content */}
                <div className="lg:ml-5 flex justify-center items-center flex-col py-2 lg:py-4">
                  <p className="font-bold text-md lg:text-xl text-white">
                    INSTAGRAM
                  </p>
                  <div className="bg-white w-full h-6 rounded-md flex items-center justify-center p-2 mt-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="size-3 lg:size-5"
                    />
                    <p className="font-bold text-md ml-1">Click here!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="w-full h-[70%] flex ">
            {/* Left content */}
            <div className="w-1/2 h-full bg-[#C7A186] flex  flex-col md:flex-row  justify-around items-start">
              <div className="w-full md:w-1/2 h-1/2 sm:h-1/3 md:h-full ml-4 md:my-auto flex justify-center flex-col p-3 lg:p-0">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white ">
                  MR.PIE APP MOBILE
                </h1>
                <p className="font-bold text-lg md:text-lg lg:text-2xl text-white mt-2 md:mt-4">
                  Dễ dàng sử dụng thân thiện với người dùng
                </p>

                <span className="flex justify-center items-center rounded-full bg-white size-8 lg:size-12 mt-2">
                  <FontAwesomeIcon size="xl" icon={faArrowRight} />
                </span>
              </div>

              <div className="w-full md:w-1/2 h-1/2 sm:h-2/3 md:h-full flex justify-center items-center">
                <img
                  src={Mobile}
                  alt=""
                  className="min-w-28 w-1/2 md:w-[90%] h-[90%]"
                />
              </div>
            </div>
            {/* Right content */}
            <div className="  relative z-0  w-1/2 h-full bg-[#B08972] flex flex-col justify-end items-end">
              <div className=" h-full w-full flex flex-col  justify-end">
                <img src={motorbike} alt="" className="" />
              </div>
              <div className="absolute z-50 top-0 bottom-0 left-0 right-0 w-full md:w-1/2 h-2/3 md:h-full flex flex-col justify-start md:justify-center items-start ml-4 p-3 my-3 lg:my-0 lg:p-0">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white ">
                  Giao hàng nhanh chóng
                </h1>
                <p className="font-bold text-lg md:text-lg lg:text-2xl text-white mt-2 md:mt-4">
                  Tiết kiệm chi phí và trải nghiệm dịch vụ tốt
                </p>
                <span className="flex justify-center items-center rounded-full bg-white size-8 lg:size-12 mt-2">
                  <FontAwesomeIcon size="xl" icon={faArrowRight} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product introduce */}
        <div className="w-full py-12">
          {/* Heading Title */}
          <div className="flex justify-center items-center w-full flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-black">Sản phẩm bán chạy</h3>
            <span className="bg-black w-32 h-1 block mt-2"></span>
          </div>

          {/* List Product */}
          <div className="w-full h-full flex flex-col justify-center items-center py-6 md:py-12">
            {/* Products */}
            <div className="container grid grid-cols-2 md:grid-cols-4  grid-rows-4 md:grid-rows-2 gap-x-8 gap-y-7 w-full h-full p-8">
              <div
                className="item relative z-0"
                onMouseEnter={() => setIsIconShowUp(true)}
                onMouseLeave={() => setIsIconShowUp(false)}
              >
                <div className="w-full relative">
                  <img
                    src={pizza}
                    className={`parent_element item_img rounded-xl ${
                      isHovered ? "blur" : ""
                    }`}
                  />
                  {isIconShowUp && (
                    <div
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="absolute flex flex-row justify-around icon_center w-full"
                    >
                      <Link to="/detail">
                      <span className="flex justify-center items-center rounded-full bg-black w-8 h-8 p-1 hover:bg-[#E96161]">
                        <FontAwesomeIcon
                          size="xl"
                          style={{ color: "#FFFFFF" }}
                          icon={faMagnifyingGlass}
                        />
                      </span>
                      </Link>
                      
                      <Link to="/detail">
                      <span className="flex justify-center items-center rounded-full hover:bg-[#E96161] bg-black w-8 h-8">
                        <FontAwesomeIcon
                          size="xl"
                          style={{ color: "#FFFFFF" }}
                          icon={faHeart}
                        />
                      </span>
                      </Link>
                      
                      <Link to="/checkout">
                      <span className="flex justify-center items-center rounded-full hover:bg-[#E96161] bg-black w-8 h-8">
                        <FontAwesomeIcon
                          size="lg"
                          style={{ color: "#FFFFFF" }}
                          icon={faCartShopping}
                        />
                      </span>

                      </Link>
                      
                    </div>
                  )}
                </div>
                <p className="font-bold text-xl text-center text-black mt-1">
                  Mr.Pie Pizza
                </p>
                <p className="font-medium text-md text-center text-black mt-1">
                  42.000 - 45.000
                </p>
              </div>

              <div className="item">
                <img src={bread} className="item_img rounded-xl" />
                <p className="font-bold text-xl text-center text-black mt-1">
                  Mr.Pie Bread
                </p>
                <p className="font-medium text-md text-center text-black mt-1">
                  42.000 - 45.000
                </p>
              </div>

              <div className="item">
                <img src={pizza} className="item_img rounded-xl" />
                <p className="font-bold text-xl text-center text-black mt-1">
                  Mr.Pie Pizza
                </p>
                <p className="font-medium text-md text-center text-black mt-1">
                  42.000 - 45.000
                </p>
              </div>

              <div className="item">
                <img src={bread} className="item_img rounded-xl" />
                <p className="font-bold text-xl text-center text-black mt-1">
                  Mr.Pie Bread
                </p>
                <p className="font-medium text-md text-center text-black mt-1">
                  42.000 - 45.000
                </p>
              </div>

              <div className="item">
                <img src={pizza} className="item_img rounded-xl" />
                <p className="font-bold text-xl text-center text-black mt-1">
                  Mr.Pie Pizza
                </p>
                <p className="font-medium text-md text-center text-black mt-1">
                  42.000 - 45.000
                </p>
              </div>

              <div className="item">
                <img src={bread} className="item_img rounded-xl" />
                <p className="font-bold text-xl text-center text-black mt-1">
                  Mr.Pie Bread
                </p>
                <p className="font-medium text-md text-center text-black mt-1">
                  42.000 - 45.000
                </p>
              </div>

              <div className="item">
                <img src={pizza} className="item_img rounded-xl" />
                <p className="font-bold text-xl text-center text-black mt-1">
                  Mr.Pie Pizza
                </p>
                <p className="font-medium text-md text-center text-black mt-1">
                  42.000 - 45.000
                </p>
              </div>

              <div className="item">
                <img src={pizza} className="item_img rounded-xl" />
                <p className="font-bold text-xl text-center text-black mt-1">
                  Mr.Pie Pizza
                </p>
                <p className="font-medium text-md text-center text-black mt-1">
                  42.000 - 45.000
                </p>
              </div>
            </div>

            {/* Find Shop */}
            <div className="bg-white w-full flex justify-center items-center flex-col p-8">
              <h2 className="font-bold text-2xl md:text-3xl text-black mt-4">
                Tìm kiếm cửa hàng gần đây
              </h2>
              <p className="font-bold text-lg md:text-xl text-black mt-2">
                Cửa hàng Mr.Pie gần đây!
              </p>
              <button className="mt-4 shadow bg-[#FF4D4F] hover:bg-[#ed8283] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded">
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-96">
        <Map/>
      </div>
    </>
  );
};

export default Mainpage;
