INTERFACES
Implementing an Interface
Our interface is complete! Pretty easy, right?

As we design our automobile-like classes, we’ll need to implement this IAutomobile interface. In C#, we must first clearly announce that a class implements an interface using the semicolon syntax:

class Sedan : IAutomobile
{
}
This empty Sedan class “promises” to implement the IAutomobile interface. In other words, it must have the properties and methods the highway patrol asked for (Speed, LicensePlate, Wheels, and Honk()).

If we don’t, we get a type error like this:

error CS0535: Sedan does not implement interface member 'IAutomobile.LicensePlate'
To fix this we’ll need to define the members in the interface:

class Sedan : IAutomobile
{
  public string LicensePlate
  { get; }

  // and so on...
}
Remember that these members must be public. How else will the highway patrol be able to access them?
