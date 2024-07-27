STATIC MEMBERS
Static Fields and Properties
You already know how to create a field and property, like:

class Forest
{
  private string definition;
  public string Definition
  {
     get { return definition; }
     set { definition = value; }
   }
}
The definition of what a forest is applies to all Forest objects, not just one — there should only be one value for the whole class. This is a good use case for a static field/property.

To make a static field and property, just add static after the access modifier (public or private).

class Forest
{
  private static string definition;
  public static string Definition
  { 
    get { return definition; }
    set { definition = value; }
  }
}
Remember that static means “associated with the class, not an instance”. Thus any static member is accessed from the class, not an instance:

static void Main(string[] args)
{
  Console.WriteLine(Forest.Definition);
}
If you tried to access a static member from an instance (like f.Definition) you would get an error like:

error CS0176: Static member 'Forest.Definition' cannot be accessed with an instance reference, qualify it with a type name instead
