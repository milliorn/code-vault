// Mage.cs
//The next rank, Mage, also has a Title property and CastWindStorm() method. 
//It also has a new CastRainStorm() method. 
//Instead of writing the first two members again, we can inherit them from Pupil.
//In Mage.cs, define an empty Mage class that inherits from Pupil.
using System;

namespace MagicalInheritance
{
  class Mage : Pupil
  {
    //Add a Mage constructor with one string argument. It should call the base constructor with that same argument.
    public Mage(string title) : base(title)
    {}

    //Add a string Origin property and a new constructor to the Pupil class. 
    //The constructor should have two parameters, one for Title and one for Origin. 
    //Add a similar constructor to Mage and Archmage. 
    public Mage(string title, string origin) : base(title)
    {
      this.Origin = origin;
    }

    //Give the Mage a new spell: CastRainStorm(). 
    //It should be public with return type Storm. 
    //In the body of the method, construct a new Storm object and return it.
    //Remember that this is a weak rain storm cast by the mage.
    public virtual Storm CastRainStorm()
    {
      Storm s = new Storm("rain", Title, false);
      return s;
    }
  }
}
