#include <stdio.h>
#include <stdlib.h>

int main() {
	double a, b;
	char sign;

	printf("Enter number: ");
	scanf("%lf", &a);

	printf("Enter another number: ");
	scanf("%lf", &b);

	printf("Enter +, -, *, or /: ");
	scanf("%s", &sign);

	switch (sign) {
	case '+':
		printf("%f", a + b);
		break;
	case '-':
		printf("%f", a - b);
		break;
	case '*':
		printf("%f", a * b);
		break;
	case '/':
		printf("%f", a / b);
		break;
	default:
		printf("Did not understand sign, terminating...\n");
	}

	return 0;
}
