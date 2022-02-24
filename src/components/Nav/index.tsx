import React, { useState } from 'react';

// antd
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// const { SubMenu } = Menu;

// internal
// import logo from './img/logo.png';
import logo from './img/logo.svg';

// Navigation Bar
export const Nav: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  const links: string[] = [
    'Home',
    'Explorer',
    'Projects',
    'Grants',
    'Documentation',
    'GitHub'
  ]

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {/* logo */}
      <img src={logo} alt="logo" />

      {/* menu items */}
      {links.map((link: string) => (
        <Menu.Item key={link}>
          {link}
        </Menu.Item>
      ))}
    </Menu>

  );
}