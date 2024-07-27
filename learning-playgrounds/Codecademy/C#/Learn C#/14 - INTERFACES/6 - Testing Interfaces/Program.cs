using System;

namespace LearnInterfaces
{
  class Program
  {
    static void Main(string[] args)
    {
      //Create two sedans and a truck:
      //a sedan with speed 60
      //a sedan with speed 70
      //a truck with speed 45 and weight 500
      Sedan s1 = new Sedan(60);
      Sedan s2 = new Sedan(70);
      Truck t1 = new Truck(45, 500);
      
      //Write three Console.WriteLine() statements.
      //Print the automobiles’ Speed, Wheels, and LicensePlate.
      Console.WriteLine($"{s1.Speed}, {s1.Wheels}, {s1.LicensePlate}");
      Console.WriteLine($"{s2.Speed}, {s2.Wheels}, {s2.LicensePlate}");
      Console.WriteLine($"{t1.Speed}, {t1.Wheels}, {t1.LicensePlate}");
      
      //Call SpeedUp() on all three automobiles.
      s1.SpeedUp();
      s2.SpeedUp();
      t1.SpeedUp();
      
      //Using Console.WriteLine(), print out the three automobile’s new speeds.
      Console.WriteLine($"{s1.Speed}");
      Console.WriteLine($"{s2.Speed}");
      Console.WriteLine($"{t1.Speed}");
    }
  }
}
