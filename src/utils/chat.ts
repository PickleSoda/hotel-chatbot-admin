import { createLangchainAgent } from "@/lib/langchain";
import { getPineconeContext } from "@/lib/pinecone/getContext";

const handleQuery = async (query: string, indexName: string) => {
  const { openai } = await createLangchainAgent(indexName);

  // Get context from Pinecone
  const context = await getPineconeContext(query, indexName);

  console.log(`Context: ${context}`);  

  // Construct the prompt with context
  const prompt = `You are a hotel assistant, please be concise kind and fun, answer from context as much as you can \n Context: ${context}\n\nQuestion: ${query}\nAnswer:`;

  // Generate the response from OpenAI
  const response = await openai.invoke(prompt);

  return response;
};

export { handleQuery };
