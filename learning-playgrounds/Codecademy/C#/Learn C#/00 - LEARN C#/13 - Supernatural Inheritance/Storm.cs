// Storm.cs
//We’ll start by defining the Storm class.
//In Storm.cs, create an empty class named Storm.

using System;

namespace MagicalInheritance
{
  class Storm
  {
    //Define three automatic properties. Each one should have a public getter and private setter:
    //string Essence - the type of storm, like wind or rain
    //bool IsStrong- true if the storm is strong
    //string Caster - the title of the magician casting the storm
    public string Essence { get; private set; }
    public string Caster { get; private set; }
    public bool IsStrong { get; private set; }
  
    //Define a constructor that takes three arguments, one for each property. 
    //In the body of the constructor, use those arguments to set the property values. 
    public Storm(string essence, string caster, bool isstrong)
    {
      this.Essence = essence;
      this.Caster = caster;
      this.IsStrong = isstrong;
    }

    //Define a public Announce() method that returns a string. 
    //The string should use all three properties.
    // For example if a weak wind storm was cast by Zul’rajas, the string would be:
    //Zul'rajas cast a weak wind storm!
    public string Announce()
    {
      string s = IsStrong ? "strong" : "weak"; 
      return $"{Caster} cast a {s} {Essence} storm!";
    }
  }
}