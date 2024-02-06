// $(document).ready(function(){
//   drawShape();
// });

// function drawShape(){
//   var cvs = $("#canvas1")[0];
//   var ctx = cvs.getContext("2d");

//   ctx.fillStyle = "#00FFFF";//채우기 색 지정
//   ctx.fillRect(10,10,80,50);//채워진 사각형
//   ctx.strokeStyle = "#0000FF";//선 색 지정
//   ctx.strokeRect(10,10,80,50);//속이 빈 사각형

//   ctx.font = "40px Arial";//글꼴 크기와 폰트
//   ctx.strokeText("Hello",200,50);//테두리만 있는 글자
//   ctx.fillText("Test",300,50);//색이 채워진 글자

//   ctx.fillStyle = "#00ffff";
//   ctx.beginPath();
//   ctx.moveTo(75,150);
//   ctx.lineTo(100,175);
//   ctx.lineTo(100,125);
//   ctx.fill(); 

//   ctx.strokeStyle = "#000";
//   ctx.beginPath();  
//   ctx.arc(175, 175, 50, 0, Math.PI*2, true)
//   ctx.moveTo(210, 175);
//   ctx.arc(175,175,35,0, Math.PI,false);
//   ctx.moveTo(165,165);
//   ctx.arc(160, 165,5,0, Math.PI, true);
//   ctx.moveTo(195,165);
//   ctx. arc(190,165,5,0,Math.PI*2,true);
//   ctx.stroke();

// }

$(document).ready(function(){
  drawShape();
})

function drawShape(){
  var cvs = $("#canvas1")[0];
  var ctx = cvs.getContext("2d");

  var image = new Image();
  image.src="/img/diopepe.jpg"
  image.onload = function(){
    var ptn = ctx.creatPattern(image,'repeat');
    ctx.rect(0,0,200,100);
    ctx.fillStyle = ptn;
    ctx.fill();
  }
}