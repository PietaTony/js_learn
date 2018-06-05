var http = require('http');
var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');

var app = express();

// log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
}));

app.get('/', function (req, res) {
  res.send('hello, world!')
});

http.createServer(app).listen(3000);