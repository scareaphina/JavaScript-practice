//playing around with alerts and simple string fiddling

var name = prompt("What is your name?");

var firstChar = name.slice(0,1);

var nameIntCaps = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

var nameFullLower = restOfName.toLowerCase();

var newName = nameIntCaps + nameFullLower;

alert("Hello " + newName + "!");

// a simple tweet character counter

var tweet = prompt("Compose your tweet!");

var remaining = 140 - tweet.length;

var tweetUnder140 = tweet.slice(0,140);

alert(tweetUnder140);

alert("You have written " + tweet.length + " characters. You have " + remaining + " characters left.");

// number stuff

var dogAge = prompt("How old is your dog?");

var humanage = ((dogAge - 2) * 4) + 21;

alert ("Your dog is " + humanage + " in human years.")

// random little example of using functions in other functions

function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk.");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

return calcChange(money, 1.5);

}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle)
return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello Master, here is your $" + getMilk(10, 3) + " change. And your milk.");

// an itty BMI calculator

function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / Math.pow(height, 2));
  return "Your BMI is " + bmi + ".";
}

bmiCalculator(65, 1.8);

// pseudorandom number generator

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

// using random numbers to make a little love tester

var person1 = prompt("Please enter your name.");
var person2 = prompt("Please enter the name of your crush.");

var loveTester = Math.random() * 100;
loveScore = Math.floor(loveTester) + 1;

if (loveScore > 70) {
  alert(person1 + ", your love score with " + person2 + " is " + loveScore + "%!!"
 + " You love each other as much as Kanye loves Kanye!");
} else if (loveScore > 30 && loveScore < 70) {
  alert(person1 + ", your love score with " + person2 + " is " + loveScore + "%!" + " You could fizzle or sizzle.");
} else {
  alert(person1 + ", your love score with " + person2 + " is " + loveScore + "%." + " Friendship is probably the way to go with " + person2 + ".");
}

// playing more with bmi calculator

function bmiCalculator (weight, height) {
    return interpretation;
}

function interpretation () {
if (bmi < 18.5) {
  alert("Your BMI is " + bmi + ", so you are underweight.");
} else if (bmi < 24.9 && bmi > 18.5) {
  alert("Your BMI is " + bmi + ", so you are a normal weight.");
} else {
  alert("Your BMI is " + bmi + ", so you are overweight.");
}
}

// alerts and booleans

var guestList = ["Angela", "William", "Lars", "Jason", "Jane", "Anthony", "Jim"];

var guestName = prompt("Please enter your name.");

if (guestList.includes(maybeGuest)) {
  alert("Welcome, " + guestName + "! I'm excited to see you at my party!");
} else {
  alert("Sorry " + guestName + ", you aren't on the list.");
}

// fizzbuzz

var output = [];
var count = 1;

function fizzBuzz() {

while(count <= 100) {

if (count % 3 === 0 && count % 5 === 0) {
  output.push("FIZZBUZZ");
} else if (count % 3 === 0) {
  output.push("FIZZ");
} else if (count % 5 === 0) {
  output.push("BUZZ");
} else {
  output.push(count);
}

count++;
console.log(output);
}
}

// bottles of beer

var numberOfBottles = 99

while (numberOfBottles >= 0) {

    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } 

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");

}
