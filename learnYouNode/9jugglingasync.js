var http = require("http");
var async = require("async");    //this has to be installed first(use npm). It handles async functions calls easily.
/*
Here we have a list of url's and we have to collect data from all those url's and diplay them in the same order.
But because http.get() works asynchronously, it can't be done using the naive approach. Either count the urls and then update the text, or use some external lib like 
async. See documentation how async.map works  "https://github.com/caolan/async#map"
*/
function printResults(err, results){  //this is the callback function used within async.map 
    if(err)
        throw err;
    else{
        results.forEach(function(result){
            console.log(result);
        });
    }
}

function getResponseFromUrl(url, callback){  // this takes a url and a callback. callback is called from inside this function 
    http.get(url, function(response){
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            callback(null, str);
        });
        response.on('error', console.error);
    })
}

var urls = [];
for(var i=2; i<process.argv.length; i++){
    var url = process.argv[i];
    urls.push(url);
}

async.map(urls, getResponseFromUrl, printResults);  
/*
Maps each array element to the function in the middle. The function does something with the element and passes it to the callback. 
callback prints that. SO IT WILL WORK n TIMES FOR n urls, and works in the same order as urls are passed.
*/


/*
SOLUTION WITHOUT THE async library


     var http = require('http')
     var bl = require('bl')
     var results = []
     var count = 0

     function printResults () {
       for (var i = 0; i < 3; i++)
         console.log(results[i])
     }

     function httpGet (index) {
       http.get(process.argv[2 + index], function (response) {
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)
*/