import React from "react";
import { Button } from "antd";
import "./menu.css";

interface CustomSliderProps {
  title: string;
  image: string;
  size: string;
  IsStore:boolean;
  location:string;
  IsEvent:boolean;
}

const Event: React.FC<CustomSliderProps> = ({ title, image, size,IsStore = false,location,IsEvent = false }) => {
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
          <Button className="h-10 w-32 text-white font-semibold flex items-center justify-center shadow-3xl bg-gradient-to-r from-[#EBA2D0]  to-[#CA8EEE] rounded-3xl px-4 py-2">
            More Detail
          </Button>
        </div>
      </div>

          {IsStore && 
          <div className="flex flex-col items-center mt-10">
          <p className="text-md font-bold text-[#2B2F72] mb-2">
          Acsenct Confference
          </p>
          <div className="flex items-center justify-center">
            <span className="gap-4 mb-4">
              <svg width="30" height="30" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.01808 0.515222C3.26658 -0.182998 4.80119 -0.170795 6.03797 0.54719C7.26259 1.2798 8.00688 2.58729 7.99995 3.99378C7.97145 5.39104 7.17335 6.70447 6.17573 7.71982C5.59994 8.30849 4.95581 8.82902 4.25651 9.27078C4.18449 9.31087 4.1056 9.3377 4.02373 9.34996C3.94494 9.34673 3.8682 9.32432 3.80045 9.28476C2.73283 8.62098 1.7962 7.77369 1.03562 6.78365C0.399196 5.95723 0.0376206 4.95878 6.63851e-07 3.92391C-0.000825534 2.51472 0.769585 1.21344 2.01808 0.515222ZM2.73974 4.50718C2.94975 5.0055 3.44547 5.33056 3.99543 5.33056C4.35572 5.33305 4.70205 5.19415 4.95727 4.94481C5.21248 4.69546 5.35537 4.3564 5.35409 4.00316C5.35601 3.46397 5.02621 2.97682 4.51867 2.76918C4.01112 2.56153 3.42596 2.67435 3.0364 3.05494C2.64684 3.43554 2.52973 4.00885 2.73974 4.50718Z" fill="#2B2F72"/>
                <ellipse opacity="0.4" cx="3.99974" cy="10.4499" rx="2.85716" ry="0.549998" fill="#2B2F72"/>
              </svg>
            </span>
            <span className="text-md font-bold text-[#2B2F72] mb-2">
              {location='Hai Bà Trưng, Quận 1,TP.HCM'}
            </span>
            
          </div>
        
          <div className="flex items-center justify-center">
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
  
      }

       {IsEvent === true &&
      <div className="flex items-center justify-center mt-8 ">
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
      }
    </div>
       
  );
};

export default Event;
