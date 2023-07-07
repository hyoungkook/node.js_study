var fs = require('fs');

fs.readFile('./a.json', 'utf8', function(err, data) {                  // 파일을 비동기식 IO로 읽어들입니다
    console.log(data);                                                 // 읽어들인 데이터를 출력합니다.
});

console.log('프로젝트 폴더 안의 a.json 파일을 읽도록 요청했습니다.');