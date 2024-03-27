// import React from 'react';
// import { Col, Row } from 'antd';
// import './footer.css'
// import { useTranslation } from 'react-i18next';
// import { Typography } from 'antd';
// const { Title } = Typography;

// const Footer: React.FC = () => {
//    const { t } = useTranslation();
//    return (
//     <Row gutter={16} className="justify-between p-10">
//     <Col span={3}>
//         <Title level={5}>{t('New')}</Title>
//         <Title level={5}>{t('Cake')}</Title>
//         <Title level={5}>{t('VegetarianCake')}</Title>
//         <Title level={5}>{t('CakeOfDay')}</Title>
//         <Title level={5}>{t('SaltineCrackers')}</Title>
//         <Title level={5}>{t('SausageCake')}</Title>
//         <Title level={5}>{t('AccompanyingCake')}</Title>
//     </Col>
//     <Col span={3}>
//         <Title level={4}>{t('Store')}</Title>
//         <Title level={5}>{t('FindStore')}</Title>

//     </Col>
//     <Col span={3}>
//         <Title level={4}>{t('Event')}</Title>
//         <Title level={5}>{t('Event')}</Title>
//     </Col>
//     <Col span={3}>
//         <Title level={4}>{t('BrandStory')}</Title>
//         <Title level={5}>{t('Brand')}</Title>
//     </Col>
//     <Col span={3}>
//         <Title level={4}>{t('AboutMe')}</Title>
//         <Title level={5}>{t('Info')}</Title>

//     </Col>
//   </Row>
// );
// }
// export default Footer
import React from "react";

import "./footer.css";
import { useTranslation } from "react-i18next";
// import { Typography } from "antd";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  // const { Title } = Typography;
  const footerContent = [
    {
      id: 1,
      title: "Menu",
      submenu: [
        {
          title: t("New"),
          path: `/`,
        },
        {
          title: t("VegetarianCake"),
          path: `/`,
        },
        {
          title: t("CakeOfDay"),
          path: `/`,
        },
        {
          title: t("SaltineCrackers"),
          path: `/`,
        },
        {
          title: t("SausageCake"),
          path: `/`,
        }
      ],
    },

    {
      id: 2,
      title: "Store",
      submenu: [
        {
          title: t("Find a store"),
          path: `/`,
        },
      ],
    },
    {
      id: 3,
      title: t("Event"),
      submenu: [
        {
          title: t("Event"),
          path: `/`,
        },
      ],
    },
    {
      id: 4,
      title: t("Brand story"),
      submenu: [
        {
          title: t("Brand"),
          path: `/`,
        }
      ],
    },
    {
      id: 5,
      title: t("Customer service center"),
      submenu: [
        {
          title: "Youtube",
          path: `/`,
        },
        {
          title: "Facebook",
          path: `/`,
        },
        {
          title: "Integram",
          path: `/`,
        }
      ],
    },
  ];
  return (
    <footer className="bg-red-950 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16 ml-4">
          {footerContent.map((el, index) => (
            <div key={index}>
              <h1 className=" font-bold text-2xl mb-4">{t(el.title)}</h1>
              <div>
                {el.submenu.map((e, i) => (
                  <span className="block mb-2" key={i}>
                    <span className="text-sm">{e.title}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
