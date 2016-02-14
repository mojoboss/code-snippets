var express = require("express");
var fs = require("fs");
var port = process.argv[2];
var fileName = process.argv[3];

var app = express();
app.set('json spaces', 0); //THIS LINE IS NOT REQUIRED. ITS ADDED JUST TO PASS THE TEST CASE, WHICH FAILS DUE TO A BUG CAUSED BY GLOBALLY INSTALLED EXPRESS
app.get('/books', function(req, res){
    fs.readFile(fileName, function(err, contents){
        var obj = null;
        if(err)
            return res.sendStatus(500);
        
        obj = JSON.parse(contents);
        res.json(obj);
    })
});

app.listen(port);