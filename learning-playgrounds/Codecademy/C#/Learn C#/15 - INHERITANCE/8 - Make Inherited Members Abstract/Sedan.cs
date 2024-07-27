using System;

namespace LearnInheritance
{
  class Sedan : Vehicle, IAutomobile
  {
    public Sedan(double speed) : base(speed)
    {
      Wheels = 4;
    }

    //implementing Describe() methods in Bicycle, Sedan, and Truck.
    //mention the type, e.g. the bicycle version of the method returns a string containing "bicycle"
    //mention the license plate, speed, and wheels
    //be labeled with override
    public override string Describe()
    {  
      return $"This sedan is moving on {Wheels} wheels at {Speed} km/h, with license plate {LicensePlate}.";
    }
  }
}
