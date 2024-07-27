#include <concepts>
#include <iostream>
#include <type_traits>

template <typename T>
T maximum(T a, T b)
{
  return a > b ? a : b;
}

template <typename T>
concept Multiply = requires(T a, T b)
{
  a *b;
};

int main()
{
  int x = 6;
  int y = 4;
  return 0;
}