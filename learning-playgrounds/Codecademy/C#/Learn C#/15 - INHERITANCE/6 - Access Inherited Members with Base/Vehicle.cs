/*Since the LicensePlate and Speed properties defined in Vehicle are no longer accessed in Sedan or Truck, they no longer need to be protected. Switch those two setters to private.
*/

using System;

namespace LearnInheritance
{
  class Vehicle
  {
    public string LicensePlate
    { get; private set; }

    public double Speed
    { get; private set; }

    public int Wheels
    { get; protected set; }

    public void SpeedUp()
    {
      Speed += 5;
    }

    public void SlowDown()
    {
      Speed -= 5;
    }
    
    public void Honk()
    {
      Console.WriteLine("HONK!");
    }
    
    //Let’s explicitly define a constructor in Vehicle.
    //It has one parameter, double speed
    //Within the constructor, it sets Speed and LicensePlate

    public Vehicle (double speed)
    {
      this.Speed = speed;
      this.LicensePlate = LicensePlate;
    }
  }
}



