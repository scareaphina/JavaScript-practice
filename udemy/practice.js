var name = prompt("What is your name?");

var nameCaps = (name.slice(0,1)).toUpperCase();

var newName = nameCaps + name.slice(1,100);

alert("Your name is " + newName);

//playing around with alerts and simple string fiddling
