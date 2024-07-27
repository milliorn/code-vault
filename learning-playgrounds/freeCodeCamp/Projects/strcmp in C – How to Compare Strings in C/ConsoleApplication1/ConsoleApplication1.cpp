// ConsoleApplication1.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include <string.h>

int main()
{
  char str1[] = "apple";
  char str2[] = "banana";

  int result = strcmp(str1, str2);

  if (result == 0) printf("the strings are equal.\n");
  else if (result < 0) printf("String 1 i less than string 2. \n");
  else printf("String 1 is greater than string 2.\n");

  char str3[] = "Apple";
  char str4[] = "apple";

  for (size_t i = 0; str3[i]; i++) str3[i] = tolower(str3[i]);
  for (size_t i = 0; str4[i]; i++) str4[i] = tolower(str4[i]);

  result = strcmp(str3, str4);

  if (result == 0) printf("the strings are equal.\n");
  else if (result < 0) printf("String 1 i less than string 2. \n");
  else printf("String 1 is greater than string 2.\n");

  return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
