BASIC CLASSES AND OBJECTS
Automatic Properties
It might have felt tedious to write the same getter and setter for the Name and Trees properties. C# has a solution for that! The basic getter and setter pattern is so common that there is a short-hand called an automatic property. As a reminder, here’s the basic pattern for an imaginary size property:

public string size;
public string Size
{
  get { return size; }
  set { size = value; }
}
This pattern can be written as an automatic property:

public string Size
{ get; set; }
In this form, you don’t have to write out the get() and set() methods, and you don’t have to define a size field at all! A hidden field is defined in the background for us. All we have to worry about is the Size property.
