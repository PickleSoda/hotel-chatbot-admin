const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const qnaData = [
  { question: 'What is AI?', answer: 'AI stands for Artificial Intelligence.' },
  { question: 'What is Langchain?', answer: 'Langchain is a framework for building language model applications.' },
  // Add more Q&A data here
];

async function main() {
  for (const data of qnaData) {
    await prisma.Qna.create({
      data,
    });
  }
}

main()
  .then(() => {
    console.log('Data seeded successfully');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
