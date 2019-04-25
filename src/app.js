import express from 'express';
import "core-js/stable";
import "regenerator-runtime/runtime";
import env from './env';
import routes from './routes';
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.listen(env.Api_port, () => {
    console.log(`Api listening on port ${env.Api_port}!`);
});
