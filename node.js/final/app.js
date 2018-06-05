//app.js
var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var quickstart = require("./quickstart");
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var entries = [];
app.locals.entries = entries;
var event = {
  'summary': 'Google I/O 2015',
//    'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2018-01-11T09:00:00-07:00',
  },
  'end': {
    'dateTime': '2018-01-11T17:00:00-07:00',
  },
};
var login = false;
app.locals.login = login;
var manager = {
  'number' : 'sjmtony',
  'password' : 'sjm778887',
};

app.use(logger("dev"));
app.use(logger("short"));
app.use(bodyParser.urlencoded({ extended: false }));

var path = require("path");
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", function(request, response) {
  response.render("index");
});

app.get("/book", function(request, response) {
  response.render("book");
});

app.get("/log", function(request, response) {
  if(login){
    response.render("log");
  }
  else{
    response.render("login");
  }
});

app.post("/log",function(req,res){
  if(req.body.number==manager.number){
    if(req.body.number==manager.number){
      login=true;
    }
  }
  res.redirect("/log");
});

//app.use(function(request, response) {
//  response.status(404).render("404");
//});

app.post("/book", function(req, res) {
  event.summary = req.body.teamName;
  event.description = 
  	"總人數:"+req.body.peoples+"人"+"\n"+
  	"聯絡人:"+req.body.name+"\n"+
  	"連絡電話:"+req.body.tel+"\n"+
  	"聯絡信箱:"+req.body.email;
  event.start.dateTime = req.body.startTime+":00+08:00";
  event.end.dateTime = req.body.endTime+":00+08:00";
  entries.push({
    teamName: req.body.teamName,
    peoples: req.body.peoples,
    name: req.body.name,
    tel: req.body.tel,
    email: req.body.email,
    startTime: req.body.startTime,
    endTime: req.body.endTime
    })
  console.log(entries);
  quickstart.insert(event);
  quickstart.list();
  res.redirect("/");
});

http.createServer(app).listen(3000, function() {
  console.log("Guestbook app started on port 3000.");
  quickstart.list();
});

