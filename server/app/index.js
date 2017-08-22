const Koa = require('koa');

const router = require('./router');

const { PORT = 3000 } = process.env;

const app = new Koa();

app
  .use(router.routes());

const server = app.listen(PORT, () => {
  console.log('Koa app listening on port: ', PORT);
});

module.exports = server;
