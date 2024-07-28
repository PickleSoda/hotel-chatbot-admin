"use client";
import { Button, Input, Space } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

interface ListProps {
    value?: string[];
    onChange: (value: string[]) => void;
    }

const List = ({ value = [], onChange }: ListProps) => {

  const [items, setItems] = useState(value||['']);

  const handleAdd = () => {
    const newItems = [...items, ''];
    setItems(newItems);
    onChange(newItems);
  };

  const handleRemove = (index : number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    onChange(newItems);
  };

  const handleChange = (index:number, newValue: string) => {
    const newItems = items.map((item, i) => (i === index ? newValue : item));
    setItems(newItems);
    onChange(newItems);
  };

  return (
    <>
      {items.map((item, index) => (
        <Space key={index} direction="vertical" style={{ width: '100%' }}>
          <TextArea
            value={item}
            onChange={e => handleChange(index, e.target.value)}
            rows={3}
          />
          <Button onClick={() => handleRemove(index)} >Remove</Button>
        </Space>
      ))}
      <Button onClick={handleAdd} style={{ marginTop: '10px' }}>Add</Button>
    </>
  );
};

export default List;
