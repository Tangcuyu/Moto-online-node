import * as express from 'express';
const app = express();
const cors = require('cors');

import * as Index from './routes/index';

import * as path from 'path';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

import * as bodyParser from 'body-parser';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', Index.router);

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/dist', express.static(__dirname + '/dist'));

app.listen(3000, () => {
    console.log(`listening on port 3000`);
});
