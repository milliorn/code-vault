// The Interface Segregation Principle (ISP)
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  swim() {
    console.log(`${this.name} is swimming`);
  }

  fly() {
    console.log(`${this.name} is flying`);
  }
}

class Fish extends Animal {
  // This class needs the swim() method
}

class Bird extends Animal {
  //   THis class needs the fly() method
}

// Making them implement the methods they need
const bird = new Bird('Titi the Parrot');
bird.swim(); // Titi the Parrot is swimming

const fish = new Fish('Neo the Dolphin');
fish.fly(); // Neo the Dolphin is flying

console.log('\n');

// Both can also implement eat() method of the Super class because they both eat
bird.eat(); // Titi the Parrot is eating
fish.eat(); // Neo the Dolphin is eating 