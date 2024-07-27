const Animal = require('./Classes.js');

module.exports = class Cat extends Animal {
  constructor(type, legs, tail) {
    super(type, legs);
    this.tail = tail;
  }

  makeNoise(sound = "meow") {
    console.log(sound)
  }
}
