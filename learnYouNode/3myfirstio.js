var path = process.argv[2];  //path taken from index 2 of command line arg

/* To perform a filesystem operation you are going to need the fs module from  
  the Node core library. To load this kind of module, or any other "global"  
  module, use the following incantation: 
*/
var fs = require("fs");      
/* Now you have the full fs module available in a variable named fs.  
All synchronous (or blocking) filesystem methods in the fs module end with  
'Sync'. To read a file, you'll need to use  
fs.readFileSync('/path/to/file'). This method will return a Buffer object  
containing the complete contents of the file.  
*/
//buffer object is node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. 
var contents = fs.readFileSync(path);
//now convert a buffer object into string
var str = contents.toString();
var num = str.split("\n").length-1;
console.log(num);