using System;

namespace TrueOrFalse
{
  class Methods
  { 
    //If they are not equal, write a warning to the console.
    public static bool CheckLength(string[] s, bool[] b)
    {
      if (s.Length != b.Length)
      {
        Console.WriteLine("WARNING! questions & answers array length not equal.");
        return false;
      }
      else
      {
        return true;
      }
    }
  }
}