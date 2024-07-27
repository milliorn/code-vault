using System;

namespace LearnInheritance
{
  abstract class Vehicle
  {
    public string LicensePlate
    { get; private set; }

    public double Speed
    { get; protected set; }

    public int Wheels
    { get; protected set; }

    public Vehicle(double speed)
    {
      Speed = speed;
      LicensePlate = Tools.GenerateLicensePlate();
    }

    public virtual void SpeedUp()
    {
      Speed += 5;
    }

    public virtual void SlowDown()
    {
      Speed -= 5;
    }
    
    public void Honk()
    {
      Console.WriteLine("HONK!");
    }
   
    //Add the abstract method Describe() to the Vehicle class.
    //Describe() should be public and return a string
    //Vehicle will also need to be labeled abstract
    public abstract string Describe();
  }
}




