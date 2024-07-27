// Pupil.cs
//Next, we’ll define the Pupil class.
//In Pupil.cs, define a class named Pupil with these two members:
//a string Title, with public getter and private setter. This represents the name of the pupil
//a constructor with one argument, that sets the Title property

using System;

namespace MagicalInheritance
{
  class Pupil
  {
    public string Title { get; private set; }
    public string Origin { get; protected set; }

    public Pupil(string title)
    {
      this.Title = title;
    }

    //Add a string Origin property and a new constructor to the Pupil class. 
    //The constructor should have two parameters, one for Title and one for Origin. 
    //Add a similar constructor to Mage and Archmage. 
    public Pupil(string title, string origin)
    {
      this.Title = title;
      this.Origin = origin;
    }

    //Give the Pupil its single spell: a CastWindStorm() method. 
    //It should be public with return type Storm. 
    //In the body of the method, construct a new Storm object and return it.
    //Remember that this is a weak wind storm cast by the pupil.
    public Storm CastWindStorm()
    {
      Storm s = new Storm("wind", Title, false);
      return s;
    }
  }  
}