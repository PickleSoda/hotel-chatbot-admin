import { prisma } from '../../lib/prisma';

export default async function handler(req:any, res:any) {
  if (req.method === 'GET') {
    const qnas = await prisma.qna.findMany();
    res.status(200).json(qnas);
  } else if (req.method === 'POST') {
    const { question, answer } = req.body;
    const newQna = await prisma.qna.create({
      data: {
        question,
        answer,
      },
    });
    res.status(201).json(newQna);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
