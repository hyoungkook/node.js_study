var Person={};                               // 객체 만들기(중괄호 사용)

Person['age']=20;                            // 객체에 속성 추가하기 (객체이름뒤에 대괄호를 붙이고 그안에 속성이름 넣기)
Person['name']='소녀시대';
Person.mobile='010-1000-1000';               // 객체에 속성 추가하기 (점 연산자를 사용해서)  

console.log('나이:%d',Person.age);
console.log('이름:%s',Person.name);
console.log('전화:%s',Person['mobile']);

