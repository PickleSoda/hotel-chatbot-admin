import {setContext} from '@/lib/pinecone/setContext';

export const processHotelForm = async (formData: Record<string, string | string[]>) => {
    try {
        await setContext(formData, "hotel-management");
    }
    catch (error) {
        console.error(error);
        throw new Error('Error processing form');
    }
};