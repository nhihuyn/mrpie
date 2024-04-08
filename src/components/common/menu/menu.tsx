import React, { useEffect, useState, useCallback } from "react";
import { Typography, ConfigProvider, Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";


import CustomSlider from "./custom-slider";
import BreadCard from "./bread-card";
import SideBar from "./sidebar";
import { useTranslation } from "react-i18next";
import "./menu.css";
import { bakery1 } from "../../../assets/images";
import { Link } from "react-router-dom";
import InputSelect from "./input-select";

const breadlist = [
  {
    id: "1",
    key: 1,
    title: "Bánh Pie Táo",
    ratings: 4.5,
    price: 35000,
    bestPrice: 45000,
    description:
      "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    size: "small",
    img: bakery1,
    time: "2011:12:31",
    eventTitle: "30%",
  },
  {
    id: "2",
    key: 2,
    title: "Bánh Pie Táo",
    ratings: 2.5,
    price: 35000,
    bestPrice: 45000,
    size: "small",
    description:
      "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    img: bakery1,
    time: "2019:99:90",
    eventTitle: "30%",
  },
  {
    id: "3",
    key: 3,
    title: "Bánh Pie Táo",
    ratings: 4,
    price: 35000,
    bestPrice: 45000,
    size: "small",
    description:
      "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    img: bakery1,
    time: "2011:12:31",
    eventTitle: "30%",
  },
  {
    id: "4",
    key: 4,
    title: "Bánh Pie Táo",
    ratings: 4,
    price: 35000,
    bestPrice: 45000,
    size: "small",
    description:
      "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    img: bakery1,
    time: "8888:88:88",
    eventTitle: "30%",
  },
  {
    id: "5",
    key: 5,
    title: "Bánh Pie Táo",
    ratings: 4,
    price: 35000,
    bestPrice: 45000,
    size: "small",
    description:
      "fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante..",
    img: bakery1,
    time: "9999:99:99",
    eventTitle: "30%",
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
  const [showSideBar, setShowSideBar] = useState(true);

  const activateSideBar = () =>{
    setShowSideBar(!showSideBar)
  }
  

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const [sort, setSort] = useState("");
  const changeValue = useCallback(
    (value) => {
      setSort(value);
    },
    [sort]
  );
  const sorts = [
    {
      id: 1,
      value: 3,
      text: "3 Món",
    },
    {
      id: 2,
      value: 6,
      text: "6 Món",
    },
    {
      id: 3,
      value: 9,
      text: "9 Món",
    },
    {
      id: 4,
      value: 12,
      text: "12 Món",
    },
    {
      id: 5,
      value: 20,
      text: "20 Món",
    },
    {
      id: 6,
      value: 24,
      text: "24 Món",
    },
  ];

  const { t } = useTranslation();
  return (
    <div className="relative md:static flex w-full justify-center ">
      {/* Sidebar -search - ratio button - tag*/}
      <div className={`absolute md:static  w-full  z-30 md:w-1/5 bg-[#F5F3F0] hidden md:block pr-1 ${showSideBar === true && 'show_sidebar' }`}>
        <SideBar status={showSideBar}  setStatus={setShowSideBar} />
      </div>

      
      {/* main screen*/}
      <div className="w-4/5 ">
        {/* event slider*/}
        <div className=" w-full">
          <CustomSlider />
        </div>
        {/* container*/}
        <div className="lg:flex justify-end items-center font-semibold text-md hidden  lg:mr-8 lg:mt-4 mt-2">
          <div className="w-full flex justify-end  ">
            <Link to="/event" className="text-black hover:underline">
              {t("Xem thêm")}
            </Link>
          </div>
        </div>
        <div className="lg:flex justify-end mr-8 items-center mt-8  hidden">
          <Title level={4} className="text-semibold text-base text-zinc-300">
            {t("Hiển thị :")}
          </Title>
          <div className="bg-[#F5F5F5] text-lg border-4 w-36 rounded-3xl p-2 ml-4 flex items-center justify-center ">
            <InputSelect
              changeValue={changeValue}
              value={sort}
              options={sorts}
              defaultValue={6}
            />
          </div>
        </div>
        {/* Menu button */}
        <div className="w-28 h-10 mt-4 bg-green-500 rounded-full flex justify-around items-center shadow-lg cursor-pointer md:hidden " onClick={activateSideBar}>
          <MenuOutlined
            size={20}
            style={{ fontSize: 24, fontWeight: "bold", color: "white" }}
          />
          <p className="font-semibold text-white text-lg">Menu</p>
        </div>
        <div className="md:ml-8">
          <BreadCard data={breadlist} />
        </div>
      </div>
    </div>
  );
};
export default Menu;
