var Users=[{name:'소녀시대,age:20'},{name:'걸스데이',age:22}];  // 배열 객체를 만들어서 Users 변수에 할당 (배열안에는 name속성과 age속성을 가진 두개의 객체가 있음)

Users.push({name:'티아라',age:23});                            // push() 메소드를 호출하여 새로운 객체를 추가

console.log('사용자수 : %d', Users.length);                    // 배열안의 요소의 갯수를 알아내기 위해서 length속성 사용
console.log('첫번째 사용자 이름 :%s', Users[0].name);