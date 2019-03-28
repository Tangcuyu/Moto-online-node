import * as dotenv from 'dotenv'; // Loads environment variables from .env file
import * as express from 'express';
import * as morgan from 'morgan';  // HTTP request logger middleware for node.js
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as cors from 'cors'; // enable CORS
import * as bodyParser from 'body-parser';

import setRoutes from './routes/index';

const app = express();
dotenv.config({ path: '.env' });
app.set('port', (process.env.PORT || 3000));


// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/node_modules', express.static(__dirname + '/node_modules'));
// app.use('/dist', express.static(__dirname + '/dist'));


// Mongoose connection
let mongodbURI;
if (process.env.NODE_ENV === 'test') {
  mongodbURI = process.env.MONGODB_TEST_URI;
} else {
  mongodbURI = process.env.MONGODB_URI;
  app.use(morgan('dev'));
}

mongoose.Promise = global.Promise;
mongoose.connect(mongodbURI)
  .then(db => {
    console.log('Connected to MongoDB: ' + mongodbURI);

    setRoutes(app);

    app.get('/*', function(req, res) {
      // res.sendFile(path.join(__dirname, '../public/index.html'));
      res.send({title: 'Expressangular'});
    });

    if (!module.parent) {
      app.listen(app.get('port'), () => console.log(`MotoServer listening on port ${app.get('port')}`));
    }
  })
  .catch(err => console.error(err));

/* 连接事件及控制台输出 */

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close( () => {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

export { app };

