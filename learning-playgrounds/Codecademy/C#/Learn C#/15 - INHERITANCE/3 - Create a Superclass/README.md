INHERITANCE
Create a Superclass
A superclass is defined just like any other class:

class Vehicle
{
}
And a subclass inherits, or “extends”, a superclass using colon syntax (:):

class Sedan : Vehicle
{
}
A class can extend a superclass and implement an interface with the same syntax. Separate them with commas and make sure the superclass comes before any interfaces:

class Sedan : Vehicle, IAutomobile
{
}
The above code means that Sedan will inherit all the functionality of the Vehicle class, and it “promises” to implement all the functionality in the IAutomobile interface.
