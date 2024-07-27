#include <iostream>
#include <string>

int main()
{
  int age;
  std::string name;

  std::cout << "Last Name: ";
  std::getline(std::cin, name);

  std::cout << "Your age: ";
  std::cin >> age;

  std::cout << "Hello, " << name << "! You are " << age << " years old." << std::endl;
}