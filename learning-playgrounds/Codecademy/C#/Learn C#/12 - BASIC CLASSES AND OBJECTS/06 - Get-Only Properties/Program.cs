using System;

namespace BasicClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest();
      f.Name = "Congo";
      f.Trees = 0;
      //error CS0272: The property or indexer 'Forest.Age' cannot be used in this context because the set accessor is inaccessible
      f.Age = 0;
      f.Biome = "Desert";
      
      Console.WriteLine(f.Name);
      Console.WriteLine(f.Biome);
    }
  }
}

