const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
app.use(cors())

const chefs = require('./data/data.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/data', (req, res) => {
  res.send(chefs)
})
app.get('/data/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = chefs.find(n => n.id === id);
  res.send(selectedNews)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})