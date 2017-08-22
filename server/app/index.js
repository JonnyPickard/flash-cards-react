const Koa = require('koa');
const router = require('koa-router')();

const { PORT = 3000 } = process.env;

const app = new Koa();

app
  .use(router.routes());

router
  .get('/private/ping', async (ctx) => {
    ctx.status = 200;
  });

const server = app.listen(PORT, () => {
  console.log('Koa app listening on port: ', PORT);
});

module.exports = server;
