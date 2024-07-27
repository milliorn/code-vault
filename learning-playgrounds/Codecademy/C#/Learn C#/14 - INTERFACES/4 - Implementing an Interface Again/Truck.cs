using System;
//In Truck.cs, create an empty Truck class that implements the IAutomobile interface.
namespace LearnInterfaces
{
  class Truck : IAutomobile
  {
    //You should see the error CS0535 telling you that the Truck needs to implement the interface! Implement the interface by adding the three properties and one method defined in IAutomobile, which you can check in IAutomobile.cs.
    public string LicensePlate { get; }
    public double Speed { get; }
    public int Wheels { get; }
    public void Honk() => Console.WriteLine("HONK!");
  }
}
