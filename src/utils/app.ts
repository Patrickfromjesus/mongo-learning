import express, { Request, Response } from 'express';
import { Decimal128, Document, FindCursor } from 'mongodb';
import connect  from './db';
const app = express();

app.use(express.json());


const db = connect.connectDb();

app.get('/teste', async (req: Request, res: Response) => {
  try {
    const datas: FindCursor<Document> = db.collection('users').find({ key: 22 }).project({ name: 1 });
    const mappedCursor: FindCursor<Document> = datas.map(doc => doc);
    const keyCounts: any[] = await mappedCursor.toArray();
    return res.status(200).json(keyCounts);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default app;
