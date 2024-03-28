import React, { useState } from "react";
import { ConfigProvider, Button, Tooltip } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
interface TagContentProps {
  datetime: String;
}

const SizeButton: React.FC<TagContentProps> = ({ datetime }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonId: string) => {
    setSelectedButton(buttonId);
  };
  const text = (
    <div className="bg-[#F9E8DC] border-[#F9E8DC] p-4">
      <span className="text-black">Sản Phẩm này cần đặt trước</span>
      <div className="border-2 text-zinc-500 flex items-center justify-center gap-4 rounded-lg mt-4">
        <span className="">{datetime}</span>
        <ClockCircleOutlined />
      </div>
    </div>
  );
  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Button: {
            defaultBorderColor: "#FFFFFF",
            defaultHoverBorderColor: "#FFFFFF",
            defaultActiveColor: "#000000",
            defaultActiveBorderColor: "#FFFFFF",
            textHoverBg: "#000000",
            contentFontSize: 15,
            defaultColor: "#000000",
            defaultHoverColor: "#000000",
          },
        },
      }}
    >
      <div className="flex gap-4">
        <div
          className={`border-4  border-black ${
            selectedButton === "S" ? "border-red-500" : "hover:border-[#D31313]"
          }`}
        >
          <Button
            size="middle"
            type="default"
            onClick={() => handleButtonClick("S")}
          >
            S
          </Button>
        </div>
        <div
          className={`border-4  border-black ${
            selectedButton === "M" ? "border-red-500" : "hover:border-[#D31313]"
          }`}
        >
          <Button
            style={{
              paddingTop: 3,
              paddingLeft: 12,
              paddingRight: 12,
              paddingBottom: 3,
            }}
            size="middle"
            onClick={() => handleButtonClick("M")}
          >
            M
          </Button>
        </div>
        <div
          className={`border-4  border-black ${
            selectedButton === "L" ? "border-red-500" : "hover:border-[#D31313]"
          }`}
        >
          <Button size="middle" onClick={() => handleButtonClick("L")}>
            L
          </Button>
        </div>
        <div
          className={`border-4  border-black ${
            selectedButton === "J" ? "border-red-500" : "hover:border-[#D31313]"
          }`}
        >
          <Tooltip color="#F9E8DC" placement="bottom" title={text}>
            <Button size="middle" onClick={() => handleButtonClick("J")}>
              J
            </Button>
          </Tooltip>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default SizeButton;
