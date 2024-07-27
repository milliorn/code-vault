using System;

namespace BuiltInMethods
{
  class Program
  {
    static void Main(string[] args)
    {     
      string[] summerStrut;
      
      summerStrut = new string[] { "Juice", "Missing U", "Raspberry Beret", "New York Groove", "Make Me Feel", "Rebel Rebel", "Despacito", "Los Angeles" };
      
      int[] ratings = { 5, 4, 4, 3, 3, 5, 5, 4 };
      int threeRating = Array.IndexOf(ratings, 3);
      
      Console.WriteLine($"Song number {threeRating + 1} is rated three stars.") ;   
			
      string songLength = Array.Find(summerStrut, e => e.Length > 10);
      
      Console.WriteLine($"The first song that has more than 10 characters in the title is {songLength}.");
      
      Array.Sort(summerStrut);
      
      Console.WriteLine($"{summerStrut[0]}");
      Console.WriteLine($"{summerStrut[summerStrut.Length - 1]}");
    }
  }
}
