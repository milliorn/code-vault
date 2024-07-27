METHOD CALLS AND INPUT
Method Overloading
Say you want to use Math.Round(), a built-in method. You go to the Microsoft documentation to learn how to use it, and find at least 8 different versions! They all have the same name: Math.Round().
https://docs.microsoft.com/en-us/dotnet/api/system.math.round?view=netframework-4.8

What’s happening here is called method overloading, and each “version” is called an overload. Though they have the same name, the overloads are different because they have either (i) different parameter types or (ii) different number of parameters. This is useful if you want the same method to have different behavior based on its inputs.

Let’s examine this concept with these two overloads: Math.Round(Double, Int32) and Math.Round(Double).

The first overload, Math.Round(Double, Int32), rounds the double to the int‘s number of decimal points

Math.Round(3.14159, 2); // returns 3.14
The second, Math.Round(Double), rounds the double to the nearest integer.

Math.Round(3.14159); // returns 3
In C#, when we say that the methods are “different”, we are really talking about their method signatures, which is the method’s name and parameter types in order.

For example, both methods above are named Round(), but one has Double and Int32 parameters, and the other has a Double parameter.
