var express = require("express");
var port = process.argv[2];
var jadeTemplatePath = process.argv[3];       //path of the dir containing template file
//console.log(jadeTemplatePath);


var app = express();
app.set('view engine', 'jade');               //set the templating engine to be jade
app.set('views', jadeTemplatePath);           //set the path to the directory containing template file


app.get('/home', function(req, res){
    var DATE = new Date().toDateString();
    res.render('index', {date:DATE});         //index is that template file(index.jade), {date} is to be rendered in that file
})

app.listen(port);