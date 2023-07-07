var fs = require('fs');                                       // 파일시스템에 접근하기 위해 먼저 fs모듈을 사용한다.

//파일을 동기식 IO로 읽어들입니다.
var data = fs.readFileSync('./a.json','utf8');                // 메소드에 Sync라는 단어가 붙어있으므로 동기식으로 동작

//읽어들인 데이터를 출력합니다.
console.log(data);