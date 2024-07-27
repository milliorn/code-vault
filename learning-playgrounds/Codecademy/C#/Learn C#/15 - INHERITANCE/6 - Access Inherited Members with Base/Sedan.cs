//Delete the lines in the constructor that set Speed and LicensePlate
//Call the superclass constructor using : base(speed).
using System;

namespace LearnInheritance
{
  class Sedan : Vehicle, IAutomobile
  {
    public Sedan() : base(speed)
    {
      Wheels = 4;
    }
  }
}
