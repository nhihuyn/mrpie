import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import "./dropdown.css";
import { GlobalOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";




const DropDownLanguage: React.FC = () => {
  const { i18n } = useTranslation();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <p className="font-semibold" onClick={()=>{
          i18n.changeLanguage("en");
        }}>
          English
        </p>
      ),
    },
    {
      key: "2",
      label: <p className="font-semibold" onClick={()=>{
          i18n.changeLanguage("vi")
      }}>Vietnamese</p>,
    },
  ];
  
  return (
    <>
      <Dropdown menu={{ items }} placement="bottom" arrow>
        <GlobalOutlined className="mr-5 text-2xl text-black relative" />
      </Dropdown>
    </>
  );
};

export default DropDownLanguage;
