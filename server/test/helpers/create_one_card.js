const mongoose = require('mongoose');

const cardSchema = require('../../app/models/card/schema');

const Card = mongoose.model('Cards', cardSchema, 'cards');

const createOneCard = async () => {
  const index = 0;
  try {
    const card = await Card.create({
      title: `testTitle${index}`,
      understoodStatus: `known${index}`,
      content: {
        question: `testQuestion${index}`,
        answer: `testAnswer${index}`,
      },
      type: `general${index}`,
    });

    return card;
  } catch (err) {
    throw err;
  }
};

module.exports = createOneCard;
