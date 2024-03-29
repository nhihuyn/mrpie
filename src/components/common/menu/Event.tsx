import React from "react";
import { Button } from "antd";
import "./menu.css";

import { Link } from "react-router-dom";

interface CustomSliderProps {
  title: string;
  image: string;
  size: string;
}

const Event: React.FC<CustomSliderProps> = ({ title, image, size }) => {
  return (
    <div
      className={`bg-[#F0FDFF] h-full ${
        size === "big" ? "w-[700px]" : "w-[300px]"
      }`}
    >
      <div className="relative">
        <div
          className={`shadow-2xl h-80 relative overflow-hidden image-slider ${
            size === "small" ? "w-[300px]" : "w-[700px]"
          }`}
        >
          <img
            src={image}
            alt="event"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-center absolute -bottom-4 left-0 right-0">
          <Link to="/event">
            <Button className="h-10 w-32 text-white font-semibold flex items-center justify-center shadow-3xl bg-gradient-to-r from-[#EBA2D0]  to-[#CA8EEE] rounded-3xl px-4 py-2">
              More Detail
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <span className="gap-4 mb-4">
          <svg
            width="30"
            height="30"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.52083 1C2.77396 1 2.97917 1.2052 2.97917 1.45833V1.91667H6.1875V1.45833C6.1875 1.2052 6.3927 1 6.64583 1C6.89896 1 7.10417 1.2052 7.10417 1.45833V1.92798C8.26222 2.04296 9.16667 3.02002 9.16667 4.20833V8.33333C9.16667 9.59899 8.14065 10.625 6.875 10.625H2.29167C1.02601 10.625 0 9.59899 0 8.33333V4.20833C0 3.02002 0.904447 2.04296 2.0625 1.92798V1.45833C2.0625 1.2052 2.2677 1 2.52083 1ZM0.994907 3.75H8.17176C7.983 3.21595 7.47368 2.83333 6.875 2.83333H2.29167C1.69298 2.83333 1.18367 3.21595 0.994907 3.75ZM8.25 4.66667H0.916667V8.33333C0.916667 9.09272 1.53228 9.70833 2.29167 9.70833H6.875C7.63439 9.70833 8.25 9.09272 8.25 8.33333V4.66667ZM1.83333 6.04167C1.83333 5.78854 2.03854 5.58333 2.29167 5.58333H4.125C4.37813 5.58333 4.58333 5.78854 4.58333 6.04167V7.875C4.58333 8.12813 4.37813 8.33333 4.125 8.33333H2.29167C2.03854 8.33333 1.83333 8.12813 1.83333 7.875V6.04167ZM3.66667 6.5H2.75V7.41667H3.66667V6.5Z"
              fill="#2B2F72"
            />
          </svg>
        </span>
        <span className="text-md font-bold text-[#2B2F72] ml-2 mb-4">
          08-03-2024 ~ 24-07-2024
        </span>
      </div>
    </div>
  );
};

export default Event;
