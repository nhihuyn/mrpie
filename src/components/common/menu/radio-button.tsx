import { Radio, ConfigProvider, Space } from "antd";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
const RadioButton: React.FC = () => {
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [value, setValue] = useState(1);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#EAAEAE",
          borderRadius: 2,
          colorBgContainer: "#F8F2F2",
        },
        components: {
          Radio: {
            radioSize: 30,
            dotSize: 16,
          },
        },
      }}
    >
      <Radio.Group
        size="small"
        onChange={onChange}
        value={value}
        className="ml-8 mt-2"
      >
        <Space
          direction="vertical"
          className="text-2xl font-semibold"
          size="middle"
        >
          <Radio
            value={1}
            className="text-base items-center"
            defaultChecked={true}
          >
            Bánh trong ngày
          </Radio>
          <Radio value={2} className="text-base items-center">
            Bánh ngọt
          </Radio>
          <Radio value={3} className="text-base items-center">
            Bánh mặn
          </Radio>
          <Radio value={4} className="text-base items-center">
            Bánh chay
          </Radio>
          <Radio value={5} className="text-base items-center">
            Bánh xúc xích
          </Radio>
          <Radio value={6} className="text-base items-center">
            Bánh ăn kèm
          </Radio>
        </Space>
      </Radio.Group>
    </ConfigProvider>
  );
};

export default RadioButton;
