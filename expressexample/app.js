var express = require('express')           // 기본 모듈 불러오기 (express모듈은 http모듈위에서 동작하므로 express모듈을 불러올때는 항상 http모듈도 함께 불러들인다)
    , http = require('http');

var app = express();                       // 익스프레스 객체생성

app.set('port', process.env.PORT||3000);    // 기본 포트를 app객체에 속성으로 설정

http.createServer(app).listen(app.get('port'), function(){           // 익스프레스 서버 시작
    console.log('익스프레스 서버를 시작했습니다. :'+ app.get('port'));
});