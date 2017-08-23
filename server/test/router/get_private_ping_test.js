import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../app';

mongoose.models = {};
mongoose.modelSchemas = {};

describe('GET /private/ping', () => {
  it('returns a 200 status code', async () => {
    await request(app)
      .get('/private/ping')
      .expect(200);
  });
});
