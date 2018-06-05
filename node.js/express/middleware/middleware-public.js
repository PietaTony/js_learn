var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
var publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

http.createServer(app).listen(3000, function(){
	console.log("http://localhost:3000/rainbow.jpg");
});