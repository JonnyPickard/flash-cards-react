const { MongoClient } = require('mongodb');

const mongoUrl = process.env.MONGODB_URI;

async function cleanDatabase() {
  const db = await MongoClient.connect(mongoUrl);
  await db.collection('cards').drop();
}

module.exports = cleanDatabase;
