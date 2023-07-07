exports.add=function(a,b){          // 더하기 함수는 exports객체에 add속성이 추가됨. 메인파일에서 이 파일을 모듈로 불러들이면 add함수를 호출하여 사용할 수 있다.
    return a+b;
}