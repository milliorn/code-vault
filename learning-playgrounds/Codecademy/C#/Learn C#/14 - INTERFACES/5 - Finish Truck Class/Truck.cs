using System;

namespace LearnInterfaces
{
  class Truck : IAutomobile
  {
  	public string LicensePlate
    { get; }
    
    //Add a private setter to that property.
    public double Speed
    { get; private set;}

    public int Wheels
    { get; }
     
    public void Honk()
    {
      Console.WriteLine("HONK!");
    }
    
    //Add a public double Weight property with just a getter.
    public double Weight { get; }
    
    //Add constructor to Truck class with two parameters: double speed, double weight.
    //Set the Speed property using speed
    //Set the Weight property using weight
    //Set a random LicensePlate value using Tools.GenerateLicensePlate()
    //Set Wheels to 8 if Weight is less than 400 and set Wheels to 12 otherwise
    public Truck(double speed, double weight)
    {
      this.Speed = speed;
      this.Weight = weight;
      this.LicensePlate = Tools.GenerateLicensePlate();
      this.Wheels = Weight < 400 ? 8 : 12;
    }
    
    //Add a void SpeedUp() method that increases the Speed property by 5.
    public void SpeedUp() => Speed += 5;
  
    //Add a void SlowDown() method that decreases the Speed property by 5.
    public void SlowDown() => Speed -= 5;  
  }
}





