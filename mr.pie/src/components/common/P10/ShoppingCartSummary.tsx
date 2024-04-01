import { FunctionComponent } from "react";

const ShoppingCartSummary: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end py-0 px-[58px] text-center text-sm text-character-primary-85 font-body-regular mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="w-[276px] flex flex-col items-start justify-start gap-[28.9px]">
        <div className="self-stretch flex flex-row items-start justify-end">
          <div className="w-[168px] flex flex-row items-start justify-start">
            <div className="rounded-sm overflow-hidden flex flex-row items-start justify-start p-1.5">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/left.svg"
              />
            </div>
            <div className="flex-1 rounded-sm overflow-hidden flex flex-row items-start justify-start py-px px-[7px] text-primary-6 border-[1px] border-solid border-primary-6">
              <div className="w-2 relative leading-[22px] font-medium inline-block shrink-0 min-w-[8px]">
                1
              </div>
            </div>
            <div className="rounded-sm overflow-hidden flex flex-row items-start justify-start py-px px-2">
              <div className="w-2 relative leading-[22px] inline-block min-w-[8px]">
                2
              </div>
            </div>
            <div className="rounded-sm overflow-hidden flex flex-row items-start justify-start py-px px-2">
              <div className="w-2 relative leading-[22px] inline-block min-w-[8px]">
                3
              </div>
            </div>
            <div className="rounded-sm overflow-hidden flex flex-row items-start justify-start py-px px-2">
              <div className="w-2 relative leading-[22px] inline-block min-w-[8px]">
                4
              </div>
            </div>
            <div className="rounded-sm overflow-hidden flex flex-row items-start justify-start py-px px-2">
              <div className="w-2 relative leading-[22px] inline-block min-w-[8px]">
                5
              </div>
            </div>
            <div className="rounded-sm overflow-hidden flex flex-row items-start justify-start p-1.5">
              <img
                className="h-3 w-3 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/right.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[265px] relative text-xl leading-[22px] text-black text-left inline-block mq450:text-base mq450:leading-[18px]">
          <p className="m-0">Tạm tính: 180.000 vnd</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            <b>{`Tổng cộng: 180.000 vnd `}</b>
          </p>
        </div>
        <div className="w-[231px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
          <button className="cursor-pointer py-[7.4px] px-5 bg-dust-red-4 flex-1 rounded-11xl shadow-[0px_2px_0px_rgba(0,_0,_0,_0.04)] overflow-hidden flex flex-row items-start justify-center gap-[10px] z-[1] border-[1px] border-solid border-character-danger">
            <div className="h-3.5 bg-hitbox overflow-hidden hidden flex-col items-center justify-center">
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-cover"
                alt=""
              />
            </div>
            <div className="w-[57px] relative text-sm leading-[24px] font-semibold font-body-regular text-character-primaryinverse text-center inline-block min-w-[57px]">
              Đặt hàng
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartSummary;
