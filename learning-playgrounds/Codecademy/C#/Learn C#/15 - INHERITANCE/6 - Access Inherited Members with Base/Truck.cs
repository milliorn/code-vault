//Delete the lines in the constructor that set Speed and LicensePlate
//Call the superclass constructor using : base(speed)

using System;

namespace LearnInheritance
{
  class Truck : Vehicle, IAutomobile
  { 
    public double Weight
    { get; }

    public Truck(double weight) : base(speed)
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
  }
}
