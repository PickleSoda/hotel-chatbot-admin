import { QnA } from '../types/qna';

const API_URL = '/api/qna';

export const fetchQnAs = async (): Promise<QnA[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch QnAs');
  }
  return response.json();
};

export const addQnA = async (newQnA: Omit<QnA, 'id' | 'createdAt' | 'updatedAt'>): Promise<QnA> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newQnA),
  });
  if (!response.ok) {
    throw new Error('Failed to add QnA');
  }
  return response.json();
};

export const updateQnA = async (updatedQnA: QnA): Promise<QnA> => {
  const response = await fetch(`${API_URL}/${updatedQnA.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedQnA),
  });
  if (!response.ok) {
    throw new Error('Failed to update QnA');
  }
  return response.json();
};

export const deleteQnA = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete QnA');
  }
};
