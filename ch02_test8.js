var path = require('path');

//디렉터리 이름 합치기
var directories=["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서디렉터리:%s', docsDirectory);

//디렉터리 이름과 파일 이름 합치기
var curPath=path.join('Users.mike','notepad.exe');
console.log('파일패스:%s',curPath);

//패스에서 디렉터리, 파일이름, 확장자 구별하기
var filename="C:\\Users\\mike\\notepad.exe";
var dirname=path.dirname(filename);
var basename=path.basename(filename);
var extname=path.extname(filename);

console.log('디렉터리:%s,파일이름:%satisfies,확장자:%s',dirname, basename,extname);