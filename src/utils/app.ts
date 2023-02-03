import express, { Request, Response } from 'express';
import { Db } from 'mongodb';
import IBook from '../interfaces/IBook';
import dbConnect  from './db';
const app = express();

app.use(express.json());

let db: Db;

dbConnect.connectDb((err?) => {
  if (!err) db = dbConnect.getDb();
});

app.get('/teste', async (req: Request, res: Response) => {
  try {
    const data = [] as IBook[];
    const datas = await db.collection('books').find().forEach((e: IBook) => data.push(e)) as unknown as IBook[];
    datas.forEach((e) => data.push(e));
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default app;
