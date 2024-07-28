"use client";
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Button, Input, List, message } from 'antd';
import axios from 'axios';

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const mutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await axios.post('/api/chat', { message });
      return response.data.kwargs.content;
    },
    onSuccess: (data) => {
      setMessages((prevMessages) => [...prevMessages, `You: ${inputValue}`, `Bot: ${data}`]);
      setInputValue('');
    },
    onError: () => {
      message.error('Failed to send message');
    },
  });

  const handleSend = () => {
    if (inputValue.trim()) {
      mutation.mutate(inputValue.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !mutation.isPending) {
      handleSend();
    }
  };

  return (
    <>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <List
          bordered
          dataSource={messages}
          renderItem={(msg) => (
            <List.Item>
              <span>{msg}</span>
            </List.Item>
          )}
          style={{ marginBottom: '20px', height: 'calc(100vh - 300px)', overflowY: 'auto' }}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here..."
            style={{ marginBottom: '10px', flex: 1 }}
            disabled={mutation.isPending}
          />
          <Button
            type="primary"
            onClick={handleSend}
            loading={mutation.isPending}
            disabled={mutation.isPending}
            style={{ marginLeft: '10px' }}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
