console.log("working");

$("button#myBtn").on("click", function() {
  $(".modal").removeClass("notOpen");
  $(".modal").addClass("open");
  console.log("a");
})


console.log("b")

$(".close").on("click", function () {
  $(".modal").removeClass("open");
  $(".modal").addClass("notOpen");
  console.log("c");
})
$(".submit").on("click", function () {
  $(".modal").removeClass("open");
  $(".modal").addClass("notOpen");
  console.log("c");
})

