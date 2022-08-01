const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

// MongoDB
async function databaseConnection() {
  return await mongoose.connect('mongodb://sebastiancb:password@localhost:27017/pruebaDocker?authSource=admin');
}

let conn;
try {
  conn = databaseConnection();
}
catch(e) {
  console.log('Error connecting with Mongo...:', e);
}

if(conn) {
  console.log('Connection with database successfully');
}

// Model
const People = mongoose.model('People', { name: String, lastname: String, age: Number });
const luis = new People({name: 'Luis', lastname: 'Salazar', age: 30});
luis.save()
  .then(() => console.log('Luis was saved'))
  .catch((reason) => {
    console.log('Error enviando la data')
  });

console.log(conn);
app.get('/', async(req, res) => {
  let luis = 'Error';
  try {
    luis = await People.find({name: "Luis"});
  }
  catch(e) {
    console.log('Error haciendo la petición');
  }
  res.json({
    'status': 'ok',
    'data': luis
  });
  console.log('Get Petition');
})

app.listen(process.env.PORT, () => {
  console.log('Server listening in:', process.env.PORT);
})