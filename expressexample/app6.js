var express = require('express')
    , http = require('http')

var app = express();

app.use(function(req,res,next){                                             
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    var userAgent = req.header('User-Agent');
    var paramName = req.query.name;                                 // 클라이언트의 요청 파라미터(query string)는 req객체의 query 객체안에 넣어두게 된다. 요청 파라미터는 이 코드로 확인 할 수 있다.

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>User-Agent:'+ userAgent + '</p></div>');
    res.write('<div><p>Param name : '+paramName + '</p></div>');
    res.end();                                                               
});


http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
});