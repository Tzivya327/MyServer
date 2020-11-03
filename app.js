var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {startDatabase} = require('./database/mongo');
const {insertAd, getAds} = require('./database/ads');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// defining the Express app
const app = express();

// defining an array to work as the database (temporary solution)
const ads = [
  {title: 'Hello, world (again)!'}
];

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
/*app.get('/', (req, res) => {
  res.send(ads);
});*/
app.get('/', async (req, res) => {
    res.send(await getAds());
  });

app.get('/distance', (req, res) => {
    res.send([5]);
  });


// starting the server
app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

startDatabase().then(async () => {
    await insertAd({title: 'Hello, now from the in-memory database!'});
  
    // start the server
    app.listen(3001, async () => {
      console.log('listening on port 3001');
    });
  });

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/