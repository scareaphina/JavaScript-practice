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

///////////////////////////////////

// second attempt

var massMark = 80;
var heightMark = 1.72;
var massJohn = 92;
var heightJohn = 1.85;

var markBMI = (massMark / (heightMark * heightMark));
var johnBMI = (massJohn / (heightJohn * heightJohn));

console.log(markBMI);
console.log(johnBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s at ' + markBMI + '.');
    if (markBMI < johnBMI) {
        console.log('John\'s BMI is higher than Mark\'s at ' + johnBMI + '.');
    }
}

//third attempt using function constructor and object inheritance

var Person = function(name, mass, height) {
     this.name = name;
     this.mass = mass;
     this.height = height;
 }

Person.prototype.calcBMI = function () {
    console.log(this.mass / (this.height * this.height));
}

var john = new Person('John', 80, 1.72);
var mark = new Person('Mark', 92, 1.85);

john.calcBMI();
mark.calcBMI();

var higherBMI = john.calcBMI > mark.calcBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI);
