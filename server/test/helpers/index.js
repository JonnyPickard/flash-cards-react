const mongoose = require('mongoose');

const cleanDatabase = require('./clean_database');
const getOneCardByTitle = require('./get_one_card_by_title');
const createManyCards = require('./create_cards');
const createOneCard = require('./create_one_card');

// Required to stop test watch bugging out when it re-renders
mongoose.models = {};
mongoose.modelSchemas = {};

module.exports = {
  cleanDatabase,
  getOneCardByTitle,
  createManyCards,
  createOneCard,
};
