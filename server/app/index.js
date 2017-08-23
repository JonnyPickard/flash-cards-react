const Koa = require('koa');
const koaBody = require('koa-body');
const mongoose = require('mongoose');

const router = require('./router');

const {
  PORT = 3000,
  MONGODB_URI = 'mongodb://localhost:27017/flashcards',
  NODE_ENV = 'dev',
} = process.env;

mongoose.Promise = Promise;
mongoose
  .connect(MONGODB_URI, {
    useMongoClient: true })
  .catch(err => console.log('Mongoose connect error: ', err));

const app = new Koa();

app
  .use(koaBody());

app
  .use(router.routes());

const server = app.listen(PORT, () => {
  console.log('Koa app listening on port: ', PORT);
  if (NODE_ENV === 'test') server.close();
});

module.exports = server;
