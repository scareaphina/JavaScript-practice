Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

console.log('Hello, world!');

// Chapter 3: Objects

// Object Literals

var emptyObject = {};

var stooge = {
  firstName: "Jerome",
  lastName: "Howard"
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
