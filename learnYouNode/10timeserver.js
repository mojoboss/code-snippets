var port = process.argv[2];
var net = require("net");
function getTime(){
    var date = new Date();
    var day = date.getDate();
    if(day < 10 )
        day = '0'+day;
    var month = date.getMonth()+1;
    if(month < 10)
        month = '0'+month;
    var year = date.getFullYear();
    var hours = date.getHours();
    if(hours < 10)
        hours = '0'+hours;
    var min = date.getMinutes();
    if(min < 10)
        min = '0'+min;
    var time = year+"-"+month+"-"+day+" "+hours+":"+min;
    return time;
}
var server = net.createServer(function(socket){   //open up a socket
    socket.write(getTime());
    socket.write("\n");
    socket.end();  //close the socket
    
});
server.listen(port);// server listining at this port
