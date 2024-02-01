// var v1 = function(x){return x + 10};

// document.write("함수예제 : 익명함수 정의<br>");
// document.write(v1(9));

// document.write("함수예제 : 즉시실행함수 정의<br>");
// (function(){
//   var x = "hello!";
//   document.write(x);
// })();

// var counter = 0;
// function add1(){return counter += 1;}

// document.write("함수예제 : 카운터 변수를 전역변수로 선언<br>");
// document.write(add1(),"<br>");
// document.write(add1(),"<br>");
// document.write(add1(),"<br>");
// document.write(counter)

// function add1(){
//   var counter = 1; //카운터변수: 지역변수
//   return counter += 1;
// }

// add1(); // counter = 1
// add1(); // counter = 1
// add1(); // counter = 1

// function add1(){
//   var counter = 0;
//   return counter += 1;
// }

// document.write("함수예제 : 카운터 변수를 지역변수로 선언<br>");
// document.write(add1(),"<br>")
// document.write(add1(),"<br>")
// document.write(add1(),"<br>")

// var add1 = (function(){
//   var counter = 0;
//   return function(){counter += 1; return counter;}
// })();

// document.write("함수 예제 : 클로저를 사용한 카운터변수를 딜레마 처리<br>");
// document.write(add1(),"<br>");
// document.write(add1(),"<br>");
// document.write(add1(),"<br>");

// var objStudent = {name: "이재명",
// major:"드럼통암살",
// to_do: function(m){return m + "선동중";}};

// document.write("객체예제 : 객체생성,프로퍼티 접근<br>");
// document.write(objStudent.name+"<br>");
// document.write(objStudent.to_do(objStudent.major)+"<br>");

// objStudent.major = "음주음전 강화";
// objStudent.age = 56;
// document.write(objStudent.major +"<br>");
// document.write(objStudent.age+"살"+"<hr>");

// var object1 = {
//   number1 : 523,
//   String1 : "중력",
//   boolean1 : true,
//   array1 : [523,518,419],
//   method1 : function(){return 1;}
// };

// document.write("객체 예제 : 객체 프로퍼티 반복 접근<br>");
// for(var x1 in object1){
//   document.write(x1,":",object1[x1],"<br>");
// }

// document.write("object.method1()메소드 실행:"+object1.method1());

// var objName = {name:"김씹쌔",
// subName:"골아니"};

// document.write("객체예제 : 객체 프로퍼티 제거<br>");
// document.write("objName객체 프로퍼티 제거<hr>");
// document.write("objName객체 프로퍼티 출력<hr>");
// for(var v1 in objName){
//   document.write(v1+":"+objName[v1] + "<br>");
// }

// delete objName.subName; //objName객체의 subName프로퍼티를 제거
// document.write("<br>subName프로퍼티 제거 후 objName객체 프로퍼티 출력<hr>");
// for(var y1 in objName){
//   document.write(y1 + ":" + objName[y1]+"<br>")
// }

// var obj1 = {name:"홍석천"};
// var obj2 = {name:"홍suck천"};
// var obj3 = obj1;

// document.write("객체 예제 : 객체 레퍼런스 비교<br>");
// if(obj1 == obj3)//같은객체
//   document.write("obj1과 obj3는 같은 객체<br>")
//   else
//   document.write("obj1과 obj3는 다른객체<hr>")
  
//    if(obj1 == obj2) //다른객체
//    document.write("obj1과 obj2는 같은 객체<br>")
//    else
//    document.write("obj1과 obj2는 다른객체<br>")

// var str1 = "반다크홈"
// var str2 = "반다크홈"
// var obj1 = {name:"반다크홈"};
// var obj2 = {name:"van dark home"}

// document.write("객체 예제 : 객체 내용 비교<br><br>");
// if(str1 == str2)
// document.write("str1,str2 문자열 내용이 같다<br><br>")
// else
// document.write("str1,str2 문자열 내용이 다르다<hr>")

// if(JSON.stringify(obj1)===JSON.stringify(obj2))
// document.write("obj1,obj2객체는 객체의 내용이 같다<br>")
// else
// document.write("obj1,obj2객체는 객체의 내용이 다르다<br>");

var PlayerCharacter = function(name){ //생성자 함수 선언
  this.name = name; //프로퍼티 선언
}

var pc = new PlayerCharacter("warrior"); //객체생성
document.write("객체 예제 : 생성자 함수선언<br>");
document.write(pc.name);