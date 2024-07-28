import { OpenAI } from '@langchain/openai';
import { initializePinecone } from './pinecone';

const createLangchainAgent = async () => {
  const pineconeIndex = await initializePinecone();

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
    model: 'gpt-4o-mini',
  });

//   const agent = new openai.Agent({
//     vectorStore: pineconeIndex,
//   });

//   return agent;
return openai;
};

export { createLangchainAgent };
