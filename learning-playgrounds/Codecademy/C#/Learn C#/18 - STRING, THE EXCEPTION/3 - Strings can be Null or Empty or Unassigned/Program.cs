using System;

namespace StringTheException
{
  class Program
  {
    static void Main(string[] args)
    {
      //Using Console.Write() and Console.ReadLine(), ask the user for input and capture it in a variable.
      Console.Write("Input something:");
      string s = Console.ReadLine();
      
      //Write an if-else statement that checks for a null or empty string. If it is null, print out the message:
      //"You didn't enter anything!"
      //Otherwise, print out the message:
      //"Thank you for your submission!"
      if (String.IsNullOrEmpty(s)) 
      {
        Console.WriteLine("You didn't enter anything!");
      }
      else
      {
        Console.WriteLine("Thank you for your submission!");
      }
      
      //Run the program using dotnet run.  What happens when you enter no text and hit Enter?
    }
  }
}
