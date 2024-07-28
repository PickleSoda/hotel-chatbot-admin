'use client';

// pages/admin/index.tsx

import { Layout, Menu, Breadcrumb, Row, Col, Card, Statistic } from 'antd';
import { UserOutlined, HomeOutlined, FileTextOutlined, SettingOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminPage = () => {
  return (
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Total Users"
                    value={1128}
                    prefix={<UserOutlined />}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Bookings Today"
                    value={93}
                    prefix={<CheckCircleOutlined />}
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card>
                  <Statistic
                    title="Pending Requests"
                    value={27}
                    prefix={<ClockCircleOutlined />}
                  />
                </Card>
              </Col>
            </Row>
            <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
              <Col span={24}>
                <Card title="Recent Activity">
                  <ul>
                    <li>User John Doe checked in at 3:00 PM</li>
                    <li>New booking from Jane Smith</li>
                    <li>Maintenance request from Room 204</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' , position:"absolute", bottom:"0px", left: "50%", transform: "translate(-50%, 0)"}}>Hotel Management Admin Panel ©2024 Created by Your Company</Footer>
      </Layout>
  );
};

export default AdminPage;
