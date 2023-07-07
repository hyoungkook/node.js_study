var express = require('express')
    , http = require('http')

var app = express();

app.use(function(req,res,next){                                               // use()메소드를 호출하여 미들웨어 하나를 등록함. use()메소드로 등록한 함수들은 등록 순서에 따라 클라이언트 요청을 처리
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    req.user='mike';                                                          // req객체에 user속성을 추가하고 그 값으로 문자열을 하나 넣음. (여기서 사용자 정보를 설정하는 역할을 한 것이 됨)

    next();                                                                   // 두번째 미들웨어로 처리순서를 넘겨줌
});

app.use('/', function(req,res,next){
    console.log('두 번째 미들웨어에서 요청을 처리함.');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버에서'+ req.user +'가 응답한 결과입니다</h1>');     // 두번째 미들웨어에서 req객체에 설정된 user속성을 확인하여 사용자 정보를 클라이언트에 응답했음
});

http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
});