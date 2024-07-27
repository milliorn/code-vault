#include <iostream>

int main()
{
  int *p_number{};
  p_number = new int(6);

  if (!(p_number == nullptr))
  {
    std::cout << p_number << std::endl;
  }

  delete p_number;
  nullptr;

  return 0;
}