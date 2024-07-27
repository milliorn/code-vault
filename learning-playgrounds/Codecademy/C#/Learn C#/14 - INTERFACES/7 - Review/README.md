INTERFACES
Review
Well done! In this lesson, you:

Learned that interfaces are useful to guarantee certain functionality across multiple classes
Built an interface using the interface keyword
Defined properties and methods (but not constructors or fields) in the interface
Built classes that implemented the interface
Added members to the classes that weren’t specified in the interface
As a last note: a class can implement multiple interfaces. For example, Sedan could implement IAutomobile and a new IReyclable interface. It would be useful to separate interfaces if they aren’t related, i.e. not all automobiles are recyclable.

With this lesson you completed, you might be asking yourself this question:

We have duplicated code, like SpeedUp() and SlowDown(), in two classes, and we know that duplicated code is hard to maintain. Is there a way to avoid duplication?

The answer has to do with inheritance. The concept won’t be covered in this lesson, but now you have one good reason to learn it.

Your C# skills are growing. Keep up the good work!

Instructions
The completed code is provided for you here. Make sure you are comfortable with interfaces before you move on from this lesson.

IAutomobile.cs defines the interface
Sedan.cs and Truck.cs define two classes that implement the interface
Program.cs demonstrates those classes in action
