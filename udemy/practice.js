//playing around with alerts and simple string fiddling

var name = prompt("What is your name?");

var firstChar = name.slice(0,1);

var nameIntCaps = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

var newName = nameIntCaps + restOfName;

alert("Hello " + newName + "!");

// a simple tweet character counter

var tweet = prompt("Compose your tweet!");

var remaining = 140 - tweet.length;

var tweetUnder140 = tweet.slice(0,140);

alert(tweetUnder140);

alert("You have written " + tweet.length + " characters. You have " + remaining + " characters left.");
