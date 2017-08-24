const { MongoClient } = require('mongodb');

const { MONGODB_URI } = process.env;

async function cleanDatabase() {
  const db = await MongoClient.connect(MONGODB_URI);
  await db.collection('cards').drop();
}

module.exports = cleanDatabase;
