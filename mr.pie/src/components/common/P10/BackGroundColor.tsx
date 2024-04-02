import { FunctionComponent } from "react";

const BackGroundColor: FunctionComponent = () => {
  return (
    <header className="w-[1161px] flex flex-row items-start justify-end py-0 px-[78px] box-border max-w-full text-center text-base text-gray-200 font-varela-round mq1125:pl-[39px] mq1125:pr-[39px] mq1125:box-border">
      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border gap-[25px] max-w-full">
        <div className="h-[67px] w-[65px] relative bg-cover bg-no-repeat bg-[top]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
            alt=""
            src="
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
            alt=""
            src=""
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[2]"
            loading="lazy"
            alt=""
            src=""
          />
        </div>
        <div className="w-[129px] flex flex-col items-start justify-start pt-[27px] pb-0 pr-[3px] pl-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="self-stretch h-0 relative inline-block whitespace-nowrap">
                Trang chủ
              </div>
            </div>
            <img
              className="h-3 w-[19px] relative overflow-hidden shrink-0"
              alt=""
              src="/caretdown.svg"
            />
          </div>
        </div>
        <div className="w-[134px] flex flex-col items-start justify-start pt-[27px] pb-0 pr-[18px] pl-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="self-stretch h-0 relative inline-block whitespace-nowrap">
                Thực đơn
              </div>
            </div>
            <img
              className="h-3 w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src="/caretdown-1.svg"
            />
          </div>
        </div>
        <div className="w-[125px] flex flex-col items-start justify-start pt-[27px] pb-0 pr-[26px] pl-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[9px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="self-stretch h-0 relative inline-block whitespace-nowrap">
                Liên hệ
              </div>
            </div>
            <img
              className="h-3 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/caretdown-2.svg"
            />
          </div>
        </div>
        <div className="w-24 flex flex-col items-start justify-start pt-[27px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[6px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="self-stretch h-0 relative inline-block whitespace-nowrap">
                Sự kiện
              </div>
            </div>
            <img
              className="h-3 w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src="/caretdown-1.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[27px] pb-0 pr-[30px] pl-0">
          <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="self-stretch h-0 relative inline-block whitespace-nowrap">
                Giới thiệu
              </div>
            </div>
            <img
              className="h-3 w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src="/caretdown-1.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2 pb-0 pr-6 pl-0">
          <img
            className="w-[52px] h-[47px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image-56@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0 text-left text-character-primaryinverse font-varela">
          <div className="flex flex-row items-start justify-start relative">
            <img
              className="h-[33px] w-[35px] absolute !m-[0] bottom-[-25px] left-[-25px]"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="rounded-3xs bg-character-danger shadow-[0px_0px_0px_#fff] flex flex-row items-start justify-start pt-1.5 pb-[5px] pr-[3px] pl-[5px] z-[1]">
              <div className="h-5 w-5 relative rounded-3xs bg-character-danger shadow-[0px_0px_0px_#fff] hidden" />
              <div className="h-[9px] relative flex items-center min-w-[12px] z-[2]">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 text-left text-10xs text-character-primaryinverse font-footnote-system-monospace">
          <div className="h-[25px] relative leading-[20px] inline-block shrink-0 min-w-[3px] z-[1]">
            1
          </div>
        </div>
      </div>
    </header>
  );
};

export default BackGroundColor;
