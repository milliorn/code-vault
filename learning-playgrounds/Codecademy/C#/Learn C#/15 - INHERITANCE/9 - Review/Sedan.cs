using System;

namespace LearnInheritance
{
  class Sedan : Vehicle, IAutomobile
  {
    public Sedan(double speed) : base(speed)
    {
      Wheels = 4;
    }
    
    public override string Describe()
    {
      return $"This Sedan is moving on {Wheels} wheels at {Speed} km/h, with license plate {LicensePlate}.";
    }

  }
}
