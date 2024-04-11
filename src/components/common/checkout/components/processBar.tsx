import React from 'react'
import { CheckOutlined } from "@ant-design/icons";
const ProcessBar = ({currentStep,steps}) =>{
    return(
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
    )
}

export default ProcessBar