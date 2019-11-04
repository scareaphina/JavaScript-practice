// new features

// variable declarations with let and const

// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
// const name6 = 'Jane Smith'; // variables declared with const are immutable
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);

// ES5
function driversLicence5(passedTest) {

  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLicence6(true);

// ES6
function driversLicence6(passedTest) {

  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }

  console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.'); // if you move this out of the if statement, it doesn't work because if and const are block scoped, not function scoped

}

driversLicence6(true);

// blocks and IIFEs
// strings
// arrow functions
// deconstructing
// arrays
// the spread operator
// rest and default parameters
// maps
// classes and subclasses
// promises
// native modules
