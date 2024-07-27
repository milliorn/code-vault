using System;

namespace TheObjectClass
{
  class Program
  {
    static void Main(string[] args)
    {
      Book bk = new Book("Ta-Nehisi Coates", "Between the World and Me");
      Diary dy = new Diary(38);
      Random rand = new Random();
      int i = 9;

      Object[] objects = {bk, dy, rand, i};

      foreach (Object obj in objects)
      {
        Console.WriteLine(obj.GetType());
        Console.WriteLine(obj);
      }

      bool b = true;
      Console.WriteLine(b);
      Console.WriteLine(b.ToString());
    }
  }
}

