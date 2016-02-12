var path = process.argv[2];
var filter = process.argv[3];

var main = require("./6makeitmodular.js");
/*above line imports the file "6makeitmodular.js". "./" has to be used before the file name.   
now all the function defined with export.FUNCTIONNAME syntax can be accessed with the 'main' variable.
*/
function printList(path, filter, callback){ //Here we created a custom callback. Now callback can be used by supplying any function name. 
    callback(path, filter);
}

printList(path, filter, main.printFilteredFileNames);// calling the function.