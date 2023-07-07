var Users=[{name:'소녀시대',age:20}, {name:'걸스데이',age:22}];    // 배열객체를 만들어서 Users변수에 할당

var add = function(a,b){                                         // add변수에 함수를 할당                                          
    return a+b;
};

Users.push(add);                                                 // add변수에 할당된 함수를 Users배열에 추가

console.log('배열 요소의 수:%d', Users.length);
console.log('세번째 요소로 추가된 함수 실행 : %d', Users[2](10,10));