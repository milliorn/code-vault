METHOD CALLS AND INPUT
Capture Output
Like a math function or a factory machine, a method takes input and returns output. We’ve just seen how input works (arguments). Let’s see how output works.

When a method returns a value, it essentially passes a piece of data to wherever it was called. One way to capture the returned value of a method is with a variable:

int smallerNumber = Math.Min(3, 4);
Math.Min() returns the value 3, so you can imagine that value taking its place.

int smallerNumber = 3;
We can then use that variable as input to other methods, like Console.WriteLine():

Console.WriteLine(smallerNumber);
In this case, we can take a shortcut by nesting the method calls:

Console.WriteLine(Math.Min(3, 4));
Now the value returned by Math.Min() is used as input to Console.WriteLine().

Not every method returns a value. Console.WriteLine(), for example, prints 3 to the console but it doesn’t pass the value 3 to its caller. If you’re not sure what a method returns you can always check the Microsoft documentation.

https://docs.microsoft.com/en-us/dotnet/api/system.math.min?view=netframework-4.8
