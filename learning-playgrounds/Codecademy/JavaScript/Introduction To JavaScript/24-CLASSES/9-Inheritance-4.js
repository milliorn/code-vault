/*
CLASSES

Inheritance IV

Now that we know how to create an object that inherits properties from a parent class let’s turn our attention to methods.

When we call extends in a class declaration, all of the parent methods are available to the child class.

Below, we extend our Animal class to a Cat subclass.
*/

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
} 


class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

const bryceCat = new Cat('Bryce', false);

/*
In the example above, our Cat class extends Animal. As a result, the Cat class has access to the Animal getters and the .incrementBehavior() method.

Also in the code above, we create a Cat instance named bryceCat. Because bryceCat has access to the name getter, the code below logs 'Bryce' to the console.
*/

console.log(bryceCat.name);

/*
Since the extends keyword brings all of the parent’s getters and methods into the child class, bryceCat.name accesses the name getter and returns the value saved to the name property.

Now consider a more involved example and try to answer the following question: What will the code below log to the console?
*/

bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior

/*
The correct answer is 1. But why?

The Cat class inherits the _behavior property, behavior getter, and the .incrementBehavior() method from the Animal class.

When we created the bryceCat instance, the Animal constructor set the _behavior property to zero.

The first line of code calls the inherited .incrementBehavior() method, which increases the bryceCat _behavior value from zero to one.

The second line of code calls the behavior getter and logs the value saved to _behavior (1).
*/


class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);

console.log(nurseOlynyk.remainingVacationDays);	//	15
