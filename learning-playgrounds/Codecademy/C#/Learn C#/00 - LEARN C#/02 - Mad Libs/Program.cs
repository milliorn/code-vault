using System;

namespace Mad_Libs
{
  class Program
  {
    static void Main(string[] args)
    {
      /*
      This program ... Mad Libs are short stories with blanks for the player to fill in that represent different parts of speech. The end result is a really hilarious and strange story.
      Author: ...Milliorn
      */
      
      // Let the user know that the program is starting:
      Console.WriteLine("Begin Mad Libs program.");
      
      // Give the Mad Lib a title:
      string title = "C#";
      Console.WriteLine(title);
      
      // Define user input and variables:
      Console.WriteLine("Enter a name.");
      string name = Console.ReadLine();
      
      Console.WriteLine("Enter first adjective.");
      string firstAdjective = Console.ReadLine();
      
      Console.WriteLine("Enter second adjective.");
      string secondAdjective = Console.ReadLine();
      
      Console.WriteLine("Enter third adjective.");
      string thirdAdjective = Console.ReadLine();
            
      Console.WriteLine("Enter a verb.");
      string verb = Console.ReadLine();
      
      Console.WriteLine("Enter first noun.");
      string firstNoun = Console.ReadLine();
      
      Console.WriteLine("Enter second noun.");
      string secondNoun = Console.ReadLine();
      
      Console.WriteLine("Enter an animal.");
      string animal = Console.ReadLine();
      
      Console.WriteLine("Enter a food.");
      string food = Console.ReadLine();
      
      Console.WriteLine("Enter a fruit.");
      string fruit = Console.ReadLine();
      
      Console.WriteLine("Enter a superhero.");
      string superhero = Console.ReadLine();
      
      Console.WriteLine("Enter a country.");
      string country = Console.ReadLine();
      
      Console.WriteLine("Enter a dessert.");
      string dessert = Console.ReadLine();
      
      Console.WriteLine("Enter a year.");
      string year = Console.ReadLine();
      
      // The template for the story:
      string story = $"This morning {name} woke up feeling {firstAdjective}.  'It is going to be a {secondAdjective} day!'  Outside, a bunch of {animal}s were protesting to keep {food} in stores.  They began to {verb} to the rhythm of the {firstNoun}, which made all the {fruit}s very {thirdAdjective}.  Concerned, {name} texted {superhero}, who flew {name} to {country} and dropped {name} in a puddle of frozen {dessert}.  {name} woke up in the year {year}, in a world where {secondNoun}s ruled the world.";
      
      // Print the story:
      Console.WriteLine(story);
    }
  }
}
