using System;

namespace BasicClasses
{
  class Forest
  {
    public int age;
    private string biome;
    
    public Forest(string name, string biome)
    {
      this.Name = name;
      this.Biome = biome;
      Age = 0;
    }
    
    //Define a second constructor for the Forest class:
    //It should take one parameter, name.
    //It should use : this() with the name variable as the first argument and "Unknown" as the second.
    //It should also print a warning to the console about the defaulted value.
    public Forest(string name) :this(name, "Unknown")
    {
      Console.WriteLine("Forest property not specified. Value defaulted to 'Unknown'.");
    }

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
     
    public int Grow()
    {
      Trees += 30;
      Age += 1;
      return Trees;
    }
    
    public int Burn()
    {
      Trees -= 20;
      Age += 1;
      return Trees;
    }
    
  }

}

