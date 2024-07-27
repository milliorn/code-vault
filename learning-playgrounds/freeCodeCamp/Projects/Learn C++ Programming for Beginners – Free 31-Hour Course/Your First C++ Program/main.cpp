#include <iostream>
#include <string>

std::string hello_World(std::string option = "")
{
  return option.empty() ? "Hello World!" : "Hello " + option + "!";
}

int main()
{
  std::cout << hello_World("Dad") << std::endl;
  std::cout << hello_World("Mom") << std::endl;
  std::cout << hello_World() << std::endl;
}