METHOD CALLS AND INPUT
Define a Method
Up until now, you’ve been calling built-in methods: methods that are available whenever you use C#. Sometimes you need a custom method for your specific program. In that case, you’ll need to define your own!

The basic structure of a method definition looks like this:

static void YourMethodName()
{
}
We’ll skip over static and void for the moment.

In C#, it’s convention to use PascalCase to name your method. The name starts with an uppercase letter and each word following begins with an uppercase as well. It’s not required in C#, but it makes your code easier to read for other developers.

The body of your method goes between the curly braces: { }. Whenever the method is called, the code in the body is executed.

static void YourMethodName()
{
  Console.WriteLine("Hi there!");
}
Just like any other method, we call it with parentheses:

YourMethodName();
Look closely at the code in the editor and you’ll see that you’ve been defining methods all along! Main() is a method. Every time you run the code, the Main() method is executed.

Since Main() is already a method, we’ll define our own methods outside of Main().
