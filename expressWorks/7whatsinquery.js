/*
Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
*/

var port = process.argv[2];
var express = require("express");

var app = express();
app.get('/search', function(req, res){
    /*
    var results = req.query.results;
    var include_tabs = req.query.include_tabs;
    var ans = {'results': results, 'include_tabs': include_tabs};
    res.send(JSON.stringify(ans));
    */
    //above solution will work when we know what are the query parameters exactly. Here we don't know that, so use this instead
    var url = require("url");
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    res.send(JSON.stringify(query));
});
app.listen(port);