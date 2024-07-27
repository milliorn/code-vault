#include <stdio.h>

#define VALUE 1
#define PI 3.14
#define NAME "Flavio"
#define POWER(x) ((x) * (x))

const int DEBUG = 0;

int main(void) {
  printf("%f\n", PI);
  printf("%s\n", NAME);
  printf("%u\n", POWER(4));
#if DEBUG == 0
  printf("I am NOT debugging\n");
#else
  printf("I am debugging\n");
#endif
#ifdef VALUE
  printf("Value is defined\n");
#else
  printf("Value is not defined\n");
#endif
}
