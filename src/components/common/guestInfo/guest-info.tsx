import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import ProcessBar from "../checkout/components/processBar";
import { LeftOutlined, DownOutlined } from "@ant-design/icons";

const GuestInfo = () => {
  const { t } = useTranslation();

  const [mandatoryData, setMandatoryData] = useState({
    firstname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [data,setData] = useState({
    lastname:"",
    age:"",
    gender: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mandatoryData);
  };

  // Destructure data
  const { ...allMandatoryData } = mandatoryData;

  // Disable submit button until all fields are filled in
  const canSubmit = [...Object.values(allMandatoryData)].every(Boolean);

  

  const steps = [
    t("Check shopping cart"),
    t("Proceed with payment"),
    t("Payment Methods"),
    t("Order status"),
  ];

  const [currentStep, setCurrentStep] = useState(1);

  console.log(setCurrentStep);
  return (
    // Part 1: Header Navigation Process Bar
    <div className="h-full md:h-dvh w-full bg-[#F2EBE6]">
      <div className=" w-full h-1/5  flex justify-center items-center">
        <ProcessBar currentStep={currentStep} steps={steps} />
      </div>

      {/* Part 2: Guest Information */}
      <div className="w-full h-4/5 flex flex-col md:flex-row mt-4 md:my-0 md:px-4 2xl:px-8 py-4 ">
        <div className=" w-full h-full rounded-xl bg-white px-6 md:px-12 2xl:px-24 py-6">
          <form
            action=""
            onSubmit={handleSubmit}
            noValidate
            className="w-full h-full"
          >
            {/* Heading */}
            <div className="flex ">
              <LeftOutlined
                size={32}
                style={{ fontWeight: "bold", fontSize: 32, cursor: "pointer" }}
              />
              <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold ml-8">
                Guest Information
              </h1>
            </div>

            <div className="w-full h-full flex flex-col pt-12  2xl:px-16">
              <div className="w-full flex flex-col md:flex-row  h-fit">
                {/* Left Title */}
                <div className="md:w-1/3 2xl:w-1/2  mb-6 md:mb-0 h-fit">
                  <h2 className="font-bold text-xl md:text-2xl">
                    Personal Info *
                  </h2>
                  <p className="text-[#B2B2B2] font-medium ">
                    Provide your Personal Info
                  </p>
                </div>

                {/* Right Form content */}
                <div className="md:w-2/3 2xl:w-1/2 flex justify-around content-start gap-y-10 flex-wrap ">
                  {/* Firstname Field */}
                  <div className="w-[45%] h-14 bg-[#F4F4F4] border-2 focus-within:bg-white focus-within:border-[#1890FF] rounded-xl shadow-md px-3 py-1 ">
                    <p className="text-[#B2B2B2] font-semibold">
                      First name
                      <span className="text-red-700 font-bold "> *</span>
                    </p>
                    <input
                      type="text"
                      className="appearance-none border-0  w-full text-black   leading-4 outline-none bg-[#F4F4F4] focus:bg-white font-medium  text-base py-1 [&:not(:placeholder-shown):not(:focus):invalid~span]:block"
                      placeholder="   "
                      pattern="[0-9a-zA-Z ]{2,}"
                      maxLength={64}
                      onChange={(e) => {
                        setMandatoryData({
                          ...mandatoryData,
                          firstname: e.target.value,
                        });
                      }}
                      required
                    />
                    <span className="mt-2 hidden text-sm text-red-400 font-medium">
                      First name must be at least 2 characters long
                    </span>
                    
                  </div>
                  
                  {/* Lastname Field */}
                  <div className="w-[45%] h-14 bg-[#F4F4F4] border-2 focus-within:bg-white focus-within:border-[#1890FF] rounded-xl shadow-md px-3 py-1">
                    <p className="text-[#B2B2B2] font-semibold">Last name</p>
                    <input
                      type="text"
                      className="appearance-none border-0  w-full text-black   leading-4 outline-none bg-[#F4F4F4] focus:bg-white font-medium  text-base py-1 "
                      pattern="[0-9a-zA-Z ]{2,}"
                      maxLength={64}
                      onChange={(e) => {
                        setData({
                          ...data,
                          lastname: e.target.value,
                        });
                      }}
                    />  
                  </div>

                  {/* Gender */}
                  <div className="w-[45%] h-14 bg-[#F4F4F4] border-2 focus-within:bg-white focus-within:border-[#1890FF] rounded-xl shadow-md px-3 py-1 ">
                    <p className="text-[#B2B2B2] font-semibold">
                      Gender 
                    </p>
                    <div className="relative">
                      <select
                        name="text"
                        id="gender"
                        className="appearance-none border-0  w-full text-black   leading-4 outline-none bg-[#F4F4F4] focus:bg-white font-medium  text-base py-1  "
                        
                        onChange={(e) => {
                          setData({
                            ...data,
                            gender: e.target.value,
                          });
                        }}
                        required
                      >
                        <option value=""></option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <div className="absolute right-0 top-0  z-50">
                        <DownOutlined
                          size={32}
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            cursor: "pointer",
                          }}
                        />
                        <span className="mt-1 hidden text-sm text-red-400">
                          Gender must be filled
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Age Field */}
                  <div className="w-[45%] h-14 bg-[#F4F4F4] border-2 focus-within:bg-white focus-within:border-[#1890FF] rounded-xl shadow-md px-3 py-1">
                    <p className="text-[#B2B2B2] font-semibold">Age </p>
                    <input
                      type="text"
                      
                      className="  appearance-none border-0  w-full text-black   leading-4 outline-none bg-[#F4F4F4] focus:bg-white font-medium  text-base py-1 "
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /[^0-9+()]/g,
                          ""
                        );
                      }}
                      onChange={(e) => {
                        setData({
                          ...data,
                          age: e.target.value,
                        });
                      }}
                      minLength={1}
                      maxLength={2}
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col md:flex-row h-fit mt-8">
                {/* Left Title */}
                <div className="w-full md:w-1/3 2xl:w-1/2 mb-6 md:mb-0 h-fit">
                  <h2 className="font-bold text-xl md:text-2xl">
                    Contact Info *
                  </h2>
                  <p className="text-[#B2B2B2] font-medium ">
                    Provide your Contact Informations
                  </p>
                </div>

                {/* Right Form content */}
                <div className="w-full md:w-2/3 2xl:w-1/2 flex justify-around content-start gap-y-10 flex-wrap ">
                  {/* Email Field */}
                  <div className="w-[45%] h-14 bg-[#F4F4F4] border-2 focus-within:bg-white focus-within:border-[#1890FF] rounded-xl shadow-md px-3 py-1">
                    <p className="text-[#B2B2B2] font-semibold">
                      Email
                      <span className="text-red-700 font-bold "> *</span>
                    </p>
                    <input
                      type="email"
                      className="  appearance-none border-0  w-full text-black   leading-4 outline-none bg-[#F4F4F4] focus:bg-white font-medium  text-base py-1 [&:not(:placeholder-shown):not(:focus):invalid~span]:block"
                      placeholder="   "
                      autoComplete="off"
                      pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      onChange={(e) => {
                        setMandatoryData({
                          ...mandatoryData,
                          email: e.target.value,
                        });
                      }}
                      required
                    />
                    <span className="mt-2 hidden text-sm text-red-400">
                      Please enter a valid email address
                    </span>
                  </div>
                  {/* Phonenumber Field */}
                  <div className="w-[45%] h-14 bg-[#F4F4F4] border-2 focus-within:bg-white focus-within:border-[#1890FF] rounded-xl shadow-md px-3 py-1">
                    <p className="text-[#B2B2B2] font-semibold">
                      Phone Number
                      <span className="text-red-700 font-bold "> *</span>
                    </p>
                    <input
                      type="text"
                      className="  appearance-none border-0  w-full text-black   leading-4 outline-none bg-[#F4F4F4] focus:bg-white font-medium  text-base py-1 [&:not(:placeholder-shown):not(:focus):invalid~span]:block "
                      placeholder="   "
                      pattern="[0-9]{9,11}"
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(
                          /[^0-9+()]/g,
                          ""
                        );
                      }}
                      onChange={(e) => {
                        setMandatoryData({
                          ...mandatoryData,
                          phone: e.target.value,
                        });
                      }}
                      
                      required
                    />
                    <span className="mt-2 hidden text-sm text-red-400">
                      Phonenumber not correct format
                    </span>
                  </div>
                  

                  {/* Address Field */}
                  <div className="w-[95%] h-14 bg-[#F4F4F4] border-2 focus-within:bg-white focus-within:border-[#1890FF] rounded-xl shadow-md px-3 py-1">
                    <p className="text-[#B2B2B2] font-semibold">
                      Address<span className="text-red-700 font-bold "> *</span>
                    </p>
                    <input
                      type="text"
                      className="  appearance-none border-0  w-full text-black   leading-4 outline-none bg-[#F4F4F4] focus:bg-white font-medium  text-base py-1 [&:not(:placeholder-shown):not(:focus):invalid~span]:block"
                      required
                      placeholder="    "
                      pattern="[0-9a-zA-Z ]{2,}"
                      onChange={(e) => {
                        setMandatoryData({
                          ...mandatoryData,
                          address: e.target.value,
                        });
                      }}
                    />
                    <span className="mt-2 hidden text-sm text-red-400">
                      Address must be filled
                    </span>
                  </div>

                  {/* Navigate Submit & Cancel*/}
                  <div className="w-[95%] flex justify-between">
                    <p className="text-[#B2B2B2] font-semibold">
                      <span className="text-red-500 font bold">*</span> This
                      field is mandatory
                    </p>

                    <div>
                      <button className="border-2 border-gray-500 text-black h-12 w-20 rounded-xl shadow-md font-semibold hover:text-white hover:bg-[#FA7070] duration-200 ease-in-out">
                        Close
                      </button>

                      <button
                        type="submit"
                        disabled={!canSubmit}
                        className=" ml-4 bg-[#1890FF] text-white font-semibold text-center h-12 w-32 rounded-xl shadow-md
                       hover:bg-[#47a3f9] disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400 group-invalid:pointer-events-none group-invalid:bg-gradient-to-br group-invalid:from-gray-100 group-invalid:to-gray-300 group-invalid:text-gray-400 group-invalid:opacity-70 "
                      >
                        Save & Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GuestInfo;
