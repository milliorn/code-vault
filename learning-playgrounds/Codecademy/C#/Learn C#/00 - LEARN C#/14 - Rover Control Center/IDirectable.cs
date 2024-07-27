namespace RoverControlCenter
{
  interface IDirectable
  {
    //define an interface IDirectable with two methods:
    //string GetInfo()
    //string Explore()
    //string Collect()
    //Edit Rover.cs and Satellite.cs so that they explicitly implement IDirectable.
    string GetInfo();
    string Explore();
    string Collect();
  }
}