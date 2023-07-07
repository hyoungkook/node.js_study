var express = require('express')
    , http = require('http')

var app = express();

app.use(function(req,res,next){                                               // use()메소드를 호출하여 미들웨어 하나를 등록함. use()메소드로 등록한 함수들은 등록 순서에 따라 클라이언트 요청을 처리
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버에서 응답한 결과입니다.</h1>');
});

http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
});