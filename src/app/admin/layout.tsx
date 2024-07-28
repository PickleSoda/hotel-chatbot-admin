'use client';

import { Layout, Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useState } from 'react';

const { Header, Content, Sider } = Layout;

const AdminLayout = ({ children }: { children: any }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const menuItems = [
    { key: '1', label: 'Chat', href: '/admin/chat' },
    // { key: '2', label: 'Users', href: '/admin/users' },
    { key: '3', label: 'QnA', href: '/admin/qna' },
    // { key: '4', label: 'Hotels', href: '/admin/hotels' },
    { key: '5', label: 'Hotel Form', href: '/admin/hotel-form' },
  ];

  const renderMenu = () => (
    <Menu theme="dark" mode="inline" >
      <Menu.Item key={0} style={{ fontWeight: "800", fontSize: "16px" }}>
        <Link href={"/admin"}>Dashboard</Link>
      </Menu.Item>
      {menuItems.map(item => (
        <Menu.Item key={item.key}>
          <Link href={item.href}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh', }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          if (broken) {
            setDrawerVisible(false);
          }
        }}
        style={{ display: drawerVisible ? 'none' : 'block' }}
      >
        {renderMenu()}
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <div style={{ flex: 1, textAlign: 'center' }}>Admin Panel</div>
        </Header>
        <Content style={{ margin: '0px', height: "calc(100vh - 80px)", overflowY: "scroll", padding: '16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
