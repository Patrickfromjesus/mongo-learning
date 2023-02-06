import { Db, MongoClient } from 'mongodb'

let db: Db;

export default {
  connectDb: (): Db => {
    const client = new MongoClient('mongodb://localhost:27017');
    db = client.db('teste');
    return db;
  },
  getDb: () => db,
}
