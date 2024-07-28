// components/form/index.tsx

import { useState } from 'react';
import { Form, Button, Spin, message, notification } from 'antd';
import Description from './Description';
import List from './List';
import { QnA } from '@/types/qna';

interface QnAFormProps {
  data: QnA[];
  onFinish?: (values: any) => void;
}

const QnAForm = ({ data, onFinish }: QnAFormProps) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFinish = async (values: any) => {
    setLoading(true);
    try {
      if (onFinish) {
        await onFinish(values);
      }
      message.success('Form processed successfully');
    } catch (error) {
      console.error(error);
      notification.error({
        message: 'Submission Error',
        description: 'There was an error processing the form. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };


  const renderField = (item: QnA) => {
    if (item.answer === 'Description') {
      return <Description/>;
    }
    if (item.answer === 'List') {
      return <List />;
    }
    return null;
  };

  return (
    <Spin spinning={loading}>
      <Form form={form} layout="vertical" onFinish={handleFinish} style={{ maxWidth: '800px', margin: '0 auto' }}>
        {data.map((item) => (
          <Form.Item
            key={item.id}
            name={item.question}
            label={item.question}
            initialValue={''}
          >
            {renderField(item)}
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default QnAForm;
