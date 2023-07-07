var result = 0;

console.time('duration_sum');

for (var i = 1; i<=100000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 100000까지 더한 결과물 :', result);

console.log('현재 실행한 파일의 이름 :',__filename);
console.log('현재 실행한 파일의 패스 :',__dirname);

var Person = {name:'소녀시대', age:20};
console.dir(Person); // dir() 메소드를 출력하면 그 객체안에 들어있는 모든 속성이 콘솔에 출력됨. dir() 메소드는 log()메소드와 함께 객체의 속성을 확인할때 자주 사용.