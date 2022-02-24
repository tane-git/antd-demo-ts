import React, { useState } from 'react';

// antd
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// const { SubMenu } = Menu;

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
      {links.map((link: string) => (
        <Menu.Item key={link}>
          {link}
        </Menu.Item>
      ))}
      </Menu>

      // EXAMPLE from https://ant.design/components/menu/#components-menu-demo-horizontal

      // <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      //   <Menu.Item key="mail" icon={<MailOutlined />}>
      //     Home
      //   </Menu.Item>
      //   {/* <Menu.Item key="app" disabled icon={<AppstoreOutlined />}> */}
      //   <Menu.Item key="app" icon={<AppstoreOutlined />}>
      //     Explorer
      //   </Menu.Item>
      //   <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Projects">
      //     <Menu.ItemGroup title="Item 1">
      //       <Menu.Item key="setting:1">Option 1</Menu.Item>
      //       <Menu.Item key="setting:2">Option 2</Menu.Item>
      //     </Menu.ItemGroup>
      //     <Menu.ItemGroup title="Item 2">
      //       <Menu.Item key="setting:3">Option 3</Menu.Item>
      //       <Menu.Item key="setting:4">Option 4</Menu.Item>
      //     </Menu.ItemGroup>
      //   </SubMenu>
      //   <Menu.Item key="alipay">
      //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      //       Grants
      //     </a>
      //   </Menu.Item>
      //   <Menu.Item key={}>
      //     Documentation
      //   </Menu.Item>
      // </Menu>
    );
}