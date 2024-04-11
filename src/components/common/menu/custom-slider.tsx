import React, { useState } from "react";
import { Carousel } from "antd";

import Event from "./Event";

import { bakery1 } from "../../../assets/images";

export default function CustomSlider() {
  const data = [
    { id: 11, title: "event1", image: bakery1 },
    { id: 21, title: "event2", image: bakery1 },
    { id: 31, title: "event3", image: bakery1 },
    { id: 41, title: "event4", image: bakery1 },
    { id: 21, title: "event4", image: bakery1 },
    { id: 32, title: "event4", image: bakery1 },
  ];
  const [previousSlide, setPreviousSlide] = useState(
    data[data.length - 1].image
  );
  // const [currentSlide, setCurrentSlide] = useState(0);
  const onChange = (currentSlide) => {
    setPreviousSlide(
      data[currentSlide === 0 ? data.length - 1 : currentSlide - 1].image
    );
    // setCurrentSlide(currentSlide);
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center  h-full">
        {/**Small image  */}
        <div className="w-[900px] md:flex flex-col justify-center items-center  hidden">
          <div className="w-[400px] ">
            <Event image={previousSlide} size={400} IsEvent={true} />
          </div>
        </div>
        {/** Event carousel  */}
        <div className="w-[1350px] md:flex hidden flex-col justify-center items-center">
          <div className="w-[750px] ">
            <Carousel afterChange={onChange} autoplay>
              {data.map((el, index) => (
                <div className="" key={el.id}>
                  <Event image={el.image} size={750} IsEvent={true} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {/**Carousel for responsive */}
      </div>

      <div className="w-full flex justify-center items-center md:hidden  my-auto ">
        <div className="w-[400px]">
          <Carousel autoplay>
            {data.map((el, index) => (
              <div className="" key={el.id}>
                <Event image={el.image} size={400} IsEvent={true} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}