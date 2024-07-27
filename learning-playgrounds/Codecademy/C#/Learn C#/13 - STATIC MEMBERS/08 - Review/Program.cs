using System;

namespace StaticMembers
{
  class Program
  {
    static void Main(string[] args)
    {
     //From Program.cs, print the number of forests created.
      Console.WriteLine(Forest.ForestsCreated);
      
      //Instantiate two Forest objects.
      Forest f = new Forest("Amazon", "Tropical");
      Forest g = new Forest("Rain", "Boreal");
      int i = Forest.ForestsCreated;
      int j = Forest.ForestsCreated;
      //Print the number of forests created again.
      Console.WriteLine(i);
      Console.WriteLine(j);
    }
  }
}

