import React, { useState } from "react";
import { Typography, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import RadioButton from "./RadioButton";
import TagContent from "./TagContent";
import "../menu/menu.css";
const SideBar: React.FC = () => {
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

  return (
    <div className="w-full h-full   ">
      <Title level={4} className="ml-8 mt-8  text-md">
        SEARCH
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
          CATEGORIES
        </Title>
        <RadioButton />
      </div>
      <div className="mt-4 ml-8 gap-3  ">
        <Title level={4}>TAG</Title>
        <TagContent data={data} />
      </div>
    </div>
  );
};

export default SideBar;
