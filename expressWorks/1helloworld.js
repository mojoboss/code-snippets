var express = require("express");
var port = process.argv[2];

var app = express();
app.get('/home', function(req, res){
    res.write("Hello World!");
    res.end();                       //or you could directly write 'res.end("Hello World");'
});

app.listen(port);