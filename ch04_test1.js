var url = require('url'); 
// url모듈을 로딩한후 url변수에 할당(URL모듈을 사용하기 위해 가장 처음 입력하는 코드는 require()메소드를 호출하는 코드)

var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');
// 주소 문자열을 URL객체로 만들기

var curStr = url.format(curURL);
// URL객체를 주소문자열로 만들기

console.log('주소문자열:%s', curStr);
console.dir(curURL);                            // URL 객체에 들어있는 속성 출력

var querystring = require('querystring');       // querystring모듈을 사용하기 위해 require메소드를 호출. 불러온 모듈은 querystring변수에 할당함.
var param = querystring.parse(curURL.query);    // querystring변수의 parse메소드를 호출. parse()메소드는 요청 파라미터 문자열을 파싱하여 객체로 만들어 줌. 요청 파라미터 구분하기

console.log('요청 파라미터 중 query의 값:%s', param.query);
console.log('원본요청 파라미터 :%s', querystring.stringify(param)); // stringify() 메소드는 객체안에 들어있는 요청파라미터를 다시 하나의 문자열로 바꿀때 사용.