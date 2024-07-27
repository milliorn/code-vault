namespace TheObjectClass
{
  class Diary : Book, IFlippable
  {
    public int CurrentPage
    { get; set; }

    public Diary(int page = 0) : base()
    {
      CurrentPage = page;
    }
    
    public Diary(int page, string author, string title) : base(author, title)
    {
      CurrentPage = page;
    }

    public void Flip()
    {
      CurrentPage++;
    }

    public string SpillSecret()
    {
      return "OMG kerry loves kris <3";
    }

    public override string Stringify() 
    {
      return "This is a Diary object!";
    }
    
    //Let’s prove to ourselves that ToString() is used when printing to the console.  First, override the ToString() method in the Diary class. Have the method return the string "Surprise!".  
    public override string ToString()
    {
    return "Surprise!";
    }
  }
}