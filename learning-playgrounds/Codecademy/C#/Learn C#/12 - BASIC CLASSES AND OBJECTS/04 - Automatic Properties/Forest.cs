using System;

namespace BasicClasses
{
  class Forest
  {
    public int age;
    public string biome;
    
    //Replace the name field and Name property with an automatic Name property.
    public string Name
    { get; set; }
    
    //Replace the trees field and Trees property with an automatic Trees property.
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
  }
}
