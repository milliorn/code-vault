#include <iostream>

template <typename T>
T maximum(T a, T b)
{
  return a > b ? a : b;
}

int main()
{
  int result = maximum(1, 2);

  std::string x = "Hello";
  std::string y = "World";
  std::string z = maximum(x, y);

  std::cout << "hello or world? -> " << z << std::endl;
  std::cout << "result is " << result << std::endl;
  return 0;
}