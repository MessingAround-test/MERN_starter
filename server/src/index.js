
const express = require('express')
const app = express()
const port = 5000
const logger = require("morgan")
const mongoose = require('mongoose')
app.use(logger('dev'));

// connects to the mongo DB 
connect()

app.get('/', async(req, res) => {
  // await connect()
  var item = await find()
  // console.log(item)
  res.send(item)
})

// Creates a schema in our DB with this look, if it already exists then good :) we can query it
const testModel = mongoose.model('testCollection', new mongoose.Schema({ name: String, age: Number }), 'testCollection');

async function connect() {
  await mongoose.connect('mongodb://admin:admin@db:27017/');
  console.log('asdasd')
}

// Search the schema we created above to see if any data is in there.
async function find() {
  const doc = await testModel.find({});
  return doc
}




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
