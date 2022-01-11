
// like an import. Saved into a variable so that you can access via the dot notation
const express = require('express')
const app = express()
const port = 5000
// like an import
const logger = require("morgan")
const mongoose = require('mongoose')
// logs stuff
app.use(logger('dev'));

// connects to the mongo DB 
connect()

// req = request
// res = response
// waiting for someone to make a request to "/". It's the thing after localhost:5000
app.get('/', async(req, res) => {
  // await connect()
  var item = await find()
  // console.log(item). res.send(item) sends it to out browser
	// NEW EDIT
	var item1 = await reveal();
  res.send(item1)
})

// Creates a schema in our DB with this look, if it already exists then good :) we can query it
const testModel = mongoose.model('testCollection', new mongoose.Schema({ name: String, age: Number }), 'testCollection');
const testModelOne = mongoose.model('categories', new mongoose.Schema({ name: String, count: Number }), 'categories');  // NEW EDIT

// it just runs without blocking 
async function connect() {
	// admin:admin <--> <user name>:<password>
  await mongoose.connect('mongodb://admin:admin@db:27017/');
	// like print in java script
  console.log('asdasd')
}

// Search the schema we created above to see if any data is in there.
async function find() {
	// we don't want to filter on anything
  const doc = await testModel.find({});
  return doc
}


// NEW EDIT
async function reveal() {
	const doc = await testModelOne.find({});
	return doc;
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
