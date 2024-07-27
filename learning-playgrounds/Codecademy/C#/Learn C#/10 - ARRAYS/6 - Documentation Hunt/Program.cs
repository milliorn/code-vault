using System;

namespace DocumentationHunt
{
  class Program
  {
    static void Main(string[] args)
    {     
      string[] summerStrut;
      
      summerStrut = new string[] { "Juice", "Missing U", "Raspberry Beret", "New York Groove", "Make Me Feel", "Rebel Rebel", "Despacito", "Los Angeles" };
      
      int[] ratings = { 5, 4, 4, 3, 3, 5, 5, 4 };
      string[] summerStrutCopy = new string[summerStrut.Length];
      
      Array.Copy(summerStrut, summerStrutCopy, summerStrut.Length);
      Console.WriteLine($"{summerStrutCopy[0]}");
      
      Array.Reverse(summerStrutCopy);
      Console.WriteLine($"{summerStrutCopy[0]}");
      Console.WriteLine($"{summerStrutCopy[summerStrutCopy.Length - 1]}");
      
      Array.Clear(summerStrutCopy, 0, summerStrutCopy.Length);
      Console.WriteLine($"{summerStrutCopy[0]}");
      Console.WriteLine($"{summerStrutCopy[summerStrutCopy.Length - 1]}");
    }
  }
}

