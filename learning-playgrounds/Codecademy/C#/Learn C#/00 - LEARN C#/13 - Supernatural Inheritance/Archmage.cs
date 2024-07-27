// Archmage.cs
//The next rank, Archmage, also has a Title property and CastWindStorm() method. 
//On top of that, it overrides CastRainStorm() and has a new CastLightningStorm() method. 
//Instead of writing the first two members again, we can inherit them from Mage.
//In Archmage.cs, define an empty Archmage class that inherits from Mage.

using System;

namespace MagicalInheritance
{
  class Archmage : Mage
  {
    //Add an Archmage constructor with one string argument. 
    //It should call the base constructor with that same argument.
    public Archmage(string title) : base(title)
    {}

    //Add a string Origin property and a new constructor to the Pupil class. 
    //The constructor should have two parameters, one for Title and one for Origin. 
    //Add a similar constructor to Mage and Archmage. 
    public Archmage(string title, string origin) : base(title)
    {}

    //Override the CastRainStorm() spell. 
    //Just like the one in Mage, it should be public with return type Storm. 
    //In the body of the method, construct a new Storm object and return it.
    //This time it is a strong rain storm cast by the archmage.
    //You may see an error here: we’ll fix it in the next step.
    public override Storm CastRainStorm()
    {
      Storm s = new Storm("rain", Title, true);
      return s;
    }

    //Add one more spell in Archmage.cs: CastLightningStorm(). 
    //It should be public with return type Storm. 
    //In the body of the method, construct a new Storm object and return it.
    //This time it is a strong lightning storm cast by the archmage.
    public Storm CastLightningStorm()
    {
      Storm s = new Storm("lightning", Title, true);
      return s;
    }
  }
}