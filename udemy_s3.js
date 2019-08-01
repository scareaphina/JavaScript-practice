// how Javascript works, behind the scenes

var name = 'John';

function first() {
    var a = 'Hello!';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi!';
    third();
    var z = b + name;
}

function third() {
    var c = 'Hey!';
    var z = c + name;
}

first();

///////////////////////////////////////
// Lecture: Hoisting

// functions

calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
} // function declaration hoists the function definition so that calling it before the function is declared still results in the function being used properly

// hoisting only works for function declarations, not function expressions
// SEE HERE - if placed first, this returns an error because retirement has not been declared a function yet.

//retirement(1990); 

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990); //returns the correct value to the console of 39

// variables

console.log(age); // returns 'undefined,' which is how hoisting works with variables

var age = 23
console.log(age); // if you log this to console before declaring the variable, it returns undefined because, as far as the background process is concerned, it is waiting for the variable to be defined. it's not an error, just an empty variable.

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age); // so in this order, it prints 23 to the console because the variable of 23, above, gets stored in the global execution context object, so the function foo doesn't get it's definition of age called to the console

// BIG TAKEAWAY: so we can use function declarations befor we actually declare them in our code.
