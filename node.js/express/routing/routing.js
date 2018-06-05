var express = require("express");
var path = require("path");
var http = require("http");

var app= express();

var publicPath = path.resolve(__dirname, "publc");
app.use(express.static(publicPath));

app.get("/", function(request, response){
	response.end("Weclome to my homepage!");
});

app.get("/about", function(request, response){
	response.end("Weclome to my about page!");
});

app.get("/weather", function(request, response){
	response.end("the current weather is NICE.");
});

app.use(function(request, response){
	response.statusCode = 404;
	response.end("404!");
});

http.createServer(app).listen(3000, function(){
	console.log("http://localhost:3000");
	console.log("http://localhost:3000/about");
	console.log("http://localhost:3000/weather");
});
