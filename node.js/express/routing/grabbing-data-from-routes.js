var express = require("express");
var http = require("http");

app = express();

app.get("/hello/:who", function(request, rsponse){
	rsponse.end("Hello, " + request.params.who + ".");
});

http.createServer(app).listen(3000, function(){
	console.log("http://localhost:3000/hello/test");
});