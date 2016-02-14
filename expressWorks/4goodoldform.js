var port = process.argv[2];
var express = require("express");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.urlencoded({extended: false}));       //this is a middleware
/*
Express.js uses middleware to provide extra functionality to your web server.
Simply put, a middleware is a function invoked by Express.js before your own
request handler.
Middlewares provide a large variety of functionalities such as logging, serving
static files and error handling.
A middleware is added by calling use() on the application and passing the
middleware as a parameter.
To parse x-www-form-urlencoded request bodies Express.js can use urlencoded()
middleware from the body-parser module.
*/
 
app.post("/form", function(req, res){
    var string = req.body.str;                           //get the POST request body in a string form(req.body will give the request body)
    string = string.split("").reverse().join("");        //splits the string 
    res.send(string);                                    //send the response
    
})
app.listen(port);