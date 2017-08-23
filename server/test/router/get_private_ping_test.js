import request from 'supertest';

import app from '../../app';

require('../helpers');

describe('GET /private/ping', () => {
  it('200 response', async () => {
    await request(app)
      .get('/private/ping')
      .expect(200);
  });
});
