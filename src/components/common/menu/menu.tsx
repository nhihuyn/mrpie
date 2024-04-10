import React from "react";
import { Typography, ConfigProvider, Select } from "antd";

import CustomSlider from "./custom-slider";
import BreadCard from "./bread-card";
import SideBar from "./side-bar";

import "./menu.css";
import { bakery1 } from "../../../assets/images";
import { Link } from "react-router-dom";

const breadlist = [
  {
    id: "1",
    key: 1,
    title: "Bánh Pie Táo",
    ratings: 4.5,
    price: 35000,
    bestPrice: 45000,
    description: "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    size: "small",
    img: bakery1,
    time: "2011:12:31",
    eventTitle: "30%"
  },
  {
    id: "2",
    key: 2,
    title: "Bánh Pie Táo",
    ratings: 2.5,
    price: 35000,
    bestPrice: 45000,
    size: "small",
    description: "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    img: bakery1,
    time: "2019:99:90",
    eventTitle: "30%"
  },
  {
    id: "3",
    key: 3,
    title: "Bánh Pie Táo",
    ratings: 4,
    price: 35000,
    bestPrice: 45000,
    size: "small",
    description: "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    img: bakery1,
    time: "2011:12:31",
    eventTitle: "30%"
  },
  {
    id: "4",
    key: 4,
    title: "Bánh Pie Táo",
    ratings: 4,
    price: 35000,
    bestPrice: 45000,
    size: "small",
    description: "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    img: bakery1,
    time: "8888:88:88",
    eventTitle: "30%"
  },
  {
    id: "5",
    key: 5,
    title: "Bánh Pie Táo",
    ratings: 4,
    price: 35000,
    bestPrice: 45000,
    size: "small",
    description: "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    img: bakery1,
    time: "9999:99:99",
    eventTitle: "30%"
  },
];

const options = [
  { value: "3", label: "3 Món" },
  { value: "6", label: "6 Món" },
  { value: "9", label: "9 Món" },
  { value: "12", label: "12 Món" },
];

const Menu: React.FC = () => {
  const { Title } = Typography;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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
            <Link to="/event" className="text-black hover:underline">
              Xem thêm
            </Link>
          </div>
        </div>
        <div className="lg:flex justify-end mr-8 items-center mt-8  hidden">
          <Title level={4} className="text-semibold text-base text-zinc-300">Hiển thị :</Title>
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
