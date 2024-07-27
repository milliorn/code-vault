#include <iostream>

int main()
{
  size_t size{10};

  double *p_salaries{new double[size]};
  int *p_students{new (std::nothrow) int[size]{}};
  double *p_scores{new (std::nothrow) double[size]{1, 2, 3, 4, 5}};

  for (size_t i{}; i < size; ++i)
  {
    std::cout << "value: " << p_scores[i] << " : " << *(p_scores + i) << std::endl;
  }

  delete[] p_salaries;
  p_salaries = nullptr;

  delete[] p_scores;
  p_scores = nullptr;

  delete[] p_students;
  p_students = nullptr;

  return 0;
}