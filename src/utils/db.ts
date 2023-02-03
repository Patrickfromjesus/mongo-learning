import { MongoClient, Db, MongoError } from 'mongodb';

let connect: Db;

export default {
  connectDb: async (call: (err?: string) => void) => {
    try {
      const client = await MongoClient.connect('mongodb://localhost:27017');
      connect = client.db('teste');
      return call(); 
    } catch (error) {
      return call(error as string);
    }
  },
  getDb: () => connect,
}
