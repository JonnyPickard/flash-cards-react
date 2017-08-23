const { Schema } = require('mongoose');

const cardSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  understoodStatus: { type: String, required: true },
  content: {
    question: { type: String, required: true },
    answer: { type: String, required: true },
  },
  created_at: { type: Date, default: Date.now, required: true },
});

module.exports = cardSchema;
