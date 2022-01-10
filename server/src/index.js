
const express = require('express')
const app = express()
const port = 5000
const logger = require("morgan")
const mongoose = require('mongoose')
app.use(logger('dev'));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
