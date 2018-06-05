//mustache-test.js
var Mustache = require("mustache");
var result = Mustache.render("Hi, {{first}} {{last}}!", {
  first: "Chia-Hao",
  last: "Liu"
});
console.log(result);