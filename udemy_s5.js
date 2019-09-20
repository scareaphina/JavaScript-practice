// prototype notes
// every js object has a prototype property, which makes inheritance possible in js
// the prototype property of an object is where we put methods and properties that we want other objects to inherit
// the constructor's prototype property is NOT the prototype of the constructor itself, it is the prototype of all the instances that are created through it
// when a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, it moves on the object's prototype, this continues until the method is found: prototype chain

// function constructor

//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'teacher'
//};

// always write function constructors with a capital letter

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

// called "instantiation," because these objects are new instances of the person constructor

// called instantiation because these objects are instances of the person object

// when we use the new operator, a new empty object is created, then after that the constructor function is called with the arguments that we specified

// calling the function creates a new execution context that uses the this variable, which points to the global object
// but if we look at the function constructor, the new operator makes it so that the this variable of the function points at the new empty object rather than the global object

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// this is not in the object, but we have access to it because of the function constructor

// function constructor - making my own

var Friend = function(name, faveFood, partner, petName, homeTown, pronouns) {
    this.name = name;
    this.faveFood = faveFood;
    this.partner = partner;
    this.petName = petName;
    this.homeTown = homeTown;
    this.pronouns = pronouns;
}

var safi = new Friend('Safi', 'emergency fish', 'Vanessa', '', 'Kingston', 'she/her');
var cole = new Friend('Cole', '', 'Tristan', '', '', 'they/them');
var briar = new Friend('Briar', 'Thai', 'Jessamine', 'Pika', 'Austin','xe/hir');
var claire = new Friend('Claire', 'sushi', 'Filipe', 'Cleo', 'Baltimore', 'she/her')

console.log(safi);
console.log(cole);
console.log(briar);
console.log(claire);

// making my own function constructor again

var Rpg = function(name, publisher, gameSystem, genre, yeaOrNay) {
    this.name = name;
    this.publisher = publisher;
    this.gameSystem = gameSystem;
    this.yeaOrNay = yeaOrNay;
    this.genre = genre;
}

var dresdenFiles = new Rpg('Dresden Files', 'Evil Hat', 'Fate', 'Modern High Fantasy/Adventure', 'Yea!');
var witch = new Rpg('Witch: Road to Lindisfarne', 'Pompey Crew Design', 'Collaborative Storytelling', 'Horror and Feelings', 'Yea!');
var dnd = new Rpg('Dungeons and Dragons', 'Wizards of the Coast', 'Who even knows', 'Fantasy and Adventure', 'Nay');
var tenCandles = new Rpg('Ten Candles', 'Cavalry Games', 'Collaborative Storytelling', 'Horror and Feelings', 'Yea!');

console.log(dresdenFiles);
console.log(witch);
console.log(dnd);
console.log(tenCandles);

// object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});

// allows us to directly specify which object should be a prototype

// the difference between object.create and the function constructor pattern is that object.create builds an object that inherits directly from the object that we passed into the first argument, while the function constructor creates a newly created object that inherits from the constructor's prototype property

// Object.create allows us to implement really complex inheritance structures in an easier way

// primitives vs objects
// variables associated with objects do not actually contain the object, rather they contain a reference to the place in memory where the object is stored (abstraction)

var a = 23;
var b = a;
a = 46;
//var b = a;

console.log(a);
console.log(b);

// returns 23 and 46

// each of the variables hold their own copy of the data and do not reference anything

// two variables holding primitives are really two different things

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// returns 30 and 30

// when we said obj1 = obj2, we didn't create a new object, we just created a reference that pointed to the same object, so changing the age on object 1 changes the age on object 2. because they are the same object.

// functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon',
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

// primitive remains unchanged
// primitive and object passed into the function, but they behave differently, the primitive remains unchanged but the city changes

// we do not pass an object into a function, but only the reference that points to the object

// Functions

// Functions are an instance of the object type and behave like any other object. we can store them in a variable, pass them as an argument to other functions, and return functions from other functions.

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

////////////////////////////

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please xplain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', What do you do?')
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');

////////////////////////////

// writing my own function

function comfortIn(friend) {
    if (friend === 'sad') {
        return function(name) {
            console.log('I\'m sorry that you are feeling sad, ' + name + '. How can I best support you right now?');
        }
    } else if (friend === 'activated') {
        return function(name) {
            console.log(name + ' I\'m so sorry. That sounds really upsetting. What do you need from me?');
        }
    } else if (friend === 'sick') {
        return function(name) {
            console.log('Being sick sucks, ' + name + '. What can I do to help when you\'re feeling this way?');
        }
    } else {
        return function(name) {
            console.log('It\'s okay if you don\'t know exactly what you\'re feeling right now. Let me know how I can support you when you feel comfortable.')
        }
    }
}

var sadFeel = comfortIn('sad');
var activatedFeel = comfortIn('activated');
var sickFeel = comfortIn('sick');

sadFeel('Claire');
activatedFeel('Shane');
sickFeel('Safi');

////////////////////////

// immediately invoked function expressions IIFE 

/*function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

// trick the parser into thinking that what is within the () is a function expression and not a declaration. so we can wrap an unnamed function in () and have it work as an expression

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();

//console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}) (5);

///////////////////////////
// Closures

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);

/////////////////////////

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


//retirement(66)(1990);

///////////////////
// the interview questions function with closure use

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please xplain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {console.log('Hello ' + name + ', What do you do?')
        }
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Jane');
interviewQuestion('driver')('Mike');

///////////////////////////
// bind, call, and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', everyone! I\'m ' + this.name + ', I\'m a ' + this.job + ', and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? Hope you\'re having a great ' + timeOfDay + '. I\'m ' + this.name + '! I\'m a ' + this.age + ' year old ' + this.job + '.');
        }
    }
}

john.presentation('formal', 'morning');
john.presentation('friendly', 'evening');

// call method
john.presentation.call(emily, 'formal', 'evening');
john.presentation.call(emily, 'friendly', 'afternoon');

// apply method
// john.presentation.apply(emily ['friendly, afternoon']);

// bind method
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');
emilyFormal('evening');

// another bind example

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el>= limit;
}

// can bind the arraycalc to the limit of full age for Japan, which is 20. change the isFullAge function to take a limit rather than the number 18, then bind the isFullAge function

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
