import React, { useState } from "react";
import { Typography, Input } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import RadioButton from "./radio-button";
import TagContent from "./tag-content";
import "../menu/menu.css";
import { useTranslation } from "react-i18next";

const SideBar = ({status,setStatus}) => {
  const { Title } = Typography;
  const [searching, setSearching] = useState("");

  const handleSearch = () => {
    console.log(searching);
  };

  const data = [
    {
      id: "1",
      title: "Donkey",
    },
    {
      id: "2",
      title: "Donkey Donkey Donkey ",
    },
    {
      id: "3",
      title: "Donkey Donkey",
    },
    {
      id: "4",
      title: "DonkeyDonkey",
    },
  ];
  const { t } = useTranslation();

  return (
    <div className="relative md:static w-full h-full  ">
      <div className=" absolute top-0 right-0 p-2 cursor-pointer  block  md:hidden  " onClick={()=>{
        return setStatus(false);
      }}>
        <CloseOutlined style={{ fontSize: 24, fontWeight: "bold" }} />
      </div>
      <Title level={4} className="ml-8 mt-8  text-md">
        {t("SEARCH")}
      </Title>
      <div className="mt-5 mr-8 ml-3">
        <Input
          size="large"
          placeholder="Search..."
          className="rounded-3xl  ml-4 h-8  font-semibold text-xl"
          value={searching}
          onChange={(e) => setSearching(e.target.value)}
          suffix={<SearchOutlined onClick={handleSearch} />}
        />
      </div>
      <div className="mt-14">
        <Title className="ml-8 mt-8" level={4}>
          {t("CATEGORIES")}
        </Title>
        <RadioButton />
      </div>
      <div className="mt-14 ml-8 gap-3  ">
        <Title level={4}> {t("TAG")}</Title>
        <TagContent data={data} />
      </div>
    </div>
  );
};

export default SideBar;
