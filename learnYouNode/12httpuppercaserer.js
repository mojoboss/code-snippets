var http = require("http");
var fs = require("fs");
var port = process.argv[2];

var server = http.createServer(function(req, res){  //POST req here. Notice that it is being handled in a similar way just as GET req.
    if (req.method != 'POST')  
         return res.end('send me a POST\n') 
         
    var str = "";
    req.on("data", function(data){                  //takes the data stream from req, append it to str
        str += data;
    })
    req.on("end", function(){
        res.write(str.toUpperCase());                // when req ends, write the str to the client back
        res.end();
    })
})
server.listen(port);