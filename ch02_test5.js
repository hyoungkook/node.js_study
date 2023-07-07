var calc = require('./calc');  
console.log('(모듈로 분리한후)calc.add함수호출결과 :%d',calc.add(10,10));

 // calc.js모듈파일을 불러오기 위해 먼저 require함수를 호출하고, require함수의 파라미터로 모듈파일의 이름을 전달하는데, 파일이름 전체를 다 사용하지 않고 확장자를 뺀 이름만 사용한다.
 // 하나의 기능을 모듈로 정의해 두면 필요에 따라 원하는 모듈만 불러들여 사용가능하다.

 var calc2 = require('./calc2');
 console.log('(모듈로 분리한후)calc2.add함수호출결과 :%d',calc2.add(10,10));