#include <iostream>

int main()
{
  double a = 10;
  double b = 20;

  auto function = [a, b]
  {
    std::cout << "a + b is " << a + b << std::endl;
  };

  function();

  return 0;
}