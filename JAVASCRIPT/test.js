// var var1 = 1;
// var str1 = "test";
// var status = true;

// document.write("데이터 예제 - 숫자타입,문자열타입,부울타입<br>");
// document.write(var1 + "," + str1 + "," + status);

// var v1 = 5;
// var v2 = {id:"aaaa",pass:"password",method:function(){return 1;}};

// document.write("데이터타입 예제 - 객체<br>")
// document.write(v1 + "," + v2 + "<br>");
// document.write(v2.id + "," + v2.pass + "<br>");
// document.write(v2.method()+ "<br>");

// var arr1 = [1,2,3,4,5];
// document.write("데이터파일 - 배열<br>");
// document.write(arr1 + "<br>");
// document.write(arr1[0] + "," , arr1[arr1.length-3]);

// var func1 = function(x){
//   var y = x + 6;
//   return x + y;
// };
// document.write("데이터타입 예제 - 함수<br>")
// document.write(func1(1));

// var v1 = 3
// const v2 = "test"
// var v3 =  {id:"바보병신"};
// let v4 = ["fuck","shit"];
// var v5 = function(){return 1;};

// document.write("데이터타입 예제-변수선언<br>");
// document.write(v1 + "<br>");
// document.write(v2 + "<br>");
// document.write(v3 + "<br>");
// document.write(v4 + "<br>");
// document.write(v5() + "<br>");

// var i = 21;
// var s = 10;

// if(i < 10){
//   s += i;
// }else{
//   s -= i
// }

// document.write("제어문 예제 - 기본if문 <br>");
// document.write("s변수의값:"+ s + "<br/>");

// var i = 18;
// var s = 74;
// if(i < 10){
//   s += i
// }

// document.write("제어문예제 - 조건 만족할때만 처리가 있는 if문<br>");
// document.write("s변수의 값:" + s + "<br>");

// var x = 1;
// var str1 = "";
// if(x > 1 ){
//   str1 = "양수";
// }
// else if(x===1){
//   str1 = "1";
// }else{
//   str1 = "게이련";
// }

// document.write("제어문 예제 - 다중if문 <br>");
// document.write(str1);

// var a = 6;
// var v1 = (a > 5)? 5:a;
// document.write("제어문 예제 - 조건연산자<br>");
// document.write(v1);

// document.write("제어문 예제 - for문<br>");
// for(var x = 0; x < 5; x++){
//   document.write(x+"&nbsp;")
// }

// var objName = {name:"홍석천",subname:"김게이"};
// document.write("제어문 예제 : for-in문<br>");
// for(var v1 in objName){
//   document.write(v1 + ":" + objName[v1] + "<br>");
// }

// var objName = [{name:"홍석천",subname:"김게이"},
// {name:"빌리",subname:"반다크홈"}];

// document.write("제어문 예제 : for-in문<br>");
// for(let obj1 of objName){
//   for(var v1 in obj1){
//     document.write(v1 + ":" + obj1[v1]+"<br>");
//   }
// }

// var str = "";
// for(var i = 0; i<10; i++){
//   if(i==5)break;
//   str += i + "";
// }

// document.write("결과문 예제 - break문<br>");
// document.write("결과:"+"&nbsp;" + str +"&nbsp;" );


// var str = "";
// for(var i = 0; i < 10; i++){
//   if(i==5)continue;
//   str += i;
// }

// document.write("제어문 예제-continue문<br>");
// document.write("결과:"+ str+ "&nbsp;");

// function add(x,y) {return x+y;}

// document.write("함수예제 : 함수선언문으로 함수 정의<br>");
// document.write(add(5,3));

// var add = function(x,y){ return x+y};

// document.write("함수예제 : 함수표현식으로 함수 정의<br>")
// document.write(add(5,3))
