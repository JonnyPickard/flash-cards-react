const mongoose = require('mongoose');

const cardSchema = require('./schema');

const Card = mongoose.model('Card', cardSchema, 'cards');

const createOne = async (cardObject) => {
  const card = await new Card(cardObject)
    .save();

  return card;
};

module.exports = { createOne };
