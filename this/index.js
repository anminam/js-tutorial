var Person = function (name) {
  this.name = name;
};

var obj = {};

Person.apply(obj, ["anasfasdfminaam"]);

console.log(obj);
