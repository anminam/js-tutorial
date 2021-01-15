var value = 1;

var obj = {
  value: 777,
  foo: function () {
    console.log("foo", this);
    console.log("foo", this.value);

    function bar() {
      console.log("bar", this);
      console.log("bar", this.value);
      console.log(arguments);
    }
    console.log("-----------------------------");
    bar(4, 5);
    console.log("-----------------------------");
    bar.call(obj, 4, 5);
    console.log("-----------------------------");
    bar.apply(obj, [4, 5]);
    console.log("-----------------------------");
    bar.bind(obj)(4, 5);
    console.log("-----------------------------");
  },
};

obj.foo();

console.log("-----------------------------");
