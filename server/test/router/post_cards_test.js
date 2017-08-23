import request from 'supertest';
import { expect } from 'chai';
import mongoose from 'mongoose';

import app from '../../app';
import { cleanDatabase, getOneCardByTitle } from '../helpers';

mongoose.models = {};
mongoose.modelSchemas = {};

describe('POST /cards', () => {
  describe('On Success', () => {
    const testCard = {
      title: 'testTitle',
      understoodStatus: 'known',
      content: 'testContent',
      type: 'general',
    };

    afterEach(async () => {
      await cleanDatabase();
    });

    it('saves a card in the db', async () => {
      await request(app)
        .post('/cards')
        .send(testCard);

      const card = await getOneCardByTitle(testCard.title);

      expect(card.title).to.equal(testCard.title);
    });

    it('responds with the saved card', async () => {
      const { body } = await request(app)
        .post('/cards')
        .send(testCard);

      expect(body.title).to.equal('testTitle');
      expect(body.understoodStatus).to.equal('known');
      expect(body.content).to.equal('testContent');
      expect(body.type).to.equal('general');
    });

    it('responds status 200', async () => {
      await request(app)
        .post('/cards')
        .send(testCard)
        .expect(200);
    });
  });

  describe('On Failure', () => {
    it('does not create a post', async () => {
      await request(app)
        .post('/cards')
        .send({});
    });

    it('responds status 400', async () => {
      await request(app)
        .post('/cards')
        .send({})
        .expect(400);
    });
  });
});
