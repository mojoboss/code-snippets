var http = require("http");              //get http core module
var url = process.argv[2];               //first command line argument is the url 
/*
 The http.get() method is a shortcut for simple GET requests, use it to
  simplify your solution. The first argument to http.get() can be the URL
  you want to GET; provide a callback as the second argument.

  Unlike other callback functions, this one has the signature:

     function callback (response) {  ...  }  
   
  Where the response object is a Node Stream object. You can treat Node  
  Streams as objects that emit events. The three events that are of most  
  interest are: "data", "error" and "end". You listen to an event like so:  
   
     response.on("data", function (data) { ...  })  
   
  The "data" event is emitted when a chunk of data is available and can be  
  processed. The size of the chunk depends upon the underlying data source.  
   
*/
http.get(url, function callback(response){
    response.on("data", function(data){     //similarly we can handle error and end events
        console.log(data.toString());
    });
});