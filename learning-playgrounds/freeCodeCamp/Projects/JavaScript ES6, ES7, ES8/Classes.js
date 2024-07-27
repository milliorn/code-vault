'use strict';

module.exports = class Animal {
  constructor(type, legs) {
    this.type = type;
    this.legs = legs;
  }

  get data() {
    return `Type: ${this.type}, Legs: ${this.legs}`
  }

  makeNoise(noise = "bark") {
    console.log(noise);
  }

  static returnTen() {
    return 10;
  }
}

