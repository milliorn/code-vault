using System;

namespace JumpStatements
{
  class Program
  {
    static void Main(string[] args)
    {
      bool buttonClick = true;
      int alarm = 0;
      
      do
      {
        Console.WriteLine("BLARRRRR");
				alarm++;
        if (alarm == 3) 
        {
          break;
        }
      } while(!buttonClick);
    }
  }
}
