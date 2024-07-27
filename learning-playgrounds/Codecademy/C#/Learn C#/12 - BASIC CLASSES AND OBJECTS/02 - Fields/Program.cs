using System;

namespace BasicClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest();
      //Set values to those four fields.
      f.biome = "Forest";
      f.age = 1000;
      f.name = "Amazon";
      f.trees = 100;
      Console.WriteLine(f.name);
    }
  }
}

