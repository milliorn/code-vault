using System;

namespace LearnReferences
{
  class Program
  {
    static void Main(string[] args)
    {
      Dissertation diss1 = new Dissertation();
			Dissertation diss2 = diss1;
			diss1.CurrentPage = 0;
			diss2.CurrentPage = 16;
			Console.WriteLine(diss1.CurrentPage);
			Console.WriteLine(diss2.CurrentPage);
    }
  }
}

