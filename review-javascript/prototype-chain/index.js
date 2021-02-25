var util = {};

util.inherits = function (child, parent) {
  child.prototype = parent.prototype;
  child.prototype.constructor = parent;
};

util.base = function (self, ...args) {
  var prototype = Object.getPrototypeOf(self);
  prototype.constructor.apply(self, args);
};

var Animal = function () {
  this.message = "hoge";
};

Animal.prototype = {
  message: ".....",
  say: function () {
    return this.message;
  }
};

// var Dog = function () {
//   this.message = "わんわん";
// };
// Dog.prototype = Animal.prototype;
var Dog = function () {
  // 親クラスを呼び出す
  util.base(this);
  this.message = "わんわん";
};
// 小クラスが親クラスを継承
util.inherits(Dog, Animal);

var dog = new Dog();

console.log(dog.say());