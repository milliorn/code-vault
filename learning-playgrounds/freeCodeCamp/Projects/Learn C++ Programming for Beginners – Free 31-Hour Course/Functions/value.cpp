#include <iostream>

void say_age(int age)
{
  ++age;
  std::cout << "Hello you are " << age << std::endl;
}

int main()
{
  int age = 23;
  say_age(age);
  return 0;
}