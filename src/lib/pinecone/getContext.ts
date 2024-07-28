import { createLangchainAgent } from '../langchain';

const getPineconeContext = async (query: string, indexName: string) => {
  const { pineconeIndex, embeddings } = await createLangchainAgent(indexName);

  // Generate embedding for the query
  const queryEmbedding = await embeddings.embedDocuments([query]);

  // Use Pinecone to find similar embeddings
  const queryResult = await pineconeIndex.query({
    topK: 5, // Number of similar vectors to retrieve
    vector: queryEmbedding[0],
    includeValues: true,
    includeMetadata: true,
  });

  // Extract the context from the results
  const context = queryResult.matches.map((match: any) => match.metadata.answer).join('\n');

  return context;
};

export { getPineconeContext };
