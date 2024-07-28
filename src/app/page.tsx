"use client";
import { Layout, Menu, Button, Typography, Row, Col, Card } from 'antd';
import Link from 'next/link';
import { ArrowUpOutlined, ClockCircleOutlined, SecurityScanOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link href="/admin">Go to Admin</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64, backgroundColor: '#f0f2f5' }}>
        <div style={{ padding: 48, minHeight: 380, }}>
          <Row justify="center" align="middle" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <Col span={24}>
              <Title>Elevate Customer Support with Our Chatbot</Title>
              <Paragraph>
                Our chatbot seamlessly handles customer queries, allowing you to create custom agents, make API calls to third-party services, and track success rates and helpfulness indicators—all tailored for your business needs.
              </Paragraph>
              <Button type="primary" size="large">
                Get Started
              </Button>
            </Col>
          </Row>
          <Row gutter={[24, 24]} justify="center" align="middle" style={{ textAlign: 'center' }}>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable style={{ padding: '20px' }}>
                <ClockCircleOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
                <Title level={3}>Resolve Queries Quickly</Title>
                <Paragraph>
                  Cut down response times drastically with our efficient AI agents—no more waiting for help.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable style={{ padding: '20px' }}>
                <ArrowUpOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
                <Title level={3}>Integration Ready</Title>
                <Paragraph>
                  Our chatbot integrates effortlessly with e-commerce platforms, private services, casinos, and more.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card hoverable style={{ padding: '20px' }}>
                <SecurityScanOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
                <Title level={3}>Robust and Secure</Title>
                <Paragraph>
                  Your data security is our priority. Our chatbot uses advanced security measures to protect your information.
                </Paragraph>
              </Card>
            </Col>
          </Row>
          <Row justify="center" align="middle" style={{ textAlign: 'center', marginTop: '40px' }}>
            <Col span={24}>
              <Title level={2}>Instant Setup, No Custom Code</Title>
              <Paragraph>
                Deploy our chatbot with ease—create custom agents, integrate with third-party services, and start tracking performance metrics instantly.
              </Paragraph>
            </Col>
          </Row>
          <Row justify="center" align="middle" style={{ textAlign: 'center', marginTop: '40px' }}>
            <Col span={24}>
              <Title level={2}>Get in Touch</Title>
              <Paragraph>
                Book a demo or schedule a call to learn more about our chatbot.
              </Paragraph>
              <Button type="primary" size="large">
                Book Now
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
