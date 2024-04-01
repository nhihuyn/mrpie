import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TotalPriceType = {
  productOptions?: string;
  vnd?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding1?: CSSProperties["padding"];
};

const TotalPrice: FunctionComponent<TotalPriceType> = ({
  productOptions,
  vnd,
  propPadding,
  propBackgroundColor,
  propPadding1,
}) => {
  const totalPriceStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const separatorStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding1,
    };
  }, [propBackgroundColor, propPadding1]);

  return (
    <div
      className="w-full flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-center text-sm text-black font-body-regular"
      style={totalPriceStyle}
    >
      <div
        className="flex-1 bg-lightblue overflow-hidden flex flex-row items-start justify-between pt-2 pb-[9px] pr-[33px] pl-3 box-border max-w-full gap-[20px] z-[1] mq1050:flex-wrap"
        style={separatorStyle}
      >
        <div className="w-[253px] flex flex-row items-start justify-start gap-[11px] text-left">
          <div className="h-[79px] w-[83px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/xm-than-v-mu-be-n-gin--vng-trn-s-kin-c-vua-biu-trng-1-6@2x.png"
            />
          </div>
          <div className="h-[95px] flex-1 relative leading-[22px] font-medium inline-block">
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Pie Táo
            </p>
            <p className="[margin-block-start:0] [margin-block-end:10px]">
              Phân loại bánh
            </p>
            <button className="m-0 text-crimson cursor-pointer bg-transparent">Xóa</button>
          </div>
        </div>
        <div className="w-[78px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border text-character-primaryinverse">
          <div className="self-stretch rounded-xl bg-dust-red-4 overflow-hidden flex flex-row items-start justify-start py-0 px-1 gap-[1px] border-[1px] border-solid border-firebrick">
            <div className="w-[17px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch h-[13px] relative leading-[22px] font-medium inline-block shrink-0 cursor-pointer">
                -
              </div>
            </div>
            <div className="h-[30px] flex flex-col items-start justify-start py-px pr-1.5 pl-0 box-border">
              <img
                className="w-px h-[30px] relative"
                loading="lazy"
                alt=""
                src="/line.svg"
              />
            </div>
            <div className="w-[21px] flex flex-col items-start justify-start pt-[5px] pb-0 pr-[3px] pl-0 box-border">
              <div className="self-stretch h-[15px] relative leading-[22px] font-medium inline-block shrink-0">
                {productOptions}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
              <img className="w-px h-[30px] relative" alt="" src="/line.svg" />
            </div>
            <div className="w-3.5 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch h-[13px] relative leading-[22px] font-medium inline-block shrink-0 cursor-pointer">
                +
              </div>
            </div>
          </div>
        </div>
        <div className="w-40 flex flex-col items-start justify-start pt-[18px] pb-0 pr-[29px] pl-0 box-border">
          <div className="self-stretch h-[27px] relative leading-[22px] font-medium inline-block shrink-0">
            30.000 vnd
          </div>
        </div>
        <div className="w-[131px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
          <div className="self-stretch h-[27px] relative leading-[22px] font-medium inline-block shrink-0">
            {vnd}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
