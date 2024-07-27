STATIC MEMBERS
Main()
Now that you’re familiar with classes, you’re ready to tackle the Main() method, the entry point for any program. You’ve seen it many times, but now you can explain every part!

class Program
{
  public static void Main (string[] args) 
  {
  }
}
Main() is a method of the Program class.
public — The method can be called outside the Program class.
static — The method is called from the class name: Program.Main().
void — The method means returns nothing.
string[] args — The method has one parameter named args, which is an array of strings.
Main() is like any other method you’ve encountered. It has a special use for C#, but that doesn’t mean you can’t treat it like a plain old method!
