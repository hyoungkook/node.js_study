var express = require('express')
    , http = require('http')

var app = express();

app.use(function(req,res,next){                                             
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    res.send({name:'소녀시대', age:20});                             // 변경된 부분. 웹브라우저에서 json객체를 응답으로 받아서 표시.

                                                                                     
});

http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
});