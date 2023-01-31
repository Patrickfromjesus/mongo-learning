const express = require('express');
const { connectDb, getDb } = require('./db');

const app = express();
app.use(express.json());

let db;

connectDb((error) => {
  if(error) console.log(error);
  db = getDb();
});


module.exports = app;
