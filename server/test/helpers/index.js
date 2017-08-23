const cleanDatabase = require('./clean_database');
const getOneCardByTitle = require('./get_one_card_by_title');
const createManyCards = require('./create_cards');
const createOneCard = require('./create_one_card');

module.exports = {
  cleanDatabase,
  getOneCardByTitle,
  createManyCards,
  createOneCard,
};
