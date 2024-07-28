"use client";
import { useQuery} from '@tanstack/react-query';
import { fetchQnAs } from '@/services/qnaService';
import { Spin } from 'antd';
import QnAForm from '@/components/Form';
import { QnA } from '@/types/qna';
import {submitHotelForm} from '@/services/hotelFormService';
import { useMutation } from '@tanstack/react-query';
const HotelFormPage = () => {
    const { data: qnas, isLoading } = useQuery<QnA[], Error>({
        queryKey: ['qnas'],
        queryFn: fetchQnAs,
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

  const onFinish = (values: any) => {
    console.log('Form data:', values);
    // Filter out items with null values
    const filteredFormData = Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== undefined && value !== '')
    );

    // Check if the filteredFormData is empty
    if (Object.keys(filteredFormData).length === 0) {
      throw new Error('No valid data to process');
    }

    console.log('Filtered form data:', filteredFormData);

    mutation.mutate(values);
  }
  if (isLoading || !qnas) {
    return <Spin />;
  }

  return <QnAForm data={qnas} onFinish={onFinish} />;
};

export default HotelFormPage;
