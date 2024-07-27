#include <iostream>

int main()
{
  int *p_number1{nullptr};
  int *p_number2{new int{56}};

  if (p_number1 == nullptr)
  {
    std::cout << "p_number1 is " << *p_number2 << std::endl;
  }
}