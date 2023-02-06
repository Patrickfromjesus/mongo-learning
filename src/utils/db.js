const { MongoClient } = require('mongodb');

let db;

module.exports = {
  connectDb: async (call) => {
    const client = new MongoClient('mongodb://localhost:27017');
    db = client.db('teste');
    return call();
  },
  getDb: () => db,
};
