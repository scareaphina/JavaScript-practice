
$("button").click(function() {
  $("h1").css("color", "purple");
});

$("input").keypress(function() {
  console.log(event.key);
});

$("body").keypress(function() {
  console.log(event.key);
});

$(document).keypress(function() {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});
