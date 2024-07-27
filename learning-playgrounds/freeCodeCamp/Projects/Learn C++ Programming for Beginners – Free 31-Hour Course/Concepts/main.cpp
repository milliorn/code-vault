#include <concepts>
#include <iostream>

template <typename T>
requires std::integral<T>
    T add(T a, T b)
{
  return a + b;
}

auto add(std::integral auto a, std::integral auto b)
{
  return a + b;
}

template <std::integral T>
T add(T a, T b)
{
  return a + b;
}

template <typename T>
T add(T a, T b) requires std::integral<T>
{
  return a + b;
}

int main()
{
  return 0;
}