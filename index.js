const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()

const app = express();
app.use(express.json());

// MongoDB

async function databaseConnection() {
  return await mongoose.connect('mongodb://sebastiancb:password@localhost:27017/pruebaDocker?authSource=admin');
}

const conn = databaseConnection();
console.log(conn)

console.log(conn);
app.get('/', (req, res) => {
  res.json({
    'status': 'ok',
    'data': ['Joan', 'Sebastián', 'Carrillo', 'Barón']
  });
  console.log('Get Petition')
})

app.listen(process.env.PORT, () => {
  console.log('Server listening in:', process.env.PORT);
})