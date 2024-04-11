import React from "react";
import { Link } from "react-router-dom";


import SizeButton from "./side-button";
import { renderStarFromNumber,formatPrice,formatMoney } from "../../../utils/helpers";
import Item from "../detail-product/item/Item";


import { useTranslation } from "react-i18next";

interface BreadCardProps {
  data: {
    id: string;
    key: number;
    title: string;
    ratings: number;
    price: string;
    bestPrice: string;
    description: string;
    size?: string;
    img: string;
    time: string;
    eventTitle: string;
  }[];
}

const BreadCard: React.FC<BreadCardProps> = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      {data.map((el, index) => (
        <div
          key={index}
          className="flex items-center ml-8 mb-14 mt-14 md:flex-row flex-col"
        >
          <div className="w-80 h-80   md:mr-0  ">
            <Item item={el} width={350} height={350} isShow={true} />
          </div>
          {/**product card */}
          <div className="md:gap-4  md:ml-[80px] ml-2 md:w-auto w-80 mt-4   flex justify-start flex-col ">
            {/**product title */}
            <span className="font-bold md:text-3xl text-2xl ">{el.title}</span>
            {/**product ratings */}
            <span className="flex text-xl mt-2 mb-2">
              {renderStarFromNumber(el.ratings, 24)}
            </span>
            {/**product price */}
            <span className="text-xl flex font-semibold">
              {`${formatMoney(formatPrice(el.price))} `}
            </span>
            {/**product description */}
            <div className="mt-3 text-lg">
              <span>{el.description}</span>
            </div>
            {/**Button to choose size*/}
            <div className="md:mt-4 mt-2 w-40">
              <SizeButton datetime={el.time} />
            </div>
            <div className="mt-4 md:flex gap-4 items-center ">
              {/**Button Add to cart */}
              <div className="md:block ">
                <Link to="/cart">
                  <button
                    className="
                      text-white 
                      flex 
                      items-center 
                      justify-center
                      font-semibold
                      px-4 py-3 
                      rounded-3xl
                      relative overflow-hidden 
                    bg-[#FF4D4F] 
                      shadow-lg 
                      transition-all 
                      before:absolute 
                      before:bottom-0 
                      before:left-0 
                      before:top-0 
                      before:z-0 
                      before:h-full 
                      before:w-0
                    before:bg-red-500 
                      before:transition-all 
                      before:duration-500 
                    hover:text-white 
                    hover:shadow-red-400 
                      hover:before:left-0 
                      hover:before:w-full
                      text-lg"
                  >
                    <span className="relative">{t("Thêm giỏ hàng")}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BreadCard;