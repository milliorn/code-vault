#include <stdlib.h>
#include <stdio.h>

int main() {
  FILE *fpointer = fopen("employees.txt", "w");
  fprintf(fpointer, "Jim, Salesman\nPam, Receptionist\n");
	fclose(fpointer);
	return 0;
}
