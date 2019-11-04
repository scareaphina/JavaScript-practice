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

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
// logged to console is 1 2 3 4 23 because of block scoping, just like if you define a variable of the same name outside of a function.
///////////////////////////////
// blocks and IIFEs

// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

//console.log(a + b);
console.log(c);

// ES5
(function () {
  var c = 3;
})();

//console.log(c);


///////////////////////////////
// strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES 6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));

///////////////////////////////
// arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el) {
  return 2019 - el;
});
console.log(ages5);

// ES6
const ages6 = years.map(el => 2019 - el);
console.log(ages6);


// deconstructing
// arrays
// the spread operator
// rest and default parameters
// maps
// classes and subclasses
// promises
// native modules
