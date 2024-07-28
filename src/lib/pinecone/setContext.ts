import { initializePinecone } from '@/lib/pinecone';
import { OpenAIEmbeddings } from '@langchain/openai';
import { CharacterTextSplitter } from 'langchain/text_splitter';

const embeddings = new OpenAIEmbeddings({
  apiKey: process.env.OPENAI_API_KEY as string,
  batchSize: 512,
  model: 'text-embedding-3-small',
});

export const setContext = async (data: Record<string, string | string[]>, dataIndex: string) => {
  const index = await initializePinecone(dataIndex);

  const qnaArray = Object.entries(data).map(([question, answer]) => {
    if (Array.isArray(answer)) {
      return answer.map((a) => ({ question, answer: a }));
    }
    return [{ question, answer }];
  }).flat();

  for (const { question, answer } of qnaArray) {
    const combinedText = `${question}: ${answer}`;
    const textSplitter = new CharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 0,
    });
    const chunks = await textSplitter.splitText(combinedText);
    const vectors = await embeddings.embedDocuments(chunks);

    const upserts = vectors.map((vector, idx) => ({
      id: `${question}-${idx}`,
      values: vector,
      metadata: {
        question,
        answer,
        chunk: idx,
      },
    }));
    console.log(upserts);

    await index.upsert(upserts);
  }
};