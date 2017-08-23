import request from 'supertest';
import { expect } from 'chai';

import app from '../../app';
import { cleanDatabase, getOneCardByTitle } from '../helpers';

describe('POST /cards', () => {
  describe('On Success', () => {
    const testCard = {
      title: 'testTitle',
      understoodStatus: 'known',
      content: {
        question: 'testQuestion',
        answer: 'testAnswer',
      },
      type: 'general',
    };

    afterEach(async () => {
      await cleanDatabase();
    });

    it('200 response', async () => {
      await request(app)
        .post('/cards')
        .send(testCard)
        .expect(200);
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
      expect(body.content.question).to.equal('testQuestion');
      expect(body.content.answer).to.equal('testAnswer');
      expect(body.type).to.equal('general');
    });
  });

  describe('On Failure', () => {
    it('400 response', async () => {
      await request(app)
        .post('/cards')
        .send({})
        .expect(400);
    });

    it('does not create a post', async () => {
      await request(app)
        .post('/cards')
        .send({});
    });
  });
});
