THE OBJECT CLASS
Overriding Object Members
The Equals() and ToString() methods in Object are virtual, so they can be overridden.

For example, we can override ToString() in the Diary class:

class Diary
{
  /* other members omitted */

  public override string ToString()
  {
    return $"This Diary is currently on page {CurrentPage}."; 
  }
}
Now any Diary instance will use this version of the method:

Diary dy = new Diary(7);
Console.WriteLine(dy.ToString());
// Output: "This Diary is currently on page 7."
