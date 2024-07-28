// components/form/index.tsx

import { Form, Button } from 'antd';
import Description from './Description';
import List from './List';
import { QnA } from '@/types/qna';

interface QnAFormProps {
    data: QnA[];
    onFinnish?: (values: any) => void;
    }

const QnAForm = ({ data, onFinnish }: QnAFormProps) => {
  const [form] = Form.useForm();

  const onFinish = (values : any) => {
    if (onFinnish) {
      onFinnish(values);
    }
    // Add your form submission logic here
  };

  const renderField = (item : QnA) => {
    if (item.answer === 'Description') {
      return <Description />;
    }
    if (item.answer === 'List') {
      return <List />;
    }
    return null;
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} style={{maxWidth:"800px", margin: '0 auto' }}>
      {data.map(item => (
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default QnAForm;
