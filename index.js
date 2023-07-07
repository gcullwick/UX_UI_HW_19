console.log("working");

$("button#myBtn").on("click", function() {
  $(".modal").slideDown(500)/*.removeClass("notOpen");
  $(".modal").addClass("open");*/
  console.log("a");
})


console.log("b")

$(".close").on("click", function () {
  $(".modal").slideUp(500);
  /*$(".modal").removeClass("open");
  $(".modal").addClass("notOpen");*/
  console.log("c");
})
$(".submit").on("click", function () {
  $(".modal").slideUp(500);
  /*$(".modal").removeClass("open");
  $(".modal").addClass("notOpen");*/
  console.log("d");
})

function animate() {
  $('#myBtn').animate({
    opacity:0.9
  },{duration:1000,
    done:function(){
    console.log("1");
    $('#myBtn').animate({
      opacity:1.0
  },{duration:1000,
    done:animate()
      });
    }});
};


$(document).ready(function(){
    animate()
  })
  
  animate();