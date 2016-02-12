var http = require("http");              //get http core module
var url = process.argv[2];               //first command line argument is the url 

http.get(url, function callback(response){
    var str = ''
    response.on('data', function (chunk) {
        str += chunk;
        //uncomment the line below and comment the entire end block to see how differently the code behaves.
        //console.log(chunk.toString());        
    });
    response.on('end', function () {
        console.log(str.length);
        console.log(str);
    });
});