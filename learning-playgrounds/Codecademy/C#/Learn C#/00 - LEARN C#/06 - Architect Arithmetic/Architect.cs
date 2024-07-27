using System;

namespace ArchitectArithmetic
{
  class Architect
  {
    private const double PESOS = 180.0; 
    private const double RUPEE = 684.86;
    private const double RIYAL = 7.06;
    
    //Define a method for each basic shape.
    private static double Rectangle(double length, double width) => length * width;
    private static double Circle(double radius) => Math.PI * Math.Pow(radius, 2.0);
    private static double Triangle(double bottom, double height) => (bottom * height) / 2;

    public static void Teotihuacan()
    {
      //Calculate the area of each part, add them together, and store the result in a variable.
      //Multiply the total area by the cost of flooring material � 180 Mexican pesos and store the result in a variable.
      //Write the result to the console, explaining what the number means.
      //Pesos should only have two decimal places, so use a built-in method to round the value.      
      Console.WriteLine("Teotihuacan");
      Console.WriteLine($"Area of Rectangle: {Rectangle(2500, 1500)}");
      Console.WriteLine($"Area of Circle: {Circle(375) / 2}");
      Console.WriteLine($"Area of Triangle: {Triangle(750, 500)}");
      Console.WriteLine($"Pesos: {PESOS}");
      Console.WriteLine($"Cost: {Math.Round(PESOS * (Rectangle(2500, 1500) + Circle(375) / 2 + Triangle(750, 500)), 2)}");
    }

    public static void TajMahal()
    {
      Console.WriteLine("Taj Mahal");
      Console.WriteLine($"Area of Rectangle: {Rectangle(90.5, 90.5)}");
      Console.WriteLine($"Area of Circle: {Circle(0) / 2}");
      Console.WriteLine($"Area of Triangle: {Triangle(24, 24) * 4}");
      Console.WriteLine($"Rupee: {RUPEE}");
      Console.WriteLine($"Cost: {Math.Round(RUPEE * (Rectangle(90.5, 90.5) - Triangle(24, 24) * 4), 2)}");
    }

    public static void Mecca()
    {
      Console.WriteLine("Great Mosque of Mecca");
      Console.WriteLine($"Area of Rectangle: {Rectangle(180.0, 106.0) + Rectangle(284.0, 264.0)}");
      Console.WriteLine($"Area of Circle: {Circle(0) / 2}");
      Console.WriteLine($"Area of Triangle: {Triangle(264, 84)}");
      Console.WriteLine($"Saudi Riyal: {RIYAL}");
      Console.WriteLine($"Cost: {Math.Round(RIYAL * ((Rectangle(180.0, 106.0) + Rectangle(284.0, 264.0)) - Triangle(264, 84)), 2)}");
    }  

    public static void Greet()
    {
      Console.WriteLine("What monument would you like to work with?");
      Console.WriteLine("Press 1 for Teotihuacan");
      Console.WriteLine("Press 2 for Taj Mahal");
      Console.WriteLine("Press 3 for Great Mosque of Mecca");
      Console.WriteLine("Press 0 to Exit");
    }

    public static void Retry()
    {
        Console.WriteLine("Sorry, I did not understand that. Try again.");
        Greet();      
    }  
  }
}