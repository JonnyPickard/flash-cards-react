const router = require('koa-router')();

const { createOneCard, getManyCards } = require('../models/card');

router
  .get('/private/ping', async (ctx) => {
    ctx.status = 200;
  })

  .get('/cards', async (ctx) => {
    try {
      const cards = await getManyCards();
      ctx.response.body = cards;
    } catch (err) {
      ctx.status = 400;
    }
  })

  .post('/cards', async (ctx) => {
    try {
      const card = await createOneCard(ctx.request.body);
      ctx.response.body = card;
    } catch (e) {
      ctx.status = 400;
    }
  });

module.exports = router;
