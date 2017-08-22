const router = require('koa-router')();

router
  .get('/private/ping', async (ctx) => {
    ctx.status = 200;
  });

module.exports = router;
