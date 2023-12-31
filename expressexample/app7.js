var express = require('express')                                 // express 기본모듈 불러오기
    , http = require('http')
    , path = require('path');

var bodyParser = require('body-parser')                          // express의 미들웨어 불러오기
  , static = require('serve-static'); 

var app = express();                                             // express 객체 설정

app.set('port', process.env.PORT || 3000);                       // 기본속성 설정

app.use(bodyParser.urlencoded({extended:false}));                // body-parser를 사용해 application/x-www0form-urlencoded 파싱

app.use(bodyParser.json());                                      // body-parser 를 사용해 application/json 파싱

app.use(static(path.join(__dirname, 'public')));

app.use(function(req,res,next){                                  // 미들웨어에서 파라미터 확인            
    console.log('첫번째 미들웨어에서 요청을 처리함.');

    var paramId = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;
    var paramName = req.query.name;                              

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id:'+ paramId + '</p></div>');
    res.write('<div><p>Param password : '+paramPassword + '</p></div>');
    res.end();                                                               
});


http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
});