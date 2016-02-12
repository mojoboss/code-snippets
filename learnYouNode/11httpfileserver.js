var port = process.argv[2];   //first argument is the port no
var file = process.argv[3];   //second is the file path
var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){   //open up a socket
    var contents = fs.createReadStream(file);                 //get the file as the stream      
    //now its same as we did in case of urls
    contents.on("data", function(data){
        response.write(data);
    })
    contents.on("end", function(){
        response.end();
    })
    
});
server.listen(port);// server listining at this port
