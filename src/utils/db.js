const { MongoClient } = require('mongodb')

let db;

const connectDb = async (call) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:8080/class');
    db = client.db();
    return call();
  } catch (error) {
    return call(error); 
  }
}

const getDb = () => db;

module.exports = { connectDb, getDb };
