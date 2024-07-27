using System;

namespace RoverControlCenter
{
  class Program
  {
    static void Main(string[] args)
    {
      MoonRover lunokhod = new MoonRover("Lunokhod 1", 1970);
      MoonRover apollo = new MoonRover("Apollo 15", 1971);
      MarsRover sojourner = new MarsRover("Sojourner", 1997);
      Satellite sputnik = new Satellite("Sputnik", 1957); 
  		
      //Store the three rovers in an array of type Rover[], their shared base class.
      Rover[] rover = { lunokhod, apollo, sojourner };

      //Back in Main(), call the DirectAll() method using the array as the argument.
      DirectAll(rover);

      //To manage all space probes, which includes the three rovers and one satellite, put them in an array.
      //At the moment, the only inherited class they share is Object.
      Object[] spaceProbes = { lunokhod, apollo, sojourner, sputnik };
      TrackProbe(spaceProbes);

      //With a shared interface, we can manage Rover and Satellite types in the same array.
      //Create an array of type IDirectable[] containing all the probes (three rovers and one satellite).
      IDirectable[] allProbes = { lunokhod, apollo, sojourner, sputnik };

      //Update the DirectAll() method so that it now accepts one argument of type IDirectable[].
      //Try calling it with the newly created array!
      DirectAll(allProbes);
    }

    //Below Main(), write a static method DirectAll() that takes one argument of type Rover[]. The method should call the below three methods for each element and print out the returned strings.
    //GetInfo()
    //Explore()
    //Collect()
    public static void DirectAll(Rover[] rovers)
    {
      foreach(Rover r in rovers)
      {
        Console.WriteLine(r.GetInfo());
        Console.WriteLine(r.Explore());
        Console.WriteLine(r.Collect());
        Console.WriteLine();
      }
    }

    public static void DirectAll(IDirectable[] rovers)
    {
      foreach(IDirectable r in rovers)
      {
        Console.WriteLine(r.GetInfo());
        Console.WriteLine(r.Explore());
        Console.WriteLine(r.Collect());
        Console.WriteLine();
      }
    }
    //To test that we built the Object[] array correctly, print the results of GetType() for each object in the array.
    //For clarity, use string interpolation to print something like “Tracking a [TYPE]…” for each one.
    //GetType() is one of the methods defined in Object, but it returns the actual type of the object, not the reference type 
    public static void TrackProbe(Object[] probes)
    {
      foreach(Object o in probes)
      {
        Console.WriteLine($"Tracking a {o.GetType()}...");
      }

      Console.WriteLine();
    }    
  }
}
