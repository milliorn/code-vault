using System;

namespace BasicClasses
{
  class Forest
  {
    public int age;
    private string biome;
    
    public string Name
    { get; set; }
    
    public int Trees
    { get; set; }
    
    public string Biome
    {
      get { return biome; }
      set
      {
        if (value == "Tropical" ||
            value == "Temperate" ||
            value == "Boreal")
        {
          biome = value;
        }
        else
        {
          biome = "Unknown";
        }
      }
    }
    
    public int Age
    { 
      get { return age; }
      private set { age = value; }
    }
    
    //In the Forest class, define a public method Grow(). It should:
    //take zero arguments
    //increase the Trees property by 30 and the Age property by 1
    //return the updated number of trees
    public int Grow()
    {
      Trees += 30;
      Age++;
      return Trees;
    }
    
    //Define a public method Burn(). It should:
    //take zero arguments
    //decrease the Trees property by 20 and increase the Age property by 1
    //return the updated number of trees
    public int Burn()
    {
      Trees -= 20;
      Age++;
      return Trees;
    }
  }
}



