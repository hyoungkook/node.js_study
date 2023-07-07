var Users=[{name:'소녀시대', age:30}, {name:'걸스데이', age:22}, {name:'티아라', age:23}];

console.log('배열 요소의 수 : %d', Users.length);
for(var i=0; i<Users.length; i++){
    console.log('배열요소#'+i+':%s',Users[i].name);  // Users[i].name 코드로 객체의 name속성을 순서대로 콘솔창에 출력
}

console.log('forEach 구문 사용하기');
Users.forEach(function(item,index){                 // for문을 실행했을때과 결과가 같다               
    console.log('배열요소#'+index+'%s',item.name);
});