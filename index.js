const mongoose = require('mongoose');
const express = require('express');
const { databaseConnection } = require('./db/db');
require('dotenv').config();
const app = express();
app.use(express.json());

// MongoDB
const conn = databaseConnection().then(() => {
  console.log('Connection with database successfully');
})
.catch(e => {
  console.log('Error connecting with Mongo...:', e);
}) 

app.get('/', async(req, res) => {
  res.json({
    'status': 'ok',
    'data': luis
  });
  console.log('Get Petition');
})

app.post('/', (req, res) => {

});

app.listen(process.env.PORT, () => {
  console.log('Server listening in:', process.env.PORT);
})