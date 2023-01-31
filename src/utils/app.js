const express = require('express');
const { connectDb, getDb } = require('./db');

const app = express();
app.use(express.json());

let db;

connectDb((error) => {
  if(error) console.log(error);
  db = getDb();
});

/* app.get('/bios/:id', async (req, res) => {
  const { id } = req.params;
  const users = [];
  await db.collection('bios').find({ _id: Number(id) }, { name: 1, birth: 1 })
    .forEach((user) => users.push(user));
  return res.status(200).json(users);
}); */

/* app.get('/bios', async (req, res) => {
  const users = [];
  await db.collection('bios').find({ "name.first": 'John' })
    .forEach((user) => users.push(user));
  return res.status(200).json(users);
}); */

/* app.get('/bios', async (req, res) => {
  const users = [];
  await db.collection('bios').find().limit(3)
    .forEach((user) => users.push(user));
  return res.status(200).json(users);
}); */

/* app.get('/bios', async (req, res) => {
  const users = [];
  await db.collection('bios').find().limit(2).skip(5)
    .forEach((user) => users.push(user));
  return res.status(200).json(users);
});
 */

/* app.get('/books', async (req, res) => {
  const qnt = await db.collection('books').count()
  res.status(200).json(qnt);
}); */

/* app.get('/books', async (req, res) => {
  const qnt = await db.collection('books').count({ status: "PUBLISH" });
  res.status(200).json(qnt);
}); */

/* app.get('/books', async (req, res) => {
  const books = [];
  await db.collection('books').find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3)
    .forEach(e => books.push(e));
  res.status(200).json(books);
}); */

app.get('/books', async (req, res) => {
  const books = [];
  await db.collection('books').find({ status: "MEAP" }, { title: 1, authors: 1, status: 1 }).skip(5).limit(10)
    .forEach(e => books.push(e));
  res.status(200).json(books);
});

module.exports = app;
