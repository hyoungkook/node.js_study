var http = require('http');

var server = http.createServer(); // 웹서버 객체를 만든다



/*
var port = 3000;                  // 웹서버를 시작하여 3000번 포트에서 대기합니다.
server.listen(port, function() {
    console.log('웹서버가 시작되었습니다. : %d', port);
});

*/


var host = '192.168.219.105';
var port = 3000;
server.listen(port,host,'50000',function(){
    console.log('웹 서버가 시작되었습니다. : %s, %d',host,port);
});
