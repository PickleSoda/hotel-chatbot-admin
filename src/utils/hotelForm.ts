import { setContext } from '@/lib/pinecone/setContext';

export const processHotelForm = async (formData: Record<string, string | string[]>) => {
  try {
    console.log('Processing form data:', formData);
    // Filter out items with null values
    const filteredFormData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== null && value !== '')
    );

    // Check if the filteredFormData is empty
    if (Object.keys(filteredFormData).length === 0) {
      throw new Error('No valid data to process');
    }


    await setContext(filteredFormData, 'hotel-management');
  } catch (error) {
    console.error(error);
    throw new Error('Error processing form');
  }
};
