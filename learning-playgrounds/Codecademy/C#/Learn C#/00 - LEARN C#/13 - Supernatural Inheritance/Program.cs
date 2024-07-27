using System;

namespace MagicalInheritance
{
  class Program
  {
    static void Main(string[] args)
    {
      //Construct a new Storm. It should have "wind" essence, NOT be strong, be cast by "Zul'rajas"
      //After constructing the new object, call Announce() and print the result to the console
      Storm zul = new Storm("wind", "Zul'rajas", false);
      Console.WriteLine(zul.Announce());

      //Construct a new Pupil named Mezil-kree.
      //After constructing a new object, call CastWindStorm() and store the result in a variable. 
      //Use Announce() to check that it is a weak wind storm.
      Pupil mezil = new Pupil("Mezil-kree", "Icecrown");
      var result1 = mezil.CastWindStorm();
      Console.WriteLine(result1.Announce());

      //Construct a new Mage named Gul’dan.
      //After constructing a new object, call CastRainStorm() and store the result in a variable. 
      //Use Announce() to check that it is a weak rain storm.
      Mage gul = new Mage("Gul’dan",  "Draenor");
      var result2 = gul.CastRainStorm();
      Console.WriteLine(result2.Announce()); 

      //Construct a new Archmage named Nielas Aran.
      //After constructing a new object, call CastRainStorm() and CastLightningStorm() and store the results in variables. 
      //Use Announce() to make sure they are correct!
      Archmage nielas = new Archmage("Nielas Aran", "Stormwind");
      var result3 = nielas.CastLightningStorm();
      Console.WriteLine(result3.Announce());        

      //Space a line to separate top from bottom
      Console.WriteLine();
      
      //Store the Storm objects in an array instead of separate variables.
      string[] magic = { zul.Announce(), result1.Announce(), result2.Announce(), result3.Announce() };
      foreach(string s in magic)
      {
        Console.WriteLine(s);
      }
    }
  }
}