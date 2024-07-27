#include <stdio.h>

struct person {
  int age;
  char *name;
};

int main() {
  struct person scott = {30, "Scott"};
  printf("%s, age %u", scott.name, scott.age);
  scott.age = 40;
}
