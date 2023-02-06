const express = require('express');
const { ObjectId } = require('mongodb');
const { connectDb, getDb } = require('./db');

const app = express();

let db;

connectDb((error) => {
  if (!error) db = getDb();
});

app.use(express.json());

app.get('/test', async (req, res) => {
  try {
    const data = [];
    await db.collection('users').find().limit(3).forEach(e => data.push(e));
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

/* app.get('/ex2', async (req, res) => {
  try {
    const data = [];
    await db.collection('superheroes').find({ 'aspects.height': { $lt: 180 } })
      .forEach((user) => data.push(user));
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex3', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ 'aspects.height': { $lt: 180 } });
    return res.status(200).json(data);
  } catch (error) {{ $set: { topics: ["databases", "MongoDB"] } },
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex4', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ 'aspects.height': { $lte: 180 } });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex5', async (req, res) => {
  try {
    const data = await db.collection('superheroes').findOne({ 'aspects.height': { $gte: 200 } });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex6', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ 'aspects.height': { $gte: 200 } });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex7', async (req, res) => {
  try {
    const data = [];
    await db.collection('superheroes').find({ 'aspects.eyeColor': 'green' })
      .forEach((user) => data.push(user));
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex8', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ 'aspects.eyeColor': 'blue' });
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex9', async (req, res) => {
  try {
    const data = [];
    await db.collection('superheroes').find({ 'aspects.hairColor': { $in: ['black', 'no hair'] } })
      .forEach((user) => data.push(user));
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex10', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ 'aspects.hairColor': { $in: ['black', 'no hair'] } })
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex11', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ 'aspects.hairColor': { $nin: ['black', 'no hair'] } })
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex12', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ 'aspects.height': { $not: { $gt: 180 } } })
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex13', async (req, res) => {
  try {
    const data = [];
    await db.collection('superheroes').find({ $nor: [{ race: 'Human' }, { 'aspects.height': { $gt: 180 } }]  })
      .forEach((user) => data.push(user));
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex14', async (req, res) => {
  try {
    const data = [];
    await db.collection('superheroes')
      .find({ publisher: 'Marvel Comics', $or: [{'aspects.height': 180 }, { 'aspects.height': 200 }] })
      .forEach((user) => data.push(user));
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex15', async (req, res) => {
  try {
    const data = [];
    await db.collection('superheroes')
      .find({ publisher: { $ne: 'DC Comics' }, race: { $in: ['Human', 'Mutant'] }, 'aspects.weight': { $gte: 80, $lte: 100 } })
      .forEach((user) => data.push(user));
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex16', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ race: { $exists: false } })
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex17', async (req, res) => {
  try {
    const data = await db.collection('superheroes').countDocuments({ 'aspects.hairColor': { $exists: true } })
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex18', async (req, res) => {
  try {
    const data = await db.collection('superheroes').deleteOne({ publisher: 'Sony Pictures' })
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

/* app.get('/ex19', async (req, res) => {
  try {
    const data = await db.collection('superheroes').deleteMany({ publisher: 'George Lucas' })
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}); */

module.exports = app;
