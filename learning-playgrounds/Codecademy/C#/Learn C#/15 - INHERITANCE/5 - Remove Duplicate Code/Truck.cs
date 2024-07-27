//Make Truck inherit from Vehicle:
//Use colon syntax to announce that Truck inherits the Vehicle class.
//Remove the duplicated properties and methods from Truck.


using System;

namespace LearnInheritance
{
  class Truck : Vehicle, IAutomobile
  {
    public double Weight
    { get; }

    public Truck(double speed, double weight)
    {
      Speed = speed;
      LicensePlate = Tools.GenerateLicensePlate();
      Weight = weight;

      if (weight < 400)
      {
        Wheels = 8;
      }
      else
      {
        Wheels = 12;
      }
    }
  }
}






