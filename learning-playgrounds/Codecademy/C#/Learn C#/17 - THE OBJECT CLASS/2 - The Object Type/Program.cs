using System;

namespace TheObjectClass
{
  class Program
  {
    static void Main(string[] args)
    {
      Book bk = new Book();
      
      Diary dy = new Diary(38);
      
      int i = 9;
      
      Object o1 = bk;
      Object o2 = dy;
      Object o3 = i;
    }
  }
}
