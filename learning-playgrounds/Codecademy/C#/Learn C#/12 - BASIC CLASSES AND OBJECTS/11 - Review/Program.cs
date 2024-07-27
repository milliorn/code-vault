using System;

namespace BasicClasses
{
  class Program
  {
    static void Main(string[] args)
    {
      //Instantiate a new object with the name "Amazon". Store the result in a variable.
      Forest f = new Forest("Amazon");
      
      //Print the Trees property to the console.
      Console.WriteLine(f.Trees);
      
      //Call the Grow() method.
      f.Grow();
      
      //Print the Trees property again to the console to confirm that the Grow() method works.
      Console.WriteLine(f.Trees);
    }
  }
}

