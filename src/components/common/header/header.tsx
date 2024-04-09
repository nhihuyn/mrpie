import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
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

import { logo } from '../../../assets/images/index';
import { Badge, TabBar } from 'antd-mobile'
import { useTranslation } from 'react-i18next';

import '../header/header.css'
const { Header: HeaderAnt } = Layout;


const Header: React.FC = () => {
  const location = useLocation();

  const getKeyFromPathname = (pathname) => {
    switch (pathname) {
      case '/':
        return 'home';
      case '/about':
        return 'about';
      case '/menu':
        return 'menu';
      case '/event':
        return 'event';
      case '/contact':
        return 'contact';
      default:
        return 'home';
    }
  };
  const selectedKey = getKeyFromPathname(location.pathname);

  const { t } = useTranslation();
  const items = [
    {
      label: t('Home'),
      key: 'home',
      itemIcon: <CaretDownOutlined />,
      path: '/'
      
    },
    {
      label: t('Menu'),
      key: 'menu',
      itemIcon: <CaretDownOutlined />,
      path: '/menu'
    },
    {
      label: t('Contact'),
      key: 'contact',
      itemIcon: <CaretDownOutlined />,
      path: '/contact'
    },
    {
      label: t('Event'),
      key: 'event',
      itemIcon: <CaretDownOutlined />,
      path: '/eventmenu'
    },
    {
      label: t('AboutMe'),
      key: 'aboutMe',
      itemIcon: <CaretDownOutlined />,
      path: '/aboutMe'
    },
  ];

  const tabs = [
    {
      key: '1',
      title: t('Home'),
      icon: <UnorderedListOutline />,
      badge: Badge.dot,
      path: '/'
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
  console.log(current)


  return (
    <Layout>

    <HeaderAnt className="hidden md:flex items-center bg-white py-12 border-b-solid" style={{ borderBottom: '1px solid #eaeaea'}}>
      <Link to={"/"}><img src={logo} alt='logo' className="w-20 h-30"/></Link>
      <Menu className="w-full text-lg" onClick={onClick} selectedKeys={[selectedKey]} mode="horizontal">
        {
            items.map((item, key) => (
              <Menu.Item key={item.key}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            
          ))
        }
      </Menu>

      <div className="flex">
        <Link to={"/login"}>
          <UserOutlined className="mr-5 text-2xl text-black"/>
        </Link>
        <Link to={"/cart"}>
          <ShoppingCartOutlined className="text-2xl text-black"/>
        </Link>
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