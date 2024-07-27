using System;

namespace WhileLoop
{
  class Program
  {
    static void Main(string[] args)
    {
      int emails = 20;  
      
      while (emails != 0)
      {
        emails--;
        Console.WriteLine($"Deleting emails.  {emails} remain.");
      }

      Console.WriteLine("INBOX ZERO ACHIEVED!");
    }
  }
}

