using System;

namespace LearnInterfaces
{
  class Sedan : IAutomobile
  {
  	public string LicensePlate
    { get; }
    
    //There is no setter for the Speed property. Add a private setter to the property.
    public double Speed
    { get; private set; }

    public int Wheels
    { get; }
    
    public void Honk()
    {
      Console.WriteLine("HONK!");
    }
    
    //Add a constructor to Sedan class one parameter, speed, of type double.
    //set the Speed property to speed
    //set a random LicensePlate value
    //set Wheels to 4
    public Sedan(double speed)
    {
      Speed = speed;
      LicensePlate = Tools.GenerateLicensePlate();
      Wheels = 4;
    }
    
    //Add a void SpeedUp() method that increases the Speed property by 5.
    public void SpeedUp() => Speed += 5;
  
    //Add a void SlowDown() method that decreases the Speed by 5.
    public void SlowDown() => Speed -= 5;  
  }
}
