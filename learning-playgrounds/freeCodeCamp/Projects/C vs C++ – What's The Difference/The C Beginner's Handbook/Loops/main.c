#include <stddef.h>
#include <stdio.h>

int main(void) {
  for (size_t i = 0; i < 10; i++) {
    printf("%zu\n", i);
  }

  size_t a = 10;

  while (a < 20) {
    printf("%zu\n", a++);
  }

  size_t b = 20;

  do {
    printf("%zu\n", b++);
  } while (b < 30);
}
