using System;

namespace OptionalParameters
{
  class Program
  {
    static void Main(string[] args)
    {
      VisitPlanets();
      VisitPlanets(4);
      VisitPlanets(5);
    }
    
    static void VisitPlanets(int numberOfPlanets = 0)
    {
      Console.WriteLine($"You visited {numberOfPlanets} new planets...");
    }
  }
}

