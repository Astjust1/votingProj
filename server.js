const Koa = require('koa');
const app = new Koa();
const helmet = require('koa-helmet');
const compress = require('koa-compress');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const bouncer = require('koa-bouncer');
const router = require('koa-router')();
const MQ_KEY = require('./secrets').mapquest_key;
const axios = require('axios');
const serve = require('koa-static');
const path = require('path');


app.use(helmet());
app.use(compress());
app.use(logger());
app.use(bodyParser());
app.use(bouncer.middleware())
app.use(require('./middleware/preact-render')());
app.use(serve(__dirname + "/dist"));


router.get('/', (ctx,next) => {
    ctx.type = 'html';
    ctx.body = ctx.render();
})

router.get("/location/:zip", async (ctx, next) => {
    console.log(ctx.params);
    let response = await axios.get('http://www.mapquestapi.com/geocoding/v1/address', {
        params: {
            key: MQ_KEY,
            location: ctx.params.zip
        }
    });
    console.log(ctx.render);
    console.log(response);
    ctx.body = response.data.results;
});

router.get("/representatives/:lat/:long", async(ctx, next) => {

});

router.get("/electionData/:zip", async (ctx, next) =>{

});

app.use(router.routes());
console.log(app);
app.start = (port = 3000) => {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
};

app.start();