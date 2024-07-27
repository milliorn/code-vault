namespace ActionAndFuncDelegate
{
  public static class Program
  {
    static void Main(string[] args)
    {
      // Call the ActionDelegateSample method
      ActionDelegateSample();

      Console.WriteLine("\n");

      // Call the FuncDelegateSample method
      FuncDelegateSample();
    }

    // Method that demonstrates the Action delegate
    public static void ActionDelegateSample()
    {
      Console.WriteLine("Action Delegate Result");

      // Create an Action delegate named ActionCalculator
      // It takes two integer parameters (a and b)
      Action<int, int> ActionCalculator = (a, b) =>
      {
        // Perform calculations and print the results
        Console.WriteLine($"Addition result: {a + b}");
        Console.WriteLine($"Subtraction result: {a - b}");
        Console.WriteLine($"Multiplication result: {a * b}");
        Console.WriteLine($"Division result: {a / b}");
      };

      // Call the Action delegate with arguments (4 and 2)
      ActionCalculator(4, 2);
    }

    // Method that demonstrates the Func delegate
    public static void FuncDelegateSample()
    {
      Console.WriteLine("Func Delegate Result");

      // Create an instance of the Calculator class
      var FuncCalculator = new Calculator();

      // Create Func delegates named add, subtract, multiply, and divide
      // They take two integer parameters and return an integer
      Func<int, int, int> add = FuncCalculator.Add;
      Func<int, int, int> subtract = FuncCalculator.Subtract;
      Func<int, int, int> multiply = FuncCalculator.Multiply;
      Func<int, int, int> divide = FuncCalculator.Divide;

      // Call each Func delegate with arguments (4 and 2)
      // Print the results of each operation
      Console.WriteLine($"Addition result: {add(4, 2)}");
      Console.WriteLine($"Subtraction result: {subtract(4, 2)}");
      Console.WriteLine($"Multiplication result: {multiply(4, 2)}");
      Console.WriteLine($"Division result: {divide(4, 2)}");
    }
  }
}
