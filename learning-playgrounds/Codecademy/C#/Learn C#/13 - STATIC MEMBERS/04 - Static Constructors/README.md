STATIC MEMBERS
Static Constructors
An instance constructor is run before an instance is used, and a static constructor is run once before a class is used:

class Forest 
{
  static Forest()
  { /* ... */ }
}
This constructor is run when either one of these events occurs:

Before an object is made from the type.
Before a static member is accessed.
In other words, if this was the first line in Main(), a static constructor for Forest would be run:

Forest f  = new Forest();
It would also be run if this was the first line in Main():

Forest.Define();
Typically we use static constructors to set values to static fields and properties.

A static constructor does not accept an access modifier.
