const mongoose = require('mongoose');

const cardSchema = require('../../app/models/card/schema');

const Card = mongoose.model('Cards', cardSchema, 'cards');

const mockCards =
  Array(40)
    .fill(0)
    .map((current, index) => ({
      title: `testTitle${index.toString()}`,
      understoodStatus: `known${index.toString()}`,
      content: {
        question: `testQuestion${index.toString()}`,
        answer: `testAnswer${index.toString()}`,
      },
      type: `general${index.toString()}`,
    }));

const createManyCards = async () => {
  try {
    await Card.create(mockCards);
  } catch (err) {
    throw err;
  }
};

module.exports = createManyCards;
