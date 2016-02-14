//USING PUT REQUESTS AND TAHING THE sha1 hash of current date+id nad sending it back as a response

var port = process.argv[2];
var express = require("express");

var app = express();
app.put('/message/:id', function(req, res){
    var id = req.params.id;
    var ans =  require('crypto')
               .createHash('sha1')
               .update(new Date().toDateString() + id)
               .digest('hex');
    res.send(ans);
});
app.listen(port);