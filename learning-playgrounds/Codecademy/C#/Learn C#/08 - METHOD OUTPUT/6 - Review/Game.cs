using System;

namespace ConsoleGame
{
  class Game : SuperGame
  {
  	public new static void UpdatePosition(string Key, out int X, out int Y)
  	{
  		switch (Key)
    	{
      	case "LeftArrow":
        	X = -1;
        	Y = 0;
        	break;         
      	case "RightArrow":
        	X = 1;
        	Y = 0;
        	break;
        case "UpArrow":
        	X = 0;
        	Y = -1;
        	break;        
      	case "DownArrow": 
        	X = 0;
        	Y = 1;
        	break;
      	default:
        	X = 0;
        	Y = 1;
        	break;
      }
  	}
    public new static char UpdateCursor(string Key)
    {
   		switch (Key)
    	{
      	case "LeftArrow":
					return '<';
        	break;         
      	case "RightArrow":
        	return '>';
        	break;
        case "UpArrow":
        	return '^';
        	break;        
      	case "DownArrow": 
        	return 'v';
        	break;
      	default:
					return '<';
        	break;
      }   
    }
    public new static int KeepInBounds(int Coordinate, int MaxValue)
    {
    	return Coordinate < 0 ? 0 : Coordinate >= MaxValue ? MaxValue - 1 : Coordinate;
    }
    public new static bool DidScore(int x1, int x2, int y1, int y2)
    {
    	return x1 == x2 && y1 == y2;
    }
  }
}