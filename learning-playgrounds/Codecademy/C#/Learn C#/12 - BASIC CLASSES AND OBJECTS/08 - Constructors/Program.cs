using System;

namespace BasicClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest("Sahara", "Desert");
      f.Trees = 0;      
      Console.WriteLine(f.Name);
      Console.WriteLine(f.Biome);
    }
  }
}


