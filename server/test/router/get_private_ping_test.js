import request from 'supertest';

import app from '../../app';

describe('GET /private/ping', () => {
  it('returns a 200 status code', async () => {
    await request(app)
      .get('/private/ping')
      .expect(200);
  });
});
