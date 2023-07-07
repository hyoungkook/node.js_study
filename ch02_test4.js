var calc={};
calc.add=function(a,b){
    return a+b;
}                                        // calc 객체를 만든후 그 객체에 add속성을 추가하고, 더하기 함수를 할당한 것. 이렇게 만든 함수는 'calc.add()'와 같이 호출한다.

console.log('(모듈로 분리하기전)calc.add 함수 호출결과 : %d',calc.add(10,10));

