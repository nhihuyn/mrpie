import React, { useState, useCallback } from "react";
import { Typography } from "antd";
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

const Menu: React.FC = () => {
  const { Title } = Typography;
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(!isOpen);
    console.log("isOpen --------", isOpen);
  };

  const [select, setSelect] = useState("");
  const changeValue = useCallback((value) => {
    setSelect(value);
  }, []);
  const selected = [
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
  console.log("isOpen >>>>>", isOpen);
  const { t } = useTranslation();
  return (
    <div className="relative md:static flex w-full justify-center h-full ">
      {/* Sidebar -search - ratio button - tag*/}
      <div
        className={`absolute md:static md:block  h-full md:h-auto pb-2 w-full z-30 md:w-1/5 bg-[#F5F3F0] pr-1 ${
          isOpen === true ? "block" : "hidden"
        }`}
      >
        <SideBar isOpen={isOpen} SetIsOpen={setIsOpen} />
      </div>

      {/* main screen*/}
      <div className="w-4/5 ">
        {/* event slider*/}
        <div className=" w-full">
          <CustomSlider />
        </div>
        {/* container*/}
        <div className="md:flex justify-end items-center font-semibold text-md hidden  md:mr-8 md:mt-4 mt-2">
          <div className="w-full flex justify-end  ">
            <Link to="/event" className="text-black hover:underline">
              {t("Xem thêm")}
            </Link>
          </div>
        </div>
        <div className="flex md:justify-end justify-between pr-2  items-center mt-8 pb-2 ">
          <div
            className="w-28 h-12  border-4 border-red-500  left-0 bg-red-500 rounded-full flex justify-around items-center shadow-lg cursor-pointer md:hidden "
            onClick={onOpen}
          >
            <MenuOutlined
              size={20}
              style={{ fontSize: 24, fontWeight: "bold", color: "white" }}
            />
            <span className="font-semibold text-white text-lg">Menu</span>
          </div>
          <div className="flex items-center">
            <Title
              level={4}
              className="text-semibold md:block hidden text-base text-zinc-300"
            >
              {t("Hiển thị :")}
            </Title>
            <div className="bg-[#F5F5F5] text-lg border-4 w-28 rounded-3xl p-2 ml-4 flex items-center justify-center ">
              <InputSelect
                changeValue={changeValue}
                value={select}
                options={selected}
                defaultValue={6}
              />
            </div>
          </div>
        </div>
        {/* Menu button */}

        <div className="md:ml-8">
          <BreadCard data={breadlist} />
        </div>
      </div>
    </div>
  );
};
export default Menu;
