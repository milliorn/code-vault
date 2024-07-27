//In Vehicle.cs, build an empty Vehicle class.
using System;

namespace LearnInheritance
{
  class Vehicle
  {
    //In Vehicle.cs, define:
    //string LicensePlate property (getter only)
    //double Speed property (getter and private setter)
    //int Wheels property (getter only)
    //void Honk() method
    //SpeedUp() method
    //SlowDown() method
    public string LicensePlate { get; }
    public double Speed { get; private set; }
    public int Wheels { get; }
    public void Honk() {}
    
    public void SpeedUp()
    {
      Speed += 5;
    }
    
    public void SlowDown()
    {
      Speed -=5;
    }
  }
}





