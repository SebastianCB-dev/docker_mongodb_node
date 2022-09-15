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
const People = mongoose.model('People', {name: String, lastname: String, age: Number, id: Number});
// const example1 = new People({name: 'Sebastián', lastname: 'Carrillo', age: 21, id: 1});
// example1.save().then(() => {console.log('Sebastián was saved')});

// Routes
app.get('/', async(req, res) => {
  res.send({
    status: 'ok',
    msg: 'Welcome to this API.'
  });  
});

app.get('/api/users/:id', async(req, res) => {
  const id = req.params.id;
  // Validar numero
  if (isNaN(id)) {
    res.status(400).send({
      status: 'error',
      msg: 'ID invalido (debe ser un numero).'
    });
    return;
  }
  // Validar
  const search = await People.find({ id })
  res.json({
    'status': 'ok',
    'data': search
  });
});

app.post('/', (req, res) => {

});

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log('Server listening in:', PORT);
})