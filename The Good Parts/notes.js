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

// update

// if the property name already exists, it is replaced

stooge["first-name"] = 'Jerome';

// if it doesn't exist, the object is augmented

stooge["middle-name"] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
  model: 'Boeing 77'
};
flight.status = 'overdue';


