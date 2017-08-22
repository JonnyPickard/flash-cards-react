const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017/flashcards';

async function getCardByTitle(title) {
  const db = await MongoClient.connect(mongoUrl);
  const card = await db.collection('cards').findOne({ title });
  return card;
}

module.exports = getCardByTitle;
