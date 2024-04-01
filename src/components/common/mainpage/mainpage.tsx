import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "@material-tailwind/react";
import "./mainpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faArrowRight,
  faUser,
  faMagnifyingGlass,
  faCartShopping
  
} from "@fortawesome/free-solid-svg-icons";

import {

  faHeart,
  
  } from "@fortawesome/free-regular-svg-icons";

import youtubeLogo from "../../../assets/images/youtubeLogo.svg";
import smallYoutubeLogo from "../../../assets/images/smallLogoYoutube.svg";
import facebookLogo from "../../../assets/images/LogoFB.svg";
import smallFacebookLogo from "../../../assets/images/smallLogoFB.svg";
import instagramLogo from "../../../assets/images/instagramLogo.svg";
import mobileThumbnel from "../../../assets/images/Mobile.svg";
import motorBikeThumbnel from "../../../assets/images/DeliveryThumbnel.svg";
import pizza from "../../../assets/images/pizza.jpg";
import bread from "../../../assets/images/bread.jpg";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <div className="w-full h-full bg-[#F2EBE6] px-0 md:px-12">
      {/* Carousel introduce */}
      <Carousel
        loop
        autoplay
        transition={{ duration: 1 }}
        className=" w-full  h-[520px]"
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
        <div className="w-full h-1/4 bg-[#683A2F]">
          <div className="flex justify-around items-center p-4">
            {/* Item Youtube  */}
            <div className="flex">
              {/* Logo brand */}
              <div
                className="flex justify-center items-center bg-white h-32 w-32 rounded-xl shadow-lg
                "
              >
                <img src={youtubeLogo} alt="" className="w-2/3 h-2/3" />
              </div>

              {/* Content */}

              <div className="ml-5 flex flex-col py-4">
                <p className="font-bold text-xl text-white">YOUTUBE</p>
                <div className="bg-white w-full h-6 rounded-md flex items-center justify-center p-2 mt-2">
                  <img
                    src={smallYoutubeLogo}
                    alt="Logo youtube"
                    className="w-5 h-5"
                  />
                  <p className="font-bold text-md ml-1">Click here!</p>
                </div>
              </div>
            </div>

            {/* Item Facebook */}
            <div className="flex">
              {/* Logo brand */}
              <div
                className="flex justify-center items-center bg-white h-32 w-32 rounded-xl shadow-lg
                "
              >
                <img
                  src={facebookLogo}
                  alt=""
                  className="rounded-xl w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="ml-5 flex flex-col py-4">
                <p className="font-bold text-xl text-white">FACEBOOK</p>
                <div className="bg-white w-full h-6 rounded-md flex items-center justify-center p-2 mt-2">
                  {/* <img
                    src={smallFacebookLogo}
                    alt="Logo youtube"
                    className="w-5 h-5 rounded-sm"
                  /> */}
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="w-5 h-5 rounded-sm"
                  />
                  <p className="font-bold text-md ml-1">Click here!</p>
                </div>
              </div>
            </div>

            {/* Item Instagram */}
            <div className="flex">
              {/* Logo Brand */}
              <div
                className="flex justify-center items-center bg-white h-32 w-32 rounded-xl shadow-lg
                "
              >
                <img src={instagramLogo} alt="" className="w-2/3 h-2/3" />
              </div>

              {/* Content */}
              <div className="ml-5 flex flex-col py-4">
                <p className="font-bold text-xl text-white">INSTAGRAM</p>
                <div className="bg-white w-full h-6 rounded-md flex items-center justify-center p-2 mt-2">
                  <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                  <p className="font-bold text-md ml-1">Click here!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="w-full h-3/4 flex ">
          {/* Left content */}
          <div className="w-1/2 h-full bg-[#C7A186] flex justify-around items-start">
            <div className="w-1/2 py-12 ml-12 flex justify-center flex-col">
              <h1 className="font-bold text-4xl text-white ">
                MR.PIE APP MOBILE
              </h1>
              <p className="font-bold text-2xl text-white mt-4">
                Dễ dàng sử dụng thân thiện với người dùng
              </p>

              <span className="flex justify-center items-center rounded-full bg-white w-12 h-12 mt-2">
                <FontAwesomeIcon size="xl" icon={faArrowRight} />
              </span>
            </div>
            <div className="w-1/2 h-[90%] flex justify-center items-center">
              <img src={mobileThumbnel} alt="" className="w-full h-[90%]" />
            </div>
          </div>
          {/* Right content */}
          <div className="  relative z-0  w-1/2 h-full bg-[#B08972] flex flex-col justify-end items-end">
            <div className=" h-[95%] w-full flex flex-col items-end justify-end">
              <img src={motorBikeThumbnel} alt="" className="w-full h-full" />
            </div>
            <div className="absolute z-50 top-10 left-10">
              <span className=" text-white text-3xl font-bold ">
                {" "}
                Giao hàng nhanh chóng <br /> tiết kiệm chi phí
              </span>
              <span className="flex justify-center items-center rounded-full bg-white w-12 h-12 mt-4">
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
          <h3 className="text-3xl font-bold text-black">Sản phẩm bán chạy</h3>
          <span className="bg-black w-32 h-1 block mt-2"></span>
        </div>

        {/* List Product */}
        <div className="w-full h-full flex justify-center items-center py-12">
          <div className="container grid w-full h-full p-8">
            <div className="item ">
              <div className="relative z-0 w-full">
                <img src={pizza} className="item_img rounded-xl group group-hover:opacity-10" />
                <div className="absolute flex flex-row justify-around icon_center w-full group-hover:opacity-10">
                  <Link to="/detail">
                    <span className="flex justify-center items-center rounded-full bg-black hover:bg-[#E96161] w-8 h-8  ">
                      <FontAwesomeIcon size="xl" style={{color:"#FFFFFF"}} icon={faMagnifyingGlass} />
                    </span>
                  </Link>
                  <Link to="/detail">
                    <span className="flex justify-center items-center rounded-full hover:bg-[#E96161] bg-black w-8 h-8 ">
                      <FontAwesomeIcon size="xl" style={{color:"#FFFFFF"}} icon={faHeart} />
                    </span>
                  </Link>
                  <Link to="/checkout">
                    <span className="flex justify-center items-center rounded-full hover:bg-[#E96161] bg-black w-8 h-8 ">
                      <FontAwesomeIcon size="lg" style={{color:"#FFFFFF"}} icon={faCartShopping} />
                    </span>
                  </Link>
                </div>
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
              <img src={bread} className="item_img rounded-xl " />
              <p className="font-bold text-xl text-center text-black mt-1">
                Mr.Pie Bread
              </p>
              <p className="font-medium text-md text-center text-black mt-1">
                42.000 - 45.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
