import React, { FunctionComponent } from "react";
import { useTranslation } from 'react-i18next';
import { RightOutlined } from '@ant-design/icons';
import BackGroundColor from "../../components/common/P10/BackGroundColor";
import TotalPrice from "../../components/common/P10//TotalPrice";
import ShoppingCartSummary from "../../components/common/P10//ShoppingCartSummary";

const CartDetail: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    
    <div className="intro-container  min-h-screen">
      <div className="breadcrumb-container bg-black text-sm text-white p-4">
      <p>{t('Home')}</p>
      </div>
      <div className="title-container">
        <h1 className="mt-8 ml-10 text-2xl">{t('GIỎ HÀNG MUA SẮM')}</h1>
        
      
      <section className="w-full flex flex-row items-start justify-end py-0 px-[31px] box-border max-w-full text-left text-[24px] text-black font-body-regular">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-2.5 gap-[20px] mq750:flex-wrap">
            
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
  </div>
  
  );
};

export default CartDetail;
