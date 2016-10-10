const express = require('express');
const app = express();
const http = require('http');
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
server.listen(3000, () => {
  console.log('Server is listening on port 3000 ')
});

