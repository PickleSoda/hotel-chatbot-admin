import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});

const indexName = 'ionnow';

export const initializePinecone = async () => {
  const index = pinecone.Index(indexName);
  return index;
};
