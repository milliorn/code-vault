using System;

namespace TheObjectClass
{
  class Program
  {
    static void Main(string[] args)
    {
      Book bk = new Book("Ta-Nehisi Coates", "Between the World and Me");
          
    //call bk.ToString() method and print the result. 
    //It should show the author and title information that you specified in the method!
      Console.WriteLine(bk.ToString());
    }
  }
}
