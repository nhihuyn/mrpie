import React from "react";
import { Typography } from "antd";

import CustomSlider from "./CustomSlider";
import "./menu.css";
import { ConfigProvider } from "antd";

import BreadCard from "./BreadCard";
import pie1 from "../../../assets/images/bakery1.png";
import { Select } from "antd";
import SideBar from "./SideBar";
const Menu: React.FC = () => {
  const { Title } = Typography;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const breadlist = [
    {
      id: "1",
      title: "Bánh Pie Táo",
      Ratings: 4.5,
      price: 35000,
      description: [
        "Pellentesque habitant morbi tristique senectus et netus et malesuad  ",
        "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ",
        "ultricies eget, tempor sit amet, ante..",
      ],

      size: "small",
      images: pie1,
      time: "2011:12:31",
    },
    {
      id: "2",
      title: "Bánh Pie Táo",
      Ratings: 2.5,
      price: 35000,
      description: [
        "Pellentesque habitant morbi tristique senectus et netus et malesuad  ",
        "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ",
        "ultricies eget, tempor sit amet, ante..",
      ],
      images: pie1,
      time: "2019:99:90",
    },
    {
      id: "3",
      title: "Bánh Pie Táo",
      Ratings: 4,
      price: 35000,
      description: [
        "Pellentesque habitant morbi tristique senectus et netus et malesuad  ",
        "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ",
        "ultricies eget, tempor sit amet, ante..",
      ],
      images: pie1,
      time: "2011:12:31",
    },
    {
      id: "4",
      title: "Bánh Pie Táo",
      Ratings: 4,
      price: 35000,
      description: [
        "Pellentesque habitant morbi tristique senectus et netus et malesuad  ",
        "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ",
        "ultricies eget, tempor sit amet, ante..",
      ],
      images: pie1,
      time: "8888:88:88",
    },
    {
      id: "5",
      title: "Bánh Pie Táo",
      Ratings: 4,
      price: 35000,
      description: [
        "Pellentesque habitant morbi tristique senectus et netus et malesuad  ",
        "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ",
        "ultricies eget, tempor sit amet, ante..",
      ],
      images: pie1,
      time: "9999:99:99",
    },
  ];
  const options = [
    { value: "3", label: "3 Món" },
    { value: "6", label: "6 Món" },
    { value: "9", label: "9 Món" },
    { value: "12", label: "12 Món" },
  ];
  return (
    <div className="flex w-full ">
      <div className="w-1/5  bg-[#F5F3F0] hidden lg:block ">
        <SideBar />
      </div>
      <div className="w-4/5 ">
        <div className=" w-full">
          <CustomSlider />
        </div>
        <div className="lg:flex justify-end items-center font-semibold text-md hidden  lg:mr-8 lg:mt-4 mt-2">
          <div className="w-full flex justify-end  ">
            <a href="/" className="text-black hover:underline ">
              Xem thêm
            </a>
          </div>
        </div>
        <div className="lg:flex justify-end mr-8 items-center mt-8  hidden">
          <Title level={4} className="text-semibold text-xl text-zinc-300">
            Hiện thị :
          </Title>
          <div className="bg-[#F5F5F5] text-lg border-4 w-36 rounded-3xl p-2 ml-4 flex items-center justify-center ">
            <ConfigProvider
              theme={{
                token: {
                  colorText: "#D4D4D8",
                  fontSize: 18,
                },
              }}
            >
              <Select
                defaultValue="9"
                style={{ width: 120 }}
                bordered={false}
                onChange={handleChange}
                options={options}
                className="bg-[#F5F5F5]"
              />
            </ConfigProvider>
          </div>
        </div>
        <div className="ml-8">
          <BreadCard data={breadlist} />
        </div>
      </div>
    </div>
  );
};
export default Menu;
