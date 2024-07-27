'use client';

import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Header, Content, Sider } = Layout;

const AdminLayout = ({ children }:{children: any}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link href="/admin">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/admin/users">Users</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
