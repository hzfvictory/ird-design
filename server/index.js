const Koa = require('koa');
const app = new Koa();

app.use(require('koa-static')(process.cwd() + '/dist'));

app.listen('8086', () => {
  console.log(`http://localhost:8086/1.0.0/index.html`)
})


