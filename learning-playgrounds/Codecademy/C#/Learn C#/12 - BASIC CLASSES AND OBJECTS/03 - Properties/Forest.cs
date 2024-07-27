using System;

namespace BasicClasses
{
  class Forest
  {
    public string name;
    public int trees;
    public int age;
    public string biome;
    
    //Define Name property for name field. The getter, setter has no validation.
    public string Name
    {
      get {return name;}
      set { name = value;}
    }
    //Define Trees property for trees field. The getter, setter has no validation.
    public int Trees
    {
      get {return trees;}
      set {trees = value;}
    }
    //Define a Biome property for the biome field. 
    //It will have a getter and setter. 
    //The setter should only allow three values: 
    //"Tropical", "Temperate", and "Boreal". 
    //If any other value is used, set biome to "Unknown".
    public string Biome
    {
      get {return biome; }
      set 
      {
        switch (value)
        {
          case "Tropical": 
          case "Temperate": 
          case "Boreal": biome = value; break;
          default: biome = "Unknown"; break;
        }
      }
    }
  }
}
