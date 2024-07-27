// The Dependency Inversion Principle (DIP)
class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  bark() {
    console.log('woof! woof!! woof!!!');
  }
}

class Cat extends Animal {
  meow() {
    console.log('meooow!');
  }
}

// Add Ape class
class Ape extends Animal {
  meow() {
    console.log('woo! woo! woo!');
  }
}

function printAnimalNames(animals) {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal.getName());
  }
}

const dog = new Dog('Jack'); // Jack
const cat = new Cat('Zoey'); // Zoey

// Use the Ape class
const ape = new Ape('King Kong'); // King Kong

const animals = [dog, cat, ape];

printAnimalNames(animals);