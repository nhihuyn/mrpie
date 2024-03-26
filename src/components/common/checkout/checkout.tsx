import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { AiOutlineArrowLeft } from "react-icons/ai";
import deliveryIcon from "../../../assets/images/delivery.svg";
import moneyIcon from "../../../assets/images/shop.svg";
import qrCode from "../../../assets/images/QRcode.svg";
import bread from "../../../assets/images/bread.jpg";
import pizza from "../../../assets/images/pizza.jpg";

import { ConfigProvider, Button } from "antd";

import "./checkout.css";

const Checkout: React.FC = () => {
  const steps = [
    "Kiểm tra giỏ hàng",
    "Tiến hành thanh toán",
    "Phương thức thanh toán",
    "Trạng thái đơn hàng",
  ];

  const feeShippingStatus = [
    "Miễn Phí",
    "10.000 VND"
  ]

  const [currentStep, setCurrentStep] = useState(3);
  const [currentMethod, setCurrentMethod] = useState(1);
  const [feeShipping,setFeeShipping] = useState("Miễn Phí");
  

  const selectMethod1 = () => {
    if (currentMethod !== 1) {
      setCurrentMethod(1);
      setFeeShipping(feeShippingStatus[0]);
    }
  };

  const selectMethod2 = () => {
    if (currentMethod !== 2) {
      setCurrentMethod(2);
      setFeeShipping(feeShippingStatus[1]);
    }
  };

  return (
    <div className="h-full md:h-dvh w-full bg-[#F2EBE6]">
      <div className=" w-full   h-1/5  flex justify-center items-center">
        <div className="w-[95%] md:w-[97%] mt-4 md:mt-0 p-4 md:p-0 bg-white h-[90%] rounded-xl">
          {/* Process Stepper Bar */}
          <div className="flex justify-center items-center h-full">
            {steps?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${
                  i + 1 < currentStep && "complete"
                } `}
              >
                <div className="step">
                  {i + 1 < currentStep ? <TiTick size={24} /> : i + 1}
                </div>
                <p className="text-black font-semibold p-1 md:p-0 text-center text-md ">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-4/5 flex flex-col md:flex-row mt-4 md:my-0 ">
        <div className=" w-full md:w-2/3 h-full flex justify-center items-center ">
          <div className="bg-white w-[95%] h-[95%] rounded-xl p-4">
            <div className="w-full  flex items-center border-b-2 ">
              <AiOutlineArrowLeft className="text-2xl cursor-pointer mr-4 "></AiOutlineArrowLeft>
              <h1 className="font-bold text-2xl py-1">Thanh toán</h1>
            </div>

            {/* Div card method payment */}
            <div className="w-full py-4">
              {/* Nhận hàng ngay tại quầy */}
              <div className="flex justify-center p-2  ">
                <div
                  className={`  flex flex-col items-center rounded-xl shadow-md  cursor-pointer ${
                    currentMethod === 1 && "method-active"
                  } ${currentMethod !== 1 && "method-inactive"}`}
                  onClick={selectMethod1}
                >
                  <img src={moneyIcon} className="w-1/3" alt="Money icon" />
                  <p className="p-4 text-black font-semibold text-md ">
                    Nhận món tại cửa hàng
                  </p>
                  <span
                    className={`hidden justify-center items-center absolute w-8 h-8 bg-[#779CFE] rounded-full top-0 right-0 translate-x-2 -translate-y-2 ${
                      currentMethod === 1 && "icon-active"
                    }`}
                    id="icon"
                  >
                    <TiTick className="text-white" size={24} />
                  </span>
                </div>
                {/* Ahamove ship*/}
                <div
                  className={`ml-4  flex flex-col items-center rounded-xl shadow-md  cursor-pointer ${
                    currentMethod === 2 && "method-active"
                  } ${currentMethod !== 2 && "method-inactive"}`}
                  onClick={selectMethod2}
                >
                  <img
                    src={deliveryIcon}
                    className="w-1/3"
                    alt="Ahamove icon"
                  />
                  <p className="p-4  text-black font-semibold text-md ">
                    Nhận món qua Ahamove
                  </p>
                  <span
                    className={`hidden justify-center items-center absolute w-8 h-8 bg-[#779CFE] rounded-full top-0 right-0 translate-x-2 -translate-y-2 ${
                      currentMethod === 2 && "icon-active"
                    }`}
                    id="icon"
                  >
                    <TiTick className="text-white" size={24} />
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center items-center flex-col">
              <img src={qrCode} alt="QrCode image" />
              <p className="text-xl font-bold">Mr.Pie QRcode</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 h-full flex justify-center items-center mt-4 md:mt-0 mr-1 md:mr-4">
          <div className=" w-[95%] h-[95%]  flex flex-col justify-center items-center">
            <div className="w-full h-[75%] flex justify-center items-center mb-4">
              <div className=" w-full h-full  rounded-xl bg-white p-2">
                {/* Header Kiem tra don hang */}
                <div className="w-full  flex items-center border-b-2 ">
                  <h2 className="font-bold text-2xl py-2 ml-2">
                    Kiểm tra đơn hàng
                  </h2>
                </div>

                {/* Body chua san pham */}
                <div className="w-full  flex flex-col p-3 ">
                  <div className="flex items-center  mt-2">
                    <img
                      src={bread}
                      className="w-20 h-20 rounded-xl"
                      alt="Bread Image"
                    />
                    <div className="flex flex-col justify-between ml-12 h-20">
                      <p className="font-semibold text-md md:text-lg">
                        Bread 4P's
                      </p>
                      <p className="text-sm md:text-md">Số lượng: 1</p>
                      <p className="font-semibold text-md md:text-lg">
                        10.000 VND
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mt-4">
                    <img
                      src={pizza}
                      className="w-20 h-20 rounded-xl"
                      alt="Bread Image"
                    />
                    <div className="flex flex-col justify-between ml-12 h-20">
                      <p className="font-semibold text-md ">
                        Cheese Pizza 4P's
                      </p>
                      <p className="text-sm md:text-md">Số lượng: 1</p>
                      <p className="font-semibold text-md ">45.000 VND</p>
                    </div>
                  </div>

                  <div className="w-full flex flex-col mt-6">
                    <div className="flex justify-between items-center">
                      <p className="text-black font-bold text-sm">
                        Giá trị đơn hàng
                      </p>
                      <p className="text-black font-bold text-sm">65.000 VND</p>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-black font-bold text-sm">
                        Phí vận chuyển
                      </p>
                      <p className="text-black font-bold text-sm">{feeShipping}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full  border-t-2 mt-2 p-3">
                  <div className="flex justify-between items-center ">
                    <p className="font-bold text-2xl text-black">Tổng tiền</p>
                    <p className="font-bold text-md">65.000 VND</p>
                  </div>
                </div>

                {/* <ConfigProvider
                  theme={{
                    token: {},
                    components: {
                      Button: {
                        defaultBorderColor: "#000000",
                        defaultHoverBorderColor: "#000000",
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
                  <Button>My Button</Button>
                </ConfigProvider> */}
              </div>
            </div>

            <div className="mb-4 md:mb-0 w-full h-[25%] flex justify-center items-center ">
              <div className=" w-full h-full  rounded-xl bg-white p-2">
                {/* Header thông tin nhận hàng */}
                <div className="w-full  flex items-center border-b-2 ">
                  <h2 className="font-bold text-xl py-1 ml-2 ">
                    Thông tin vận chuyển
                  </h2>
                </div>

                {/* Body thông tin nhân hàng */}
                <div className="w-full  flex flex-col p-3 ">
                  <div className="w-full flex flex-col ">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-black font-bold text-sm">
                          Địa chỉ nhận hàng
                        </p>
                      </div>

                      <div className="w-1/2 flex justify-end items-end">
                        <p className="text-black  text-sm truncate ">
                          1/50 Hai Bà Trưng, Quận 1, Thành phố Hồ Chí Minh
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-black font-bold text-sm">
                        Số điện thoại
                      </p>
                      <p className="text-black text-[12px]">0835771575</p>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-black font-bold text-sm">
                        Trạng thái đơn hàng
                      </p>
                      <p className="text-black font-bold text-sm">Đang xử lí</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
