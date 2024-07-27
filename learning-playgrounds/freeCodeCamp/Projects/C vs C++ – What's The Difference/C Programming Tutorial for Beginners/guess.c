#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
	srand(time(NULL)); // Initialization, should only be called once.
	int secretNumber =
		rand() % 10; // Returns a pseudo-random integer between 0 and 9.
	int guess;
	while (secretNumber != guess) {
		printf("Enter a number between 0-9: ");
		scanf("%d", &guess);
	}
	printf("Correct!, the number was %d.", secretNumber);
	return 0;
}
