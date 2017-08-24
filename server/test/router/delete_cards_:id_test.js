import request from 'supertest';
import { expect } from 'chai';

import app from '../../app';
import { createOneCard } from '../helpers';

describe('GET /cards/:id', () => {
  let cardId;

  beforeEach(async () => {
    const { _id } = await createOneCard();
    cardId = _id;
  });

  describe('On Success', () => {
    it('200 response', async () => {
      await request(app)
        .delete(`/cards/${cardId}`)
        .expect(200);
    });

    it('deletes the card', async () => {
      const { body } = await request(app)
        .delete(`/cards/${cardId}`);

      expect(body.title).to.equal('testTitle0');
      expect(body.understoodStatus).to.equal('known0');
      expect(body.content.question).to.equal('testQuestion0');
      expect(body.content.answer).to.equal('testAnswer0');
      expect(body.type).to.equal('general0');
    });

    it('responds with the deleted card', async () => {
      const { body } = await request(app)
        .delete(`/cards/${cardId}`);

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
        .delete('/cards/FAKEID')
        .expect(404);
    });

    it('does not respond with a card', async () => {
      const { body } = await request(app)
        .delete('/cards/FAKEID')
        .expect(404);

      expect(body.title).to.not.equal('testTitle0');
    });
  });
});
