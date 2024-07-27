#include <iostream>

int main()
{
  std::cout << "Begin" << std::endl;

  auto test = []()
  {
    std::cout << "Hello World 1" << std::endl;
  };
  test();

  []()
  {
    std::cout << "Hello World 2" << std::endl;
  }();

  [](double a, double b)
  {
    std::cout << (a + b) << std::endl;
  }(10.1, 20.2);

  auto dub = [](double a = 0.0, double b = 0.0)
  {
    std::cout << (a + b) << std::endl;
  };

  dub();
  dub(100.1, 200.2);

  std::cout << [](double a, double b)
  { return (a + b); }(10.1, 20.2)
            << std::endl;

  [](double a, double b)-> int {
    return a + b;
  };

  std::cout << "Finished" << std::endl;
  return 0;
}