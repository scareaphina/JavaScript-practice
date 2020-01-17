var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var randomChosenColor = buttonColors[randomNumber];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
}
