function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var me = new Person("An");
console.log(me.getName());

Person.prototype.name = "Kim";
console.log(Person.prototype.getName());
