import React from "react";
import SizeButton from "./SizeButton";
import {
  renderStarFromNumber,
  formatPrice,
  formatMoney,
} from "../../../utils/helpers";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
interface BreadCardProps {
  data: {
    id: string;
    title: string;
    Ratings: number;
    price: number;
    description: string[];
    size: string;
    images: string;
    time: string;
  }[];
}

const TagContent: React.FC<BreadCardProps> = ({ data }) => {
  return (
    <>
      {data.map((el, index) => (
        <div
          key={index}
          className="flex items-center ml-8 mb-14 mt-14 md:flex-row flex-col"
        >
          <div className="w-80 h-80 ml-2  md:mr-0  ">
            <img
              src={el.images}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:gap-4  md:ml-[80px] ml-2 md:w-auto w-80 mt-4   flex justify-start flex-col ">
            <span className="font-bold md:text-4xl text-2xl ">{el.title}</span>
            <span className="flex text-xl mt-2 mb-2">
              {renderStarFromNumber(el.Ratings, 24)}
            </span>
            <span className="text-xl flex font-semibold">
              {`${formatMoney(formatPrice(el.price))} `}
            </span>

            <div className="mt-3">
              <ul className="list-square text-sm text-gray-500">
                {el.description?.length > 1 &&
                  el?.description?.map((e, i) => (
                    <li className="leading-6" key={i}>
                      {e}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="md:mt-4 mt-2 w-40">
              <SizeButton datetime={el.time} />
            </div>
            <div className="mt-4 md:flex gap-4 items-center ">
              <div className="md:flex hidden">
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
                  <span className="relative">Thêm giỏ hàng</span>
                </button>
              </div>

              <div className="flex gap-2">
                <div className="border md:hidden rounded-full bg-black w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-red-500">
                  <ShoppingCartOutlined
                    style={{ fontSize: "24px", color: "#FFFFFF" }}
                  />
                </div>
                <div className="border rounded-full bg-black w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-red-500">
                  <HeartOutlined
                    style={{ fontSize: "24px", color: "#FFFFFF" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TagContent;
