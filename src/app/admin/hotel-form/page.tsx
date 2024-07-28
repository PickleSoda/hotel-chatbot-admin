"use client";
import { useQuery} from '@tanstack/react-query';
import { fetchQnAs } from '@/services/qnaService';
import { Spin } from 'antd';
import QnAForm from '@/components/Form';
import { QnA } from '@/types/qna';

const HotelFormPage = () => {
    const { data: qnas, isLoading } = useQuery<QnA[], Error>({
        queryKey: ['qnas'],
        queryFn: fetchQnAs,
      });

  if (isLoading || !qnas) {
    return <Spin />;
  }

  return <QnAForm data={qnas} />;
};

export default HotelFormPage;
