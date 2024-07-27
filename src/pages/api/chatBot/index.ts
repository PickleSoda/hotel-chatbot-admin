import { PrismaClient } from "@prisma/client";
import { initializePinecone } from "../../../lib/pinecone";
import { createLangchainAgent } from "@langchain/community";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  const pineconeIndex = await initializePinecone();

  const qnaData = await prisma.qna.findMany();
  const documents = qnaData.map(
    ({ question, answer }: { question: string; answer: string | null }) => ({
      content: `${question} ${answer}`,
      metadata: { question, answer },
    })
  );

  await pineconeIndex.upsert({
    vectors: documents.map((doc: any, i: number) => ({
      id: `qna-${i}`,
      values: doc.content, // replace this with actual embeddings
      metadata: doc.metadata,
    })),
  });

  const agent = createLangchainAgent({ vectorStore: pineconeIndex });

  const response = await agent.generateResponse(query);

  return res.status(200).json({ response });
}
