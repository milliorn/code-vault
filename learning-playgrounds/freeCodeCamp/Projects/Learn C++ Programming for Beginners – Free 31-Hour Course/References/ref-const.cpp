#include <iostream>

int main()
{
  int age{112};
  int &ref_age{age};
  ref_age++;

  int oldAge{112};
  const int &ref_oldAge{oldAge};
}