/*
We're exporting this function called 'printFilteredFileNames'. It is done using "export.FUNCTIONNAME = function(){}" syntax.
Now do whatever you want to do with this function. Its can be easily used within other files.
*/
exports.printFilteredFileNames = function(path, filter){
    var fs = require("fs");
    fs.readdir(path, function(err, list){   //fs.readdir() takes a path and a callback function as arguments. 
        if(err){
            console.log(err);
        }
        else{
            //console.log(list);                                
            for(var i=0; i<list.length; i++){
                var index1 = list[i].indexOf(filter);
                var index2 = list[i].indexOf(".");
                if(index1>=0 && index2>=0)
                    console.log(list[i]);
            }
        }
    });    
}
