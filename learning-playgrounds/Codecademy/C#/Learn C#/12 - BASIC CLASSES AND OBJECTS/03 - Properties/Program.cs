using System;

namespace BasicClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest();
      //Replace any use of the field f.name with the property f.Name.
      //Replace any use of the field f.trees with the property f.Trees.
      f.Name = "Congo";
      f.Trees = 0;
      f.age = 0;
      f.biome = "Tropical";
      
      Console.WriteLine(f.Name);
    }
  }
}

