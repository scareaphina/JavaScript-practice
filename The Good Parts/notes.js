Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

console.log('Hello, world!');

// Chapter 3: Objects

// Object Literals

var emptyObject = {};

var stooge = {
  "first-name": "Jerome",
  "last-name": "Howard"
};

var flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
  },
  arrival: {
    IATA: "LAX",
    time: "2004-09-23 10:42",
    city: "Los Angeles"
  }
};

console.log(stooge["first-name"]);
console.log(flight.departure.IATA);

console.log(stooge["middle-name"]);
console.log(flight.status);
console.log(stooge["FIRST-NAME"]);

var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

// Update

// if the property name already exists, it is replaced

stooge["first-name"] = 'Jerome';

// if it doesn't exist, the object is augmented

stooge["middle-name"] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
  model: 'Boeing 77'
};
flight.status = 'overdue';

// other objects are passed by reference. never copied.

var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;

// nick is 'Curly' because x and stooge are references to the same object

var a = {}, b = {}, c = {};

// a, b, and c each refer to a different empty object

c = d = e = {};

// c, d, and e each refer to the same empty object

// Prototype

if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
}

var anotherStooge = Object.create(stooge);

anotherStooge['first-name'] = 'Harry';
anotherStooge['middle-name'] = 'Moses';
anotherStooge.nickname = 'Moe';

anotherStooge.profession = 'actor';

console.log(anotherStooge.profession);

// Reflection

console.log(typeof flight.number);
console.log(typeof flight.status);
console.log(typeof flight.arrival);
console.log(typeof flight.manifest);

console.log(typeof flight.toString);
console.log(typeof flight.constructor);

console.log(flight.hasOwnProperty('number'));
console.log(flight.hasOwnProperty('constructor'));

// Enumeration

var name;
for (name in anotherStooge) {
  if (typeof anotherStooge[name] !== 'function') {
    document.writeIn(name + ': ' + anotherStooge[name]);
  }
}

var i;
var properties = [
  'first-name',
  'middle-name',
  'last-name',
  'profession'
];

for (i = 0; i < properties.length; i += 1) {
  document.writeIn(properties[i] + ': ' + another_stooge[properties[i]]);
}

// Delete

console.log(another_stooge.nickame);

// remove nickname from another_stooge, revealing the nickname of the prototype

delete another_stooge.nickname;

console.log(another_stooge.nickame);
