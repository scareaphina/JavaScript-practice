
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


$("button").on("click", function() {
  $("h1").toggle();
});

$("button").on("click", function() {
  $("h1").fadeToggle();
});

$("button").on("click", function() {
  $("h1").slideToggle();
});

$("button").on("click", function() {
  $("h1").animate({opacity: 0.5});
});

// can only add css rules in the animate method that have a numeric value

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

// can chain animations
