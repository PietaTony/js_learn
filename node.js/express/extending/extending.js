var express = require("express");
var http = require("http");
var app = express();

var EVIL_IP = "::1";

app.use(function(request, response, next){
	console.log(request.ip);
	if(request.ip === EVIL_IP){
		response.status(401).send("Not allowed!");
	}
	else{
		next();
	}
});

app.get("/", function(request, response){
	response.redirect("/hello/world");
});

app.get("/hello/world", function(request, response){
	response.end("Hello World!");
});

app.get("/expressjs", function(request, response){
	response.redirect("http://expressjs.com");
});

app.get("/getPic", function(request, response){
	response.sendFile("C:/music.mp3");//C:/music.mp3
});


http.createServer(app).listen(3000);
console.log("http://localhost:3000");
console.log("http://localhost:3000/expressjs");
console.log("http://localhost:3000/getPic");
