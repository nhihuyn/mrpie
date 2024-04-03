import { FunctionComponent } from "react";
import BackGroundColor from "../components/BackGroundColor";
import TotalPrice from "../components/TotalPrice";
import ShoppingCartSummary from "../components/ShoppingCartSummary";

const CartDetail: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-character-primaryinverse flex flex-col items-end justify-start pt-7 px-0 pb-[42.2px] box-border gap-[26px] tracking-[normal] text-center text-xs text-character-primaryinverse font-footnote-system-monospace">
      <div className="w-[23px] h-1.5 bg-hitbox hidden flex-col items-center justify-center">
        <div className="rounded-[100px] bg-polar-green-6 h-4 overflow-hidden shrink-0 hidden flex-row items-center justify-center py-0 px-1 box-border">
          <div className="h-5 w-2 relative leading-[20px] flex items-end justify-center shrink-0">
            11
          </div>
        </div>
      </div>
      <BackGroundColor />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border max-w-full text-left text-sm font-body-regular">
        <div className="flex-1 bg-gray-100 flex flex-row items-start justify-start pt-[15px] px-[42px] pb-[7px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-12 w-[1200px] relative bg-gray-100 hidden max-w-full" />
          <div className="h-[26px] w-full pl-14 relative leading-[22px] font-medium inline-block shrink-0 z-[1]">
            Giỏ hàng
          </div>
        </div>
      </div>
      <section className="w-full flex flex-row items-start justify-end py-0 px-[31px] box-border max-w-full text-left text-[24px] text-black font-body-regular">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-2.5 gap-[20px] mq750:flex-wrap">
            <h2 className="m-0 pl-2 h-[46px] w-[274px] relative text-inherit leading-[22px] font-medium font-inherit inline-block shrink-0 mq450:text-[19px] mq450:leading-[18px]">
              Giỏ hàng mua sắm
            </h2>
            <div className="w-[141px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border text-xl">
              <h3 className="m-0 self-stretch h-[43px] relative text-inherit leading-[22px] font-medium font-inherit inline-block shrink-0 mq450:text-base mq450:leading-[18px]">
                2 sản phẩm
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-row items-start justify-start pt-0 px-[22px] pb-[5px] box-border max-w-full text-center text-sm">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
              <div className="w-[209px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <div className="w-[145px] h-[37px] relative leading-[22px] font-medium inline-block shrink-0">
                  CHI TIÊT SẢN PHẨM
                </div>
              </div>
              <div className="w-[395px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
                  <div className="h-[37px] w-[145px] relative leading-[22px] font-medium inline-block shrink-0">
                    SỐ LƯỢNG
                  </div>
                  <div className="h-[37px] w-[145px] relative leading-[22px] font-medium inline-block shrink-0">
                    GIÁ
                  </div>
                </div>
              </div>
              <div className="h-[37px] w-[145px] relative leading-[22px] font-medium inline-block shrink-0">
                TỔNG CỘNG
              </div>
            </div>
          </div>
          <TotalPrice productOptions="2" vnd="60.000 vnd" />
          <TotalPrice
            productOptions="4"
            vnd="120.000 vnd"
            propPadding="0px 2px 30px"
            propBackgroundColor="rgba(248, 229, 64, 0.4)"
            propPadding1="21px 35px 0px 10px"
          />
          <ShoppingCartSummary />
        </div>
      </section>
    </div>
  );
};

export default CartDetail;
