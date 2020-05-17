const path = require('path');
const express = require('express');
const app = express();
const DBController = require('./database/DBController');

const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

const db_controller = new DBController();

// TODO: in the future delete and use only `process.env.MONGODB_URI`
const MAIN_DB_NAME = process.env.MONGODB_URI ? process.env.MONGODB_URI.slice(process.env.MONGODB_URI.lastIndexOf('/') + 1) : 'heroku_hnd618dr';

db_controller.connect().then(() => {

  app.use(express.static(publicPath));


  app.get('/fetchData', (req, res) => {
    if (!req.query.collectionName) {
      console.error("/fetchData: request without specified collectionName");

      res.json({});
      return;
    }

    db_controller.fetchData({
      databaseName: MAIN_DB_NAME,
      collectionName: req.query.collectionName
    })
      .then(data => res.json({data}))
      .catch(err => {
        console.error(err);
        res.json({});
      });
  });


  app.get('*', (req, res) => res.sendFile(path.join(publicPath, 'index.html')));


  app.listen(port, () => console.log(`You can now view your project in the browser.\n\tLocal:            http://localhost:${port}`));

}).catch(console.error);


