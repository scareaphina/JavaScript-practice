/*******************************
* Variables and data types
*/

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;

/****************** 
 * Variable mutation and type coercion
*/

var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age =  'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

/**********************
 * Basic operators
 */

var now, yearJohn, yearMark
var now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
var yearJohn = now - 28;
var yearMark = now - 33;

console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John.');
var x;
console.log(typeof x);


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge)

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 + 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x *= 10;
console.log(x);
x ++;
console.log(x);

/**********************
 * CODING CHALLENGE 1
 */

 /*
 Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formpula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meters).

 1. Store Mark and John's mass and height in variables
 2. Calculate both their BMIs
 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

 Good Luck!
 */

var massMark = 80;
var heightMark = 1.72;
var massJohn = 92;
var heightJohn = 1.85;

var MarkBMI = massMark / (heightMark * heightMark);
var JohnBMI = massJohn / (heightJohn * heightJohn);
console.log(MarkBMI, JohnBMI);


var higherBMI = MarkBMI > JohnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI);

/*************************
 * If / else statements
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is not married.')
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is not married.')
}

var massMark = 80;
var heightMark = 1.72;
var massJohn = 92;
var heightJohn = 1.85;

var MarkBMI = massMark / (heightMark * heightMark);
var JohnBMI = massJohn / (heightJohn * heightJohn);

if (MarkBMI > JohnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than mark\'s')
}

/***********************
 * Boolean logic
 */

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a child.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >=  20 && age < 30){
    console.log(firstName + ' is a young man.');
}
else {console.log(firstName + ' is an adult.');
}

/*********************
 * The Ternary Operator and Switch Statements
 */

var firstName = 'John';
var age = 16;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/*if(age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/

// switch statement

var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to make art.');
        break;
    case 'driver':
        console.log(firstName + ' drives a bus in Philadelphia.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful museums.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true){
    case age < 13:
        console.log(firstName + ' is a child.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >=  20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is an adult.');
}

/****************
 * Truthy and falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN = will be evaluated to false in a boolean situation. not exactly false, but will be evaluated false in if/else
//truthy values: NOT falsy values

var height;

height = '';

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
} 

// good way to test if a variable has been defined or not
// make sure to define 0 as not falsy unless desired

