INHERITANCE
Access Inherited Members with Base
To construct a Sedan, we must first construct an instance of its superclass Vehicle.

We can refer to a superclass inside a subclass with the base keyword.

For example, in Sedan:

base.SpeedUp();
refers to the SpeedUp() method in Vehicle.

There’s special syntax for calling the superclass constructor:

class Sedan : Vehicle
{
  public Sedan (double speed) : base(speed)
  {
  }
}
The above code shows a Sedan that inherits from Vehicle. The Sedan constructor calls the Vehicle constructor with one argument, speed. This works as long as Vehicle has a constructor with one argument of type double.

Even if we don’t use base() in Sedan, it will call a Vehicle constructor. Without an explicit call to base(), any subclass constructor will implicitly call the default parameterless constructor for its superclass. For example, this code implicitly calls Vehicle():

class Sedan : Vehicle
{
  // Implicitly calls base(), aka Vehicle()
  public Sedan (double speed)
  {
  }
}
The above code is equivalent to this:

{
  public Sedan (double speed) : base()
  {
  }
}
This code will ONLY work if the constructor Vehicle() exists. If it doesn’t, then an error will be thrown.
