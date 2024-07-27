#include <stdio.h>

const int age = 37;
const int AGE = 38;
#define STRING "39"

int main(void) {
    sprintf("value:%d", age);
    sprintf("value:%d", AGE);
    printf("string: %s", STRING);
}
