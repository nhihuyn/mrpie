import React from 'react';
import { Col, Row } from 'antd';
import './footer.css'
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';
const { Title } = Typography;

const Footer: React.FC = () => {
   const { t } = useTranslation();
   return (
    <Row gutter={16} className="justify-between p-10">
    <Col span={3}>
        <Title level={5}>{t('New')}</Title>
        <Title level={5}>{t('Cake')}</Title>
        <Title level={5}>{t('VegetarianCake')}</Title>
        <Title level={5}>{t('CakeOfDay')}</Title>
        <Title level={5}>{t('SaltineCrackers')}</Title>
        <Title level={5}>{t('SausageCake')}</Title>
        <Title level={5}>{t('AccompanyingCake')}</Title>
    </Col>
    <Col span={3}>
        <Title level={4}>{t('Store')}</Title>
        <Title level={5}>{t('FindStore')}</Title>
        
    </Col>
    <Col span={3}>
        <Title level={4}>{t('Event')}</Title>
        <Title level={5}>{t('Event')}</Title>
    </Col>
    <Col span={3}>
        <Title level={4}>{t('BrandStory')}</Title>
        <Title level={5}>{t('Brand')}</Title>
    </Col>
    <Col span={3}>
        <Title level={4}>{t('AboutMe')}</Title>
        <Title level={5}>{t('Info')}</Title>
   
    </Col>
  </Row>
);
}
export default Footer