using System;

namespace LearnInheritance
{
  class Bicycle : Vehicle
  {

    public Bicycle(double speed) : base(speed)
    {
      Wheels = 2;
    }

    public override void SpeedUp()
    {
      Speed += 5;
      
      if (Speed > 15)
      {
        Speed = 15;
      }
    }

    public override void SlowDown()
    {
      Speed -= 5;

      if (Speed < 0)
      {
        Speed = 0;
      }
    }
    
    //implementing Describe() methods in Bicycle, Sedan, and Truck.
    //mention the type, e.g. the bicycle version of the method returns a string containing "bicycle"
    //mention the license plate, speed, and wheels
    //be labeled with override
    public override string Describe()
    {  
      return $"This bicycle is moving on {Wheels} wheels at {Speed} km/h, with license plate {LicensePlate}.";
    }
  }
}





