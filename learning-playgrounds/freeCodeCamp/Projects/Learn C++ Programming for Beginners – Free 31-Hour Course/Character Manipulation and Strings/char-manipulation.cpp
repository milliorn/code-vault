#include <iostream>
#include <string.h>

int main()
{
  const char *string_data1{"Alabama"};
  const char *string_data2{"Blabama"};

  std::cout << "compare ("
            << string_data1
            << ","
            << string_data2
            << ") : "
            << strcmp(string_data1, string_data2) << std::endl;
}