import React from "react";
import { useTranslation } from 'react-i18next';

import { Typography, Carousel, Button } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faArrowRight,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import {
  pizza,
  facebookLogo,
  instagramLogo,
  youtubeLogo,
  mobile,
  motorbike,
  smallYoutubeLogo,
} from "../../../assets/images/index.ts";

import Chatbox from "../chatbox/chatbox.tsx";
import Map from "./components/Map.tsx";
import DetailProduct from "../detail-product/detailProduct.tsx";

import "./mainpage.css";


const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const BEST_SELLER = [
  {
    key: 1,
    title: 'Pie Tao',
    price: '42.000',
    bestPrice: '45.000',
    img: pizza,
    description: 'Pie Tao',
    eventTitle: '30%'
  },
  {
    key: 2,
    title: 'Pie Tao',
    price: '42.000',
    bestPrice: '45.000',
    img: pizza,
    description: 'Pie Tao',
    eventTitle: '30%'
  },
  {
    key: 3,
    title: 'Pie Tao',
    price: '42.000',
    bestPrice: '45.000',
    img: pizza,
    description: 'Pie Tao',
    eventTitle: ''
  },
  {
    key: 4,
    title: 'Pie Tao',
    price: '42.000',
    bestPrice: '45.000',
    img: pizza,
    description: 'Pie Tao',
    eventTitle: '30%'
  }
]

const { Title } = Typography;

const Mainpage = () => {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const next = () => {
    carouselRef.next();
  };

  const prev = () => {
    carouselRef.prev();
  };

  let carouselRef;
  

  return (
    <div className="relative">
      {/* Mainpage content */}
      <div className="w-full h-50 bg-[#F2EBE6] px-0 lg:px-12">
        {/* Carousel introduce */}
        <Carousel afterChange={(e) => console.log(e)} {...settings} ref={ref => (carouselRef = ref)}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="banner 1"
              className="h-50 w-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="banner 2"
              className="h-50 w-full object-cover"
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="banner 3"
              className="h-50 w-full object-cover"
            />
          </div>
      </Carousel>
        <LeftOutlined onClick={prev} className="absolute text-white text-4xl top-[100px] sm:top-[380px]" />
        <RightOutlined onClick={next} className="absolute text-white text-4xl top-[100px] right-[10px] sm:top-[380px] sm:right-[50px]"  />
        
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
                <div className="flex justify-center items-center bg-white size-16 lg:size-28 rounded-xl shadow-lg">
                  <img src={youtubeLogo} alt="youtube" className="size-2/3" />
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
                <div className="flex justify-center items-center bg-white size-16 lg:size-28 rounded-xl shadow-lg"
                >
                  <img
                    src={facebookLogo}
                    alt="facebook logo"
                    className="rounded-xl w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className=" lg:ml-5 flex justify-center items-center flex-col py-2 lg:py-4">
                  <p className="font-bold text-md lg:text-xl text-white">
                    FACEBOOK
                  </p>
                  <div className="bg-white w-full h-6 rounded-md flex items-center justify-center p-2 mt-2">
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
                  <img src={instagramLogo} alt="instagram logo" className="w-2/3 h-2/3" />
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
                  {t('Easy to use and user friendly')}
                </p>

                <span className="flex justify-center items-center rounded-full bg-white size-8 lg:size-12 mt-2">
                  <FontAwesomeIcon size="xl" icon={faArrowRight} />
                </span>
              </div>

              <div className="w-full md:w-1/2 h-1/2 sm:h-2/3 md:h-full flex justify-center items-center">
                <img
                  src={mobile}
                  alt="mobile"
                  className="min-w-28 w-1/2 md:w-[90%] h-[90%]"
                />
              </div>
            </div>
            {/* Right content */}
            <div className="  relative z-0  w-1/2 h-full bg-[#B08972] flex flex-col justify-end items-end">
              <div className="  h-full w-full flex flex-col items-center justify-end">
                <img src={motorbike} alt="motorbike" className="" />
              </div>
              <div className="absolute z-50 top-0 bottom-0 left-0 right-0 w-full md:w-1/2 h-2/3 md:h-full flex flex-col justify-start md:justify-center items-start ml-4 p-3 my-3 lg:my-0 lg:p-0">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white ">
                  {t('Fast delivery')}
                </h1>
                <p className="font-bold text-lg md:text-lg lg:text-2xl text-white mt-2 md:mt-4">
                  {t('Save costs and experience good service')}
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
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              {t('Selling products')}
            </h3>
            <span className="bg-black w-32 h-1 block mt-2"></span>
          </div>
          
           {/* List Product */}
          <DetailProduct data={BEST_SELLER}/>
         
          <div className="w-full h-full flex flex-col justify-center items-center py-6 md:py-12">

            {/* Find Shop */}
            <div className="bg-white w-full flex justify-center items-center flex-col p-8">
              <h2 className="font-bold text-2xl md:text-3xl text-black mt-4">
                {t('Search for nearby stores')}
              </h2>
              <p className="font-bold text-lg md:text-xl text-black mt-2">
                {t('Mr.Pie store is nearby!')}
              </p>
              <button className="mt-4 shadow bg-[#FF4D4F] hover:bg-[#ed8283] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded">
                {t('Search')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-96">
        <Map />
      </div>

      <Chatbox/>
    </div>
  );
};

export default Mainpage;
