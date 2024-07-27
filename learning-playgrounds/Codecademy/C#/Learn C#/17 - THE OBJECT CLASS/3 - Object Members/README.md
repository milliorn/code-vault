THE OBJECT CLASS
Object Members
Object has a few useful members and they’re accessible by every type. Here are some important ones:

Equals(Object) — returns true if the current instance and the argument are equal (using value equality for value types and referential equality for reference types)
GetType() — returns the type of the object
ToString() — returns a string describing the object
You can see each method in action here:

Object o1 = new Object();
// t is System.Object
Type t = o1.GetType();

string s = o1.ToString();
// Prints "System.Object"
Console.WriteLine(s);

Object o2 = o1;
// Equals true
bool b = o1.Equals(o2);
Remember that we can access inherited members from a derived class. In this case, every type inherits from Object, so every type can access these members!

For the full list of Object members read the Microsoft documentation.
