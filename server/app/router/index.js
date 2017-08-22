const router = require('koa-router')();

const { createOne } = require('../models/card');

router
  .get('/private/ping', async (ctx) => {
    ctx.status = 200;
  })

  .post('/cards', async (ctx) => {
    try {
      const card = await createOne(ctx.request.body);
      ctx.response.body = card;
    } catch (e) {
      ctx.status = 400;
    }
  });

module.exports = router;
