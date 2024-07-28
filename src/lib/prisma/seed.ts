const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const qnaData = [
  { question: "What time is check-in?", answer: 'Description' },
  { question: "What time is check-out?", answer: 'Description' },
  { question: "Where is my room located?", answer: 'Description' },
  { question: "How do I get to my room?", answer: 'Description' },
  { question: "Is there a map of the hotel?", answer: 'Description' },
  { question: "Does the hotel have free Wi-Fi?", answer: 'Description' },
  { question: "What is the password for the Wi-Fi?", answer: 'Description' },
  { question: "Is breakfast included, and what are the breakfast hours?", answer: 'Description' },
  { question: "Is there a gym/pool/spa, and what are the hours of operation?", answer: 'Description' },
  { question: "Do you offer room service?", answer: 'Description' },
  { question: "Is there a laundry service available?", answer: 'Description' },
  { question: "Can you arrange transportation for me?", answer: 'Description' },
  { question: "Can you recommend any good restaurants nearby?", answer: 'Description' },
  { question: "What are some popular attractions in the area?", answer: 'Description' },
  { question: "Do you have maps or brochures of the local area?", answer: 'Description' },
  { question: "Is there a safe in the room?", answer: 'Description' },
  { question: "What should I do in case of an emergency?", answer: 'Description' },
  { question: "What is the hotel's cancellation policy?", answer: 'Description' },
  { question: "Are pets allowed?", answer: 'Description' },
  { question: "What is the policy on additional guests?", answer: 'Description' },
  { question: "What forms of payment do you accept?", answer: 'Description' },
  { question: "Are there any additional fees I should be aware of?", answer: 'Description' },
  { question: "Is there parking available?", answer: 'Description' },
  { question: "Is there a fee for parking?", answer: 'Description' },
  { question: "Can I get a late check-out?", answer: 'Description' },
  { question: "Can I request an extra bed or crib?", answer: 'Description' },
  { question: "What are the best local restaurants for trying regional cuisine?", answer: 'List' },
  { question: "Can you recommend a good place for breakfast/brunch/dinner?", answer: 'List' },
  { question: "Are there any vegetarian or vegan restaurants nearby?", answer: 'List' },
  { question: "Where can I find the best coffee in town?", answer: 'List' },
  { question: "What is the best way to get around the city?", answer: 'Description' },
  { question: "Can you recommend a reliable taxi service?", answer: 'Description' },
  { question: "How do I use public transportation here?", answer: 'Description' },
  { question: "Is there a shuttle service to popular attractions?", answer: 'Description' },
  { question: "What are the must-see attractions in the area?", answer: 'List' },
  { question: "Can you suggest a good walking tour?", answer: 'List' },
  { question: "Where can I get tickets for local attractions or events?", answer: 'List' },
  { question: "Are there any hidden gems or off-the-beaten-path spots to visit?", answer: 'List' },
  { question: "Where is the best place to go shopping?", answer: 'Description' },
  { question: "Are there any local markets or fairs happening this week?", answer: 'Description' },
  { question: "Can you recommend any good bars or nightlife spots?", answer: 'List' },
  { question: "What are the best places to see live music or theater?", answer: 'List' },
  { question: "Are there any museums or historical sites worth visiting?", answer: 'List' },
  { question: "Can you tell me about the local culture or any cultural events happening?", answer: 'List' },
  { question: "Is there a local festival or event happening during my stay?", answer: 'List' },
  { question: "Where can I go for a nice hike or nature walk?", answer: 'Description' },
  { question: "Are there any good spots for outdoor activities like biking or kayaking?", answer: 'Description' },
  { question: "What's the best beach or park to visit nearby?", answer: 'Description' },
  { question: "What are some good family-friendly activities or attractions?", answer: 'List' },
  { question: "Are there any amusement parks or zoos in the area?", answer: 'List' },
  { question: "Where is the nearest pharmacy or convenience store?", answer: 'Description' },
  { question: "Can you recommend a good place to rent a car?", answer: 'Description' },
  { question: "Are there any medical facilities or hospitals nearby?", answer: 'Description' },
  { question: "What events or festivals are happening in the city during my stay?", answer: 'List' },
  { question: "Are there any local food or craft festivals I should check out?", answer: 'List' },
  { question: "What is the best time to visit popular attractions to avoid crowds?", answer: 'Description' },
  { question: "Do you have any tips for getting around or things to watch out for?", answer: 'Description' },
];

async function main() {
  for (const data of qnaData) {
    await prisma.qna.create({
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
