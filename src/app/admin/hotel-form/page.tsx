"use client";
import { useQuery} from '@tanstack/react-query';
import { fetchQnAs } from '@/services/qnaService';
import { Spin } from 'antd';
import QnAForm from '@/components/Form';
import { QnA } from '@/types/qna';
import {submitHotelForm} from '@/services/hotelFormService';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
const HotelFormPage = () => {
    const { data: qnas, isLoading } = useQuery<QnA[], Error>({
        queryKey: ['qnas'],
        queryFn: fetchQnAs,
      });
      const [formData, setFormData] = useState<Record<string, string | string[]>>({
        "What are the best local restaurants for trying regional cuisine?": ["It depends on several factors such as price, duration, and personal taste. Here are some of our suggestions:", "Bip Bop restaurant is one of the best ones", "Ching chong is the most expensive"],
        "Can I request an extra bed or crib?": "Yes, extra crib is available"
      });

      const mutation = useMutation<void, Error, Record<string, string | string[]>>({
        mutationFn: submitHotelForm,
        onSuccess: () => {
          console.log('Form processed successfully');
        },
        onError: (error) => {
          console.error('Error processing form:', error);
        },
      });

  const onFinnish = (values: any) => {
    console.log('onFinnish', values);
    mutation.mutate(formData);
  }
  if (isLoading || !qnas) {
    return <Spin />;
  }

  return <QnAForm data={qnas} onFinnish={onFinnish} />;
};

export default HotelFormPage;
