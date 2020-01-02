Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

console.log('Hello, world!');

//array.concat

var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);

console.log(c);
