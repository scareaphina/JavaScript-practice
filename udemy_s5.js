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

// new creates an empty object, then the constructor function (person) is called and the arguments are added to the empty object
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
