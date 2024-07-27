using System;

namespace LearnInheritance
{
  //In Bicycle.cs, create an empty Bicycle class that inherits Vehicle.
  class Bicycle : Vehicle
  {
    //Define a constructor that:
    //has one double parameter for setting the Speed property
    //calls base() with that parameter
    //in its body, sets Wheels to 2
    public Bicycle(double Speed) : base(Speed)
    {
      Wheels = 2;
    }
    
    //Define a public void SpeedUp() method that limits the Speed to 15.
    //Add 5 to Speed
    //If Speed is greater than 15, set it to 15
    //In Bicycle.cs, label SpeedUp() with override.
    public override void SpeedUp()
    {
      Speed += 5;
      Speed > 15 ? Speed = 15 : Speed;
    }

    //Repeat the process with SlowDown().  It should override the inherited version and limit the Speed to 0.
    //Subtracts 5 from Speed
    //Sets it to 0 if Speed is less than 0
    //Is labeled override
    public override void SlowDown()
    {
      Speed -= 5;
      Speed < 0 ? Speed = 0 : Speed;
    }
  }
}
