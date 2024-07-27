using System;

namespace ANoteOnParameters
{
  class Program
  {
    static void Main(string[] args)
    {
      VisitPlanets(numberOfPlanets);
      VisitPlanets(4);
      VisitPlanets(5);
    }
    
    static void VisitPlanets(int numberOfPlanets)
    {
      Console.WriteLine($"You visited {numberOfPlanets} new planets...");
    }
  }
}

