#include <iostream>

int main()
{
  int number{22};
  int *p_number = &number;

  std::cout << std::endl;
  std::cout << "number " << number << " p_number " << p_number << " &number " << &number << " *p_number " << *p_number << std::endl;

  delete p_number;
  p_number = nullptr;

  return 0;
}