var Person = {};                                      // 객체만들기

Person['age'] = 20;
Person['name'] = '소녀시대';
Person.add = function(a,b){                           // 객체의 속성으로 함수 추가하기
    return a+b;
}

console.log('더하기:%d', Person.add(10,10));           // 객체의 속성으로 할당된 함수 호출하기

