using System;

namespace ArchitectArithmetic
{
  class Program
  {
    public static void Main(string[] args)
    {
      Console.WriteLine("Architect Arithmetic");
      Architect.Greet();
      
      string input = Console.ReadLine();
      while (input != "0" && input != "1" && input != "2" && input != "3")
      {
        Architect.Retry();
        input = Console.ReadLine();
      }

      int choice = 0;

      if (Int32.TryParse(input, out choice))
      {
        switch(choice)
        {
          case 0: Console.WriteLine("Goodbye!"); break;
          case 1: Architect.Teotihuacan(); break;
          case 2: Architect.TajMahal(); break;
          case 3: Architect.Mecca(); break;
          default: Console.WriteLine("Default! OMG?"); break;
        }
      }

      else 
      {
        Console.WriteLine("Int32.TryParse failed?");
      }
    }
  }
}