import React from "react";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import "./dropdown.css";
import { UserOutlined,ContainerOutlined,LogoutOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <p className="font-semibold">User Profile</p>,
    icon: <UserOutlined />,
  },
  {
    key: "2",
    label: (
      <p className="font-semibold">Order History</p>
    ),
    icon: <ContainerOutlined/>
  },
  {
    key: "3",
    label: (
      <p className="font-semibold ">Logout</p>
    ),
    icon: <LogoutOutlined/>
  },
];

const DropDownUser: React.FC = () => (
  <>
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <UserOutlined className="mr-5 text-2xl text-black relative" />
    </Dropdown>
  </>
);

export default DropDownUser;
