using System;

namespace TheObjectClass
{
  class Program
  {
    static void Main(string[] args)
    {
      // construct a Diary object and pass it directly to Console.WriteLine().  
      //You should see your surprise printed!
      Diary d = new Diary();
      Console.WriteLine(d);
    }
  }
}
