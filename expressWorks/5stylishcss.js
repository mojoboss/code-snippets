var port  = process.argv[2];
var staticPath = process.argv[3];

var express = require("express");
var app = express();

app.use(express.static(staticPath));
app.use(require('stylus').middleware(staticPath));     //see 'http://stylus-lang.com/'
app.listen(port);