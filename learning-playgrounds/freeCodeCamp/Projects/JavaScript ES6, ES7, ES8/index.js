'use strict';

const Animal = require('./Classes.js');
const Cat = require('./Cat.js');

const dog = new Animal("dog", 4);
console.log(dog.legs)
console.log(dog.type)
dog.makeNoise();
console.log(Animal.returnTen())
console.log(dog.data);

const cat = new Cat("cat", 4);
console.log(cat.tail);
console.log(cat.data);
console.log(cat.legs);
console.log(cat.type);
cat.makeNoise();