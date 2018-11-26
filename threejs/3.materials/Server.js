// Requires and variables
const express = require('express')
const path = require('path')
const app = express()
const port = 8080

// Set public folder
app.use(express.static(__dirname + '/public'));

// Routing
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

// Listen to
app.listen(port, () => console.log(`Working on localhost:${ port }` ))
