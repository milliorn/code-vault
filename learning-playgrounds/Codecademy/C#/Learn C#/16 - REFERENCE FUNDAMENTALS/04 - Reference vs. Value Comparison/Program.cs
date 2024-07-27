using System;

namespace LearnReferences
{
  class Program
  {
    static void Main(string[] args)
    {
      //Create a variable b1 that refers to a new Book object.
      Book b1 = new Book(); 
      
      //Create a variable b2 that holds the same reference as b1.
      Book b2 = b1;
      
      //Print the result of b1 == b2 to the console. Why is that the value?
      Console.WriteLine(b1 == b2);
    }
  }
}

