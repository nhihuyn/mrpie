import React, { useState, useEffect } from 'react';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import promotion from '../../../assets/images/promotion.jpg';


const Promotion: React.FC = () => {
 
  const { t } = useTranslation();

  return (

    <div className="intro-container min-h-screen">
      <div className="breadcrumb-container bg-black text-white p-4">
        <p>{t('Home')} <RightOutlined className="text-sm" /> {t('Event')} <RightOutlined className="text-sm" /> <strong> {t('Detail')} </strong></p>
      </div>

      <div className="title-container relative">
       <h1 className="mt-8 ml-10 font-bold text-sm">{t('EVENT')}</h1>

        <div className=" inset-x-0 mx-10 mt-4 py-4 bottom-0 bg-orange-50 border-t-2 border-black text-sm text-black">
            <p className='ml-3'>{t('Promotion')}</p>
            <p className='ml-3'>2024.28.02 ~ 2021.28.03</p>
        </div>

         <div className="flex flex-col items-center">
            
            <img src={promotion} alt="imgae" className="md:w-1/4 md:h-4/5 object-cover mt-6 mb-4"/>
            </div>
            
            <div className="text-left mt-10 ml-8 md:ml-40 ">
                <p >Tên sự kiện: <span className="font-normal">TÊN SỰ KIỆN PROMOTION</span></p>
                <p >Sản phẩm: <span className="font-normal">Bánh Chicken mushroom & cheese</span></p>
                <p >Thời hạn sự kiện: <span className="font-normal">7 ngày</span></p>
                <p >Thời gian tổ chức sự kiện: <span className="font-normal">2024-28-01</span></p>
                <p >Ghi chú: <span className="font-normal">Một số ghi chú về thông tin sự kiện, và cách lấy mã giảm giá như thế nào</span></p>
            </div>
        </div>
      </div>
      




     

   );
};

export default Promotion;