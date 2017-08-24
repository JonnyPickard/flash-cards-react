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

const getOneCardById = async (_id) => {
  const card = await Card
    .find({ _id })
    .limit(1)
    .exec();

  if (!card[0]) throw new Error('No card found');

  return card[0];
};

const deleteOneCardById = async (_id) => {
  const card = await Card
    .find({ _id })
    .limit(1)
    .exec();

  await Card
    .find({ _id })
    .limit(1)
    .remove()
    .exec();

  if (!card[0]) throw new Error('No card found');

  return card[0];
};

module.exports = { createOneCard, getManyCards, getOneCardById, deleteOneCardById };
