const {MongoClient} = require('mongodb');

const USERNAME = "admin";
const PASSWORD = "admin";

const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@freshflowers-5vyoi.mongodb.net/test?retryWrites=true&w=majority`;

class DBController {
  constructor() {
    this.client = new MongoClient(uri);
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