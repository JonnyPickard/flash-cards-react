const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/flashcards';

async function cleanDatabase() {
  const db = await MongoClient.connect(mongoUrl);
  await db.collection('cards').drop();
}

module.exports = cleanDatabase;
