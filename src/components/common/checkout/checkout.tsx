import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import {
  pizza,
  bread,
  deliveryIcon,
  moneyIcon,
  qrCode,
} from "../../../assets/images/index";

import "./checkout.css";
import { CheckOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const Checkout: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    t("Check shopping cart"),
    t("Proceed with payment"),
    t("Payment Methods"),
    t("Order status"),
  ];

  const feeShippingStatus = ["Miễn Phí", "10.000 VND"];

  const [currentStep, setCurrentStep] = useState(3);
  const [currentMethod, setCurrentMethod] = useState(1);
  const [feeShipping, setFeeShipping] = useState("Miễn Phí");

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
                  {i + 1 < currentStep ? (
                    <CheckOutlined
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                    />
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="text-black font-semibold mt-1 p-2 md:p-0 text-center text-md ">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-4/5 flex flex-col md:flex-row mt-4 md:my-0 ">
        <div className=" w-full md:w-2/3 h-full flex justify-center items-center ">
          <div className="bg-white w-[95%] h-[95%] rounded-xl p-4">
            <div className="w-full  flex items-center border-b-2 ">
              <ArrowLeftOutlined
                style={{
                  fontWeight: "bold",
                  fontSize: "26px",
                  cursor: "pointer",
                  marginRight: "6px",
                }}
              />

              <h1 className="font-bold text-2xl py-1">{t("Payment")}</h1>
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
                    {t("Receive your order at the store")}
                  </p>
                  <span
                    className={`hidden justify-center items-center absolute w-8 h-8 bg-[#779CFE] rounded-full top-0 right-0 translate-x-2 -translate-y-2 ${
                      currentMethod === 1 && "icon-active"
                    }`}
                    id="icon"
                  >
                    <CheckOutlined
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    />
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
                    {t("Receive orders via Ahamove")}
                  </p>
                  <span
                    className={`hidden justify-center items-center absolute w-8 h-8 bg-[#779CFE] rounded-full top-0 right-0 translate-x-2 -translate-y-2 ${
                      currentMethod === 2 && "icon-active"
                    }`}
                    id="icon"
                  >
                    <CheckOutlined
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    />
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
                    {t("Check your order")}
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
                      <p className="text-sm md:text-md">{t("Quantity")}: 1</p>
                      <p className="font-semibold text-md md:text-lg">
                        10.000 VND
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center  mt-2">
                    <img
                      src={pizza}
                      className="w-20 h-20 rounded-xl"
                      alt="Bread Image"
                    />
                    <div className="flex flex-col justify-between ml-12 h-20">
                      <p className="font-semibold text-md md:text-lg">
                        Pizza 4P's
                      </p>
                      <p className="text-sm md:text-md">{t("Quantity")}: 1</p>
                      <p className="font-semibold text-md md:text-lg">
                        10.000 VND
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex flex-col mt-6">
                    <div className="flex justify-between items-center">
                      <p className="text-black font-bold text-sm">
                        {t("Order cost")}
                      </p>
                      <p className="text-black font-bold text-sm">65.000 VND</p>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-black font-bold text-sm">
                        {t("Shipping fee")}
                      </p>
                      <p className="text-black font-bold text-sm">
                        {feeShipping}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full  border-t-2 mt-2 p-3">
                  <div className="flex justify-between items-center ">
                    <p className="font-bold text-2xl text-black">
                      {t("Total")}
                    </p>
                    <p className="font-bold text-xl">65.000 VND</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 md:mb-0 w-full h-[25%] flex justify-center items-center ">
              <div className=" w-full h-full  rounded-xl bg-white p-2">
                {/* Header thông tin nhận hàng */}
                <div className="w-full  flex items-center border-b-2 ">
                  <h2 className="font-bold text-xl py-1 ml-2 ">
                    {t("Shipping information")}
                  </h2>
                </div>

                {/* Body thông tin nhân hàng */}
                <div className="w-full  flex flex-col p-3 ">
                  <div className="w-full flex flex-col ">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-black font-bold text-sm">
                          {t("Address")}
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
                        {t("PhoneNumber")}
                      </p>
                      <p className="text-black text-[12px]">0835771575</p>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-black font-bold text-sm">
                        {t("Order status")}
                      </p>
                      <p className="text-black font-bold text-sm">
                        {t("Processing")}
                      </p>
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
