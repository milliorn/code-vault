using System;

namespace BasicClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      Forest f = new Forest("Congo", "Tropical");
      f.Trees = 0;
      
      Console.WriteLine(f.Name);
      Console.WriteLine(f.Biome);
      
      //Call the second constructor to create a Forest object named “Rendlesham”.
      Forest ff = new Forest("Rendlesham");
      //Below the constructor call, print the Biome property of this new instance.
      Console.WriteLine(ff.Biome);
    }
  }
}

