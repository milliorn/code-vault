using System;

namespace ComparingLoops
{
  class Program
  {
    static void Main(string[] args)
    {
      string[] websites = { "twitter", "facebook", "gmail" };
      
      foreach (string e in websites)
      { 
        Console.WriteLine(e); 
      }
    }
  }
}

