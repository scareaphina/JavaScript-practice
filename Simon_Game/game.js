var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColor = buttonColors[randomNumber];

function nextSequence(min, max) {
  min = 0;
  max = 4;

  var randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
}
