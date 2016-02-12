/*
Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.
*/

var http = require("http");
var port = process.argv[2];    //port no as first command-line arg
var server = http.createServer(function(req, res){
    var url = require("url");
    var urlObj = url.parse(req.url, true);     //url.parse parses the url and returns an object, req.url gives the request url
    //console.log(urlObj);
    var isoTime = urlObj.query.iso;           //since urlObj is a javascript object
    var date = new Date(isoTime);
    
    var returnTime = null;
    if(urlObj.pathname == "/api/unixtime"){
        returnTime = {"unixtime": date.getTime()};
    }
    else if(urlObj.pathname == "/api/parsetime"){
        returnTime = {"hour": date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()};
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(returnTime));
    res.end();
})

server.listen(port);