var express = require('express')
    , http = require('http')

var app = express();

app.use(function(req,res,next){                                             
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    res.redirect('http://www.daum.net');                             // 변경된 부분. 다른 웹페이지로 이동시킴

                                                                                     
});


http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
});