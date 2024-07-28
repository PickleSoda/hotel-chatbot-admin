

import axios from 'axios';

export const submitHotelForm = async (formData: Record<string, string | string[]>) => {
  const response = await axios.post('/api/hotel-form', formData);
  return response.data;
};
