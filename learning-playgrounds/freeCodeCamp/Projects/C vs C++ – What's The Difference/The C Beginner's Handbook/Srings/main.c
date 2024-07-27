#include <stdio.h>

int main(void) {
	char a[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
	char b[7] = "\nWorld";
	printf("%s", a);
	printf("%s", b);
}
