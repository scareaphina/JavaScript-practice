// function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// inheritance
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};

// adds last name to the prototype property of the function construction
Person.prototype.lastName = 'Smith';

// new creates an empty object, then the constructor function (person) is called and the arguments are added to the empty object
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

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
