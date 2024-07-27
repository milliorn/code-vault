#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void)
{
    srand(time(NULL)); // Initialization, should only be called once.
    int r = rand();    // Returns a pseudo-random integer between 0 and 2.

    if (r == 2)
    {
        printf("Two\n");
    }
    else if (r == 1)
    {
        printf("One\n");
    }
    else
    {
        printf("%d\n", r);
    }

    r = rand();

    switch (r)
    {
    case 3:
        printf("Three\n");
        break;
    case 4:
        printf("Four\n");
        break;
    case 5:
        printf("Five\n");
        break;
    default:
        printf("%d\n", r);
    }
}
