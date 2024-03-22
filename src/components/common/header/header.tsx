import React, { useState } from 'react';
import {  CaretDownOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import {
  AppstoreOutline,
  GlobalOutline,
  UserContactOutline,
  UnorderedListOutline,
  ShopbagOutline
} from 'antd-mobile-icons'

import LogoIcon from '../../../assets/images/logo.png';
import { Badge, TabBar } from 'antd-mobile'
import { useTranslation } from 'react-i18next';

import '../header/header.css'
const { Header: HeaderAnt } = Layout;


const Header: React.FC = () => {
  const { t } = useTranslation();
  const items: MenuProps['items'] = [
    {
      label: t('Home'),
      key: '1',
      itemIcon: <CaretDownOutlined />
      
    },
    {
      label: t('Menu'),
      key: '2',
      itemIcon: <CaretDownOutlined />,
    },
    {
      label: t('Contact'),
      key: '3',
      itemIcon: <CaretDownOutlined />,
    },
    {
      label: t('Event'),
      key: '4',
      itemIcon: <CaretDownOutlined />,
    },
    {
      label: t('AboutMe'),
      key: '5',
      itemIcon: <CaretDownOutlined />,
    },
  ];

  const tabs = [
    {
      key: '1',
      title: t('Home'),
      icon: <UnorderedListOutline />,
      badge: Badge.dot,
    },
    {
      key: '2',
      title: t('Menu'),
      icon: <AppstoreOutline />,
      badge: '5',
    },
    {
      key: '3',
      title: t('Event'),
      icon: <GlobalOutline />,
      badge: '99+',
    },
    {
      key: '4',
      title: t('Contact'),
      icon:<UserContactOutline />
    },
    {
      key: '5',
      title: t('AboutMe'),
      icon:<ShopbagOutline />
    },
  ]
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };


  return (
    <Layout>
    <HeaderAnt className="hidden md:flex items-center bg-white py-5">
      <img src={LogoIcon} alt='logo' className="w-12 h-12"/>
      <Menu className="w-full text-base" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      <div className="flex">
        <UserOutlined className="mr-5 text-2xl"/>
        <ShoppingCartOutlined className='text-2xl'/>
      </div>
    </HeaderAnt>
    <div className='md:hidden'>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item key={item?.key} icon={item?.icon} title={item?.title} />
          ))}
        </TabBar>
      </div>
    </Layout>
  )
};

export default Header;