import request from 'supertest';
import { expect } from 'chai';
import mongoose from 'mongoose';

import app from '../../app';
import { cleanDatabase, createManyCards } from '../helpers';

mongoose.models = {};
mongoose.modelSchemas = {};

describe('GET /cards', () => {
  describe('On Success', () => {
    beforeEach(async () => {
      await createManyCards();
    });

    afterEach(async () => {
      await cleanDatabase();
    });

    it('200 response', async () => {
      await request(app)
        .get('/cards')
        .expect(200);
    });

    it('retrieves multiple cards in order of created_at', async () => {
      const { body } = await request(app)
        .get('/cards');

      expect(body[0].title).to.equal('testTitle0');
      expect(body[0].understoodStatus).to.equal('known0');
      expect(body[0].content.question).to.equal('testQuestion0');
      expect(body[0].content.answer).to.equal('testAnswer0');
      expect(body[0].type).to.equal('general0');

      expect(body[1].title).to.equal('testTitle1');
      expect(body[1].understoodStatus).to.equal('known1');
      expect(body[1].content.question).to.equal('testQuestion1');
      expect(body[1].content.answer).to.equal('testAnswer1');
      expect(body[1].type).to.equal('general1');
    });
  });
});
