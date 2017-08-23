import request from 'supertest';
import mongoose from 'mongoose';

import app from '../../app';

mongoose.models = {};
mongoose.modelSchemas = {};

describe('GET /private/ping', () => {
  it('200 response', async () => {
    await request(app)
      .get('/private/ping')
      .expect(200);
  });
});
