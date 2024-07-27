#include <iostream>
#include "compare.h"

int main()
{
  int x = 5;
  int y = 2;
  int result = max(x, y);

  std::cout << "max : " << result << std::endl;
  return 0;
}