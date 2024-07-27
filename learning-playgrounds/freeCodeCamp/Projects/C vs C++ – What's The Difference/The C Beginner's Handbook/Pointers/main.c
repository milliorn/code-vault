#include <stdio.h>

int main(void) {
  int age = 20;
  int *address = &age;
  printf("%p\n", &age);
  printf("%u\n", *address);
  *address = 30;
  printf("%u\n", *address);
  int prices[5] = {0, 1, 2, 3, 4};
  printf("%u\n", *prices);
  printf("%u\n", *(prices + 1));
  for (int i = 0; i < 5; i++) {
    printf("%u\n", *prices + i);
  }
}
