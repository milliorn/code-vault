#include <stdio.h>

void hello_world(void)
{
	printf("Hello World!\n");
}

void x_larger_y(void)
{
	int x = 2;
	int y = 2;

	if(x < y)
	{
		printf("x is less than y");
	}
	else if(x > y)
	{ 
		printf("x is greater than y");
	} 
	else 
	{
		printf("x is equal to y");
	}
}

void loop_d_loop(void)
{
    int i = 10;
    do {
        printf("the value of i: %i\n", i);
        i++;
    }
    while( i < 20 );
}

int main(void)
{
	//int n; // declaration, create a variable called n capable of holding integer values
	int n = 27; // initialisation, creating a variable called n and assigning a value, storing a number in that variable
	n = 37;
	// the new value is 37
		hello_world();
		printf("Number is %i\n", n);
		x_larger_y();
        loop_d_loop();
}
