using System;

namespace LearnInterfaces
{
  class Program
  {
    static void Main(string[] args)
    {
      Sedan s = new Sedan(60);
      Console.WriteLine($"Sedan with license plate {s.LicensePlate} and {s.Wheels} wheels, driving at {s.Speed} km/h.");
      s.Honk();
    }
  }
}

