var express = require("express");
var port = process.argv[2];
var indexPath = process.argv[3];       //path of the dir containing file
//console.log(indexPath);

var app = express();
app.use(express.static(indexPath));    //see this "http://expressjs.com/en/starter/static-files.html"

app.listen(port);


/*
OFFICIAL SOLUTION

  var path = require('path')
  var express = require('express')
  var app = express()
   
  app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
  app.listen(process.argv[2])
*/