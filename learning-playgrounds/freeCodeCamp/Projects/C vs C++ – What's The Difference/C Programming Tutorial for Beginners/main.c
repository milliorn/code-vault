#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Student {
  char name[64];
  char major[64];
  int age;
  double gpa;
};

int main() {
  int age;
  int *pAge = &age;

  printf("Enter your age:");
  scanf("%d", &age);
  printf("\nYou are %d years old\n", age);

  char name[20];

  printf("Enter your name: ");
  fgets(name, 18, stdin);
  printf("\nYour name is %s\n", name);

  int arr[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
  for (int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) {
    printf("%d\n", arr[i]);
  }

  struct Student jon;

  jon.age = 30;
  jon.gpa = 4.0;

  strcpy(jon.name, "jon");
  strcpy(jon.major, "History");

  printf("%f\n", jon.gpa);
  printf("%d\n", jon.age);
  printf("%s\n", jon.name);
  printf("%s\n", jon.major);
  printf("%p\n", &jon.age);
  printf("%p\n", pAge);
  printf("%d\n", *pAge);
  printf("%p\n", &age);
  printf("%d\n", *&age);

  return 0;
}
