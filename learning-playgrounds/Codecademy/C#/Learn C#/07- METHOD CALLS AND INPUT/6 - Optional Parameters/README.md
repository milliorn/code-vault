METHOD CALLS AND INPUT
Optional Parameters
To make our functions even more flexible, we can make certain parameters optional. If someone calls your method without all the parameters, the method will assign a default value to those missing parameters.

All you have to do is use the equals sign (=) when defining the method. In this example, punctuation is an optional parameter, and its default value is ".".

static void Main(string[] args)
{
  YourMethodName("I'm hungry", "!"); // prints "I'm hungry!"
  YourMethodName("I'm hungry");  // prints "I'm hungry."
}

static void YourMethodName(string message, string punctuation = ".")
{
  Console.WriteLine(message + punctuation);
}
