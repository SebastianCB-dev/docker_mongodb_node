const mongoose = require('mongoose');
const express = require('express');
const { databaseConnection } = require('./db/db');
require('dotenv').config();
const app = express();
app.use(express.json());

// MongoDB
const conn = databaseConnection()
              .then(() => {
                console.log('Connection with database successfully');
              })
              .catch(e => {
                console.log('Error connecting with Mongo...:', e);
              }) 

// Model
// const People = mongoose.model('People', {name: String, lastname: String, age: Number});
// const example1 = new People({name: 'Sebastián', lastname: 'Carrillo', age: 21});
// example1.save().then(() => {console.log('Sebastián was saved')});

// Routes
app.get('/', async(req, res) => {
  const search = await People.find({name: 'Sebastián'})
  res.json({
    'status': 'ok',
    'data': search
  });
  console.log('Get Petition');
})

app.post('/', (req, res) => {

});

app.listen(process.env.PORT, () => {
  console.log('Server listening in:', process.env.PORT);
})