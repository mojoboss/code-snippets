var fs = require('fs') // require is a special function provided by node

var path = process.argv[2];//get the path to file

//console.log(path);

function asncfunction() {
  fs.readFile(path, function doneReading(err, fileContents) {
    var str = fileContents.toString();
    var num = str.split("\n").length-1;
    console.log(num);
  });
}

asncfunction(); //call the function asynchronously