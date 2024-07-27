using System;

namespace ElseIfStatement
{
  class Program
  {
    static void Main(string[] args)
    {
      int guests = 6;

	  	if (guests == 6)
      {
        Console.WriteLine("Catan");
      }
      else if (guests == 3)
      {
        Console.WriteLine("Innovation");
      }
      else if (guests == 0)
      {
        Console.WriteLine("Solitaire");
      }
    }
  }
}

