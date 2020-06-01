const path = require('path');
const express = require('express');
const app = express();
const DBController = require('./database/DBController');

const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

const dbController = new DBController();

function dbFetchData(collectionName, res) {
  dbController.fetchData({
    databaseName: MAIN_DB_NAME,
    collectionName
  })
    .then(data => res.json({data}))
    .catch(err => console.error(err) && res.json({}));
}

// TODO: in the future delete and use only `process.env.MONGODB_URI`
const MAIN_DB_NAME = process.env.MONGODB_URI ? process.env.MONGODB_URI.slice(process.env.MONGODB_URI.lastIndexOf('/') + 1) : 'heroku_hnd618dr';

dbController.connect().then(() => {

  app.use(express.static(publicPath));

  app.get('/fetchDataForWeddingFlowers', (req, res) => dbFetchData('weddingFlowers', res));
  app.get('/fetchDataForFlowersInBox', (req, res) => dbFetchData('flowersInBox', res));
  app.get('/fetchDataForBouquets', (req, res) => dbFetchData('bouquets', res));

  app.get('*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));


  app.listen(port, () => console.log(`You can now view your project in the browser.\n\tLocal:            http://localhost:${port}`));

}).catch(console.error);


