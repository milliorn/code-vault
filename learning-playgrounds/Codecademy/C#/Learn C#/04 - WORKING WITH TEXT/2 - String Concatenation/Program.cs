using System;

namespace StoryTime
{
  class Program
  {
    static void Main(string[] args)
    {
      // Declare the variables
			string beginning = "The beginning.";
      string middle = "The middle.";
      string end = "The end.";
      // Concatenate the string and the variables
			string story = beginning + "  " + middle + "  " + end;
      // Print the story to the console 
			Console.WriteLine(story);
    }
  }
}
