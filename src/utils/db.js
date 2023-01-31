const { MongoClient } = require('mongodb');

let connect;

module.exports = {
  connectDb: async (callback) => {
    try {
      const client = await MongoClient.connect('mongodb://localhost:27017/teste');
      connect = client.db();
      return callback();
    } catch (error) {
      return callback(error); 
    }
  },
  getDb: () => connect,
}