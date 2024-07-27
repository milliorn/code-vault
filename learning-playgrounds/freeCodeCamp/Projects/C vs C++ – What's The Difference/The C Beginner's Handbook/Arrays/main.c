#include <stdio.h>

int main(void) {
	const int SIZE = 5;
	int price[SIZE];
	int priced[5] = {1, 2, 3, 4, 5};

	int prices[5];
	prices[0] = 1;
	prices[1] = 2;
	prices[2] = 3;
	prices[3] = 4;
	prices[4] = 5;

	for (size_t i = 0; i < SIZE; i++)
	{
		printf("%d", prices[i]);
	}
}
