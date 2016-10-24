const express = require('express');
const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const http = require('http');

//get the port for our rest api from config
var config = require('config');
var port = config.get('server.port');

const server = http.createServer(app);
const expressRest = require('express-rest');
const data = require('./data');

// generate our rest express ap
const rest = expressRest(app);

// connect to our database
data.connectToDB();

//initialize our routes
require('./routes')(rest);

//start listening
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});
