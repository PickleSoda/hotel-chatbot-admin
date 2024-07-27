import { prisma } from '../../lib/prisma';

export default async function handler(req:any, res:any) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const qna = await prisma.qna.findUnique({
      where: { id: Number(id) },
    });
    res.status(200).json(qna);
  } else if (req.method === 'PUT') {
    const { question, answer } = req.body;
    const updatedQna = await prisma.qna.update({
      where: { id: Number(id) },
      data: { question, answer },
    });
    res.status(200).json(updatedQna);
  } else if (req.method === 'DELETE') {
    await prisma.qna.delete({
      where: { id: Number(id) },
    });
    res.status(204).end(); // No Content
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
