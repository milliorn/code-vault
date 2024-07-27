BASIC CLASSES AND OBJECTS
Constructors
In each of the examples so far, we created a new Forest object and set the property values one by one. It would be nice if we could write a method that’s run every time an object is created to set those values at once.

C# has a special type of method, called a constructor, that does just that. It looks like a method, but there is no return type listed and the method name is the name of its enclosing class:

class Forest 
{
  public Forest()
  {
  }
}
We can add code in the constructor to set values to fields:

class Forest
{
  public int Area;

  public Forest(int area)
  {
    Area = area;
  }
}
This constructor method is used whenever we instantiate an object with the new keyword:

 // Constructor is called here
Forest f = new Forest(400);
But we’ve been instantiating new objects all day! Why did it work before we defined a constructor?

If no constructor is defined in a class, one is automatically created for us. It takes no parameters, so it’s called a parameterless constructor. That’s why we have been able to instantiate new objects without errors:
