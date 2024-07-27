using System;

namespace StringTheException
{
  class Program
  {
    static void Main(string[] args)
    {
      string lyrics = 
        "Dollie, Dollie, bo-bollie,\n" +
        "Banana-fana fo-follie\n" +
        "Fee-fi-mo-mollie\n" +
        "Dollie!";
      
      // Let’s practice using Replace(String, String), which returns a new string with every instance of the first argument replaced by the second.  Replace all instances of "ollie" with "ana".
      string s = lyrics.Replace("ollie", "ana");
      
      Console.WriteLine(s);
    }
  }
}
