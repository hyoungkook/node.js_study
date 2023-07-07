var Person = {}; 

Person['age'] = 20;
Person['name'] = '소녀시대';

var oper = function(a,b){                          // 변수에 함수를 할당하고
    return a+b;
};

Person['add']=oper;                                // 그 변수를 객체의 속성으로 추가하기

console.log('더하기:%d',Person.add(10,10));

