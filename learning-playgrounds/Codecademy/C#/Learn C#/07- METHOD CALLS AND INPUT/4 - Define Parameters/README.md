METHOD CALLS AND INPUT
Define Parameters
Remember calling methods with arguments, like Math.Min(3, 4)? Methods that you define can use arguments as well, making them more versatile and useful.

While we are defining our method, we don’t know the actual argument values that will be used when calling the method. But we do know the expected data type and how it will be used. We can use this information to define a parameter, which sort of works like a variable within a method. Imagine it as a placeholder for the actual argument value.

static void YourMethodName(string identity)
{
  Console.WriteLine(identity);
}
The YourMethodName() method now has one parameter named identity of type string.

Separate multiple parameters with commas:

static void YourMethodName(string identity, int age)
{
  Console.WriteLine($"{identity} is {age} years old.");
}
When you call your method, the values to be used for each parameter are called arguments. In this case "Yoda" and 900 are arguments for the identity and age parameters.

YourMethodName("Yoda", 900);
