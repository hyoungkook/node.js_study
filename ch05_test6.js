var http = require('http');
var fs = require('fs');

var server = http.createServer();                         // 웹 서버 객체를 만듭니다.

var port = 3000;                                          // 웹 서버를 시작하여 3000번 포트에서 대기하도록 설정합니다.
server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다.: %d', port);
});

server.on('connection', function(socket){                 // 클라이언트 연결 이벤트 처리
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res){                  // 클라이언트 요청 이벤트 처리
    console.log('클라이언트 요청이 들어왔습니다');

    var filename = '송년법회.jpg';
    var infile = fs.createReadStream(filename,{flags:'r'});

    infile.pipe(res);                                     // 파이프로 연결하여 알아서 처리하도록 설정하기

    });

server.on('close', function(){
    console.log('서버가 종료됩니다.');
});