const mongoose = require('mongoose');

const cardSchema = require('./schema');

const Card = mongoose.model('Card', cardSchema, 'cards');

const createOneCard = async (cardObject) => {
  const card = await new Card(cardObject)
    .save();

  return card;
};

const getManyCards = async () => {
  const cards = await Card
    .find()
    .sort({ created_at: 1 })
    .limit(40)
    .exec();

  return cards;
};

module.exports = { createOneCard, getManyCards };
