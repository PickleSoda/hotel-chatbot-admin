const { PineconeClient } = require('@pinecone-database/pinecone');

const pinecone = new PineconeClient({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});

const indexName = 'your-index-name';

const initializePinecone = async () => {
  await pinecone.init();
  const index = pinecone.Index(indexName);
  return index;
};

module.exports = initializePinecone;
