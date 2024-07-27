using System;

namespace LearnReferences
{
  class Program
  {
    static void Main(string[] args)
    {
      //Create a variable of type Book and set it to null.
      Book b = null;
      
      //Print the variable to the console.
      //Remember that null presents a null reference, so you should see nothing printed.
      Console.WriteLine(b);
      
      //Compare the variable to null using the == operator and print the result to the console.
      Console.WriteLine(b == null);
    }
  }
}

