import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});

export const initializePinecone = async (indexName:string) => {
  const index = pinecone.Index(indexName);
  return index;
};
