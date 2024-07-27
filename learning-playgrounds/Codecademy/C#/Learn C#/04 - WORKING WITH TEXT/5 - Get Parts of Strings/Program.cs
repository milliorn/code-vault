using System;

namespace NameGrab
{
  class Program
  {
    static void Main(string[] args)
    {
      // User Name
      string name = "Farhad Hesam Abbasi";
      // Get first letter
			int cP = name.IndexOf("F");
      char firstLetter = name[cP];
      // Get last name
      string lastName = name.Substring(name.IndexOf("Abbasi"));
      // Print results
    }
  }
}
