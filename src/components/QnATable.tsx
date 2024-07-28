"use client";
import { useState } from 'react';
import { Table, Button, Modal, Form, Input, Popconfirm } from 'antd';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchQnAs, addQnA, updateQnA, deleteQnA } from '../services/qnaService';
import { QnA } from '../types/qna';

const QnATable = () => {
  const queryClient = useQueryClient();
  const { data: qnas, isLoading } = useQuery<QnA[], Error>({
    queryKey: ['qnas'],
    queryFn: fetchQnAs,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQnA, setCurrentQnA] = useState<QnA | null>(null);
  const [form] = Form.useForm();

  const addMutation = useMutation<QnA, Error, Omit<QnA, 'id' | 'createdAt' | 'updatedAt'>>({
    mutationFn: addQnA,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['qnas'] });
      setIsModalOpen(false);
    },
  });

  const updateMutation = useMutation<QnA, Error, QnA>({
    mutationFn: updateQnA,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['qnas'] });
      setIsModalOpen(false);
      setCurrentQnA(null);
    },
  });

  const deleteMutation = useMutation<void, Error, number>({
    mutationFn: deleteQnA,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['qnas'] });
    },
  });

  const handleAdd = () => {
    form.validateFields().then(values => {
      if (currentQnA) {
        updateMutation.mutate({ ...currentQnA, ...values });
      } else {
        addMutation.mutate(values);
      }
      form.resetFields();
    });
  };

  const handleEdit = (qna: QnA) => {
    setCurrentQnA(qna);
    form.setFieldsValue(qna);
    setIsModalOpen(true);
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Question', dataIndex: 'question', key: 'question' },
    { title: 'Answer', dataIndex: 'answer', key: 'answer' },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: QnA) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>Edit</Button>
          <Popconfirm
            title="Are you sure delete this Q&A?"
            onConfirm={() => deleteMutation.mutate(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>Delete</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setIsModalOpen(true)}>
        Add Q&A
      </Button>
      <Table columns={columns} dataSource={qnas} rowKey="id" loading={isLoading} />

      <Modal
        title={currentQnA ? "Edit Q&A" : "Add Q&A"}
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setCurrentQnA(null);
          form.resetFields();
        }}
        onOk={handleAdd}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="question"
            label="Question"
            rules={[{ required: true, message: 'Please input the question!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="answer"
            label="Answer"
            rules={[{ required: true, message: 'Please input the answer!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default QnATable;
