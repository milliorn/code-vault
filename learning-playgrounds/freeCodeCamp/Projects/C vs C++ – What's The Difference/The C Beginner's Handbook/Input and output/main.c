#include <stdio.h>

int main(void) {
	char name[20];
	printf("Enter your name: ");
	scanf_s("%s", name);
	printf("you entered %s", name);
}
