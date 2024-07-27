using System;

namespace UsingOut
{
  class Program
  {
    static void Main(string[] args)
    {
      string s = Whisper("SHHHH", out bool flag);
      Console.WriteLine(s);
    }    
    static string Whisper(string s1, out bool isWhisper)
    {
      isWhisper = true;
    	return s1.ToLower();
    }
	}
}
