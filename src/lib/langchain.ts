import { OpenAI } from '@langchain/openai';
import { initializePinecone } from './pinecone';
import { OpenAIEmbeddings } from "@langchain/openai";

const createLangchainAgent = async (indexName: string) => {
  const pineconeIndex = await initializePinecone(indexName);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
    model: 'gpt-4o-mini',
  });

  const embeddings = new OpenAIEmbeddings({
    apiKey: process.env.OPENAI_API_KEY as string,
    batchSize: 512,
    model: "text-embedding-3-small",
  });

  return { openai, embeddings, pineconeIndex };
};

export { createLangchainAgent };
