// var playercharacter = function(name){ //생성자 함수 선언
//   this.name = name; //프로퍼티 선언
//   this.getname = function(){return name}; //메소드 선언
// }

// var pc = new playercharacter("basic");

// document.write("객체 예제 : 생성자 함수에 메소드 작성<hr>");
// document.write(pc.getname(),"<br>");

// function student(name,korean,math){
//   this.name = name;
//   this.korean = korean;
//   this.math = math;
// }

// student.prototype.getsum = function(){//생성자 함수밖에서 메소드 추가
//   return this.korean + this.math;
// };

// var s1 = new student("김대중",58,58);// s1 객체 생성

// document.write("객체 예제 : 프로토타입에 메소드 작성<hr>");
// document.write(s1.name,":",s1.getsum());

// document.getElementById("result").innerHTML = "<p>연습</p>"

// $(document).ready(function(){
//   $("#b1").click(function(){
//     $("#pic1").hide();
//   })
// })

// $("#b2").click(function(){
//   $(".c1").hide();
// })

// $("#b3").click(function(){
//   $("img").hide();
// })

// $("#b4").click(function(){
//   $("img").show()
// })

// $(document).ready(function(){
//   $("p").mouseenter(function(){//엘리먼트에 마우스 포인터를 위치시키면 자동실행
//     $(this).text("중력의 힘을 이기지못하고!!");
//   })

//   $("p").mouseleave(function(){
//     $(this).text("여긴 응디시티!!");
//   })

//   $("button").dblclick(function(){
//     $(this).css("color","yellow").text("야 기부노 좋다!!!")
//   });
// })

// $(document).ready(function(){
//   $(document).keypress(function(){
//     $("#p1").css("color","lightblue").text("파란색인게 좌파새끼노");
//   })
// })

// $(document).ready(function(){
//   $("input").focus(function(){
//     $(this).css("background-color","red");
//   })
//   $("input").blur(function(){
//     $(this).css("background-color","teal");
//   })
// });

// $(document).ready(function(){
//   $("#result").html("<img src='/img/한국여자.jpg' border='0'>");

//   $(window).resize(function(){
//     $("#result").html("<img src='/img/coffeepepe.jpg' border='0'>");
//   });
// })

// $(document).ready(function(){
//   $("#pro").click(function(){
//     $("#result").load("img.html")
//   })
// })

$(document).ready(function(){
  $("#pro").click(function(){
    $("#result").load("3-2.txt",function(response,stu,xhr){
      if(stu=="success")
      alert("로드성공!!");
    else(stu == "error")
    alert("에러:"+xhr.status+":"+xhr.stu);
    });
  });
});