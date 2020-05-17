const {MongoClient} = require('mongodb');

const uri = 'mongodb://heroku_hnd618dr:8fskid51bv25eje3gg7frfs7v9@ds145463.mlab.com:45463/heroku_hnd618dr';

class DBController {
  constructor() {
    // TODO: in the future delete `uir` constant and use only `process.env.MONGODB_URI`
    this.client = new MongoClient(process.env.MONGODB_URI || uri);
    this.isConnected = false;
  }

  async connect() {
    await this.client.connect();
    this.isConnected = true;
  }

  async close() {
    if (this.isConnected) await this.client.close();
  }

  fetchData({databaseName, collectionName, query={}, limit=0}) {
    const db = this.client.db(databaseName);

    const collection = db.collection(collectionName);

    return collection.find(query).limit(limit).toArray();
  }
}

module.exports = DBController;