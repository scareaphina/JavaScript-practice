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

var jane = Object.create(personProto,
    {
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'designer' }
    });

// primitives vs objects
// variables associated with objects do not actually contain the object, rather they contain a reference to the place in memory where the object is stored (abstraction)

var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

// returns 23 and 46

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
