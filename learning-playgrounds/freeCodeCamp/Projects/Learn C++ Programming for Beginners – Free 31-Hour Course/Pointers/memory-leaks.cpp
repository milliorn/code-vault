#include <iostream>

int main() {
  int *p_number {new int{67}};

  int number{55};

  p_number = &number;

  std::cout << "done" << std::endl;
  return 0;
}