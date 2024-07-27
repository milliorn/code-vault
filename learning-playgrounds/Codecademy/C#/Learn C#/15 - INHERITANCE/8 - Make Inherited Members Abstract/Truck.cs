using System;

namespace LearnInheritance
{
  class Truck : Vehicle, IAutomobile
  { 
    public double Weight
    { get; }

    public Truck(double speed, double weight) : base(speed)
    {
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

    //implementing Describe() methods in Bicycle, Sedan, and Truck.
    //mention the type, e.g. the bicycle version of the method returns a string containing "bicycle"
    //mention the license plate, speed, and wheels
    //be labeled with override
    public override string Describe()
    {  
      return $"This Truck is moving on {Wheels} wheels at {Speed} km/h, with license plate {LicensePlate}.";
    }
  }
}
