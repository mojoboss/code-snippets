var path = process.argv[2];   // heer second argument given is the directory path
var filter = process.argv[3]; //filter to which we have to print file names
//console.log(path, filter);

var fs = require("fs");
fs.readdir(path, function callbackFunction(err, list){   //fs.readdir() takes a path and a callback function as arguments. 
    //console.log(list);                                //fds.readdir() reads files from a directory
    for(var i=0; i<list.length; i++){
        var index1 = list[i].indexOf(filter);
        var index2 = list[i].indexOf(".");
        if(index1>=0 && index2>=0)
            console.log(list[i]);
    }
});
