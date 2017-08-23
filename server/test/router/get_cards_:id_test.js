import request from 'supertest';
import { expect } from 'chai';
import mongoose from 'mongoose';

import app from '../../app';
import { cleanDatabase, createOneCard } from '../helpers';

mongoose.models = {};
mongoose.modelSchemas = {};

describe('GET /cards/:id', () => {
  let cardId;

  beforeEach(async () => {
    const { _id } = await createOneCard();
    cardId = _id;
  });

  afterEach(async () => {
    await cleanDatabase();
  });

  describe('On Success', () => {
    it('200 response', async () => {
      await request(app)
        .get(`/cards/${cardId}`)
        .expect(200);
    });

    it('responds with the correct card', async () => {
      const { body } = await request(app)
        .get(`/cards/${cardId}`);

      expect(body.title).to.equal('testTitle0');
      expect(body.understoodStatus).to.equal('known0');
      expect(body.content.question).to.equal('testQuestion0');
      expect(body.content.answer).to.equal('testAnswer0');
      expect(body.type).to.equal('general0');
    });
  });

  describe('On Failure', () => {
    it('404 response', async () => {
      await request(app)
        .get('/cards/FAKEID')
        .expect(404);
    });

    it('200 response', async () => {
      const { body } = await request(app)
        .get('/cards/FAKEID')
        .expect(404);

      expect(body.title).to.not.equal('testTitle0');
    });
  });
});
