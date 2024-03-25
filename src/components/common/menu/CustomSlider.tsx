import React, { useState } from "react";
import { Carousel } from "antd";
import Event from "./Event";
import image1 from "../../../assets/images/bakery1.png";
import image2 from "../../../assets/images/bakery1.png";
import image3 from "../../../assets/images/bakery1.png";
import image4 from "../../../assets/images/bakery1.png";
import image5 from "../../../assets/images/bakery1.png";
import image6 from "../../../assets/images/bakery1.png";
export default function CustomSlider() {
  const data = [
    { id: 11, title: "event1", image: image1 },
    { id: 21, title: "event2", image: image2 },
    { id: 31, title: "event3", image: image3 },
    { id: 41, title: "event4", image: image5 },
    { id: 21, title: "event4", image: image6 },
    { id: 32, title: "event4", image: image4 },
  ];
  const [previousSlide, setPreviousSlide] = useState(
    data[data.length - 1].image
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const onChange = (currentSlide) => {
    setPreviousSlide(
      data[currentSlide === 0 ? data.length - 1 : currentSlide - 1].image
    );
    setCurrentSlide(currentSlide);
  };
  return (
    <div className="">
      <div className="flex md:gap-8 md:ml-8  gap-0 ml-2 justify-center items-center">
        <div className="w-[300px] ml-8 hidden md:block">
          <Event
            // id={
            // data[currentSlide === 0 ? data.length - 1 : currentSlide - 1].id
            // }
            title={
              data[currentSlide === 0 ? data.length - 1 : currentSlide - 1]
                .title
            }
            image={previousSlide}
            size="small"
          />
        </div>
        <div className="w-[700px] sm:ml-14 hidden   ml-0 mr-0 lg:block ">
          <Carousel afterChange={onChange} autoplay>
            {data.map((el, index) => (
              <div className="" key={el.id}>
                <Event
                  // id={el.id}
                  title={el.title}
                  image={el.image}
                  size="big"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="  w-[300px] ml-16 lg:hidden ">
          <Carousel autoplay>
            {data.map((el, index) => (
              <div className="" key={el.id}>
                <Event
                  // id={el.id}
                  title={el.title}
                  image={el.image}
                  size="small"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
