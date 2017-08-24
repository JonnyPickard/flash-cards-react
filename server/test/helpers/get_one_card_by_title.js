const { MongoClient } = require('mongodb');

const { MONGODB_URI } = process.env;

async function getCardByTitle(title) {
  const db = await MongoClient.connect(MONGODB_URI);
  const card = await db.collection('cards').findOne({ title });
  return card;
}

module.exports = getCardByTitle;
