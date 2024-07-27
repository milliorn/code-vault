#include <iostream>
using namespace std;

/*
array[] represents the array to be searched through.
low represents the first element of the array.
high represents the last element of the array.
number_to_search_for represents the number to be searched for in array[].
*/
int binarySearch(int array[], int low, int high, int number_to_search_for)
{
  /*
  Next, we created a while loop that will run continuously until the search operation returns a value – either the index of the element or -1.
  */
  while (low <= high)
  {
    /*
    mid is used to represent the center/midpoint of the array: int mid = low + (high - low) / 2;.
    */
    int mid = low + (high - low) / 2;
    /*
    The first if statement is executed if mid has the same value as the element to be searched for:
    */
    if (number_to_search_for == array[mid])
    {
      return mid;
    }
    /*
    The second if statement moves the position of low to the index after the midpoint of the array:
    */
    if (number_to_search_for > array[mid])
    {
      low = mid + 1;
    }
    /*
    This removes all the elements on the left side of the array because the element to be searched for is greater than they are, so there is no need to search through that part of the array.
    */

    /*
    The third if statement does the opposite of the second statement – it moves the position of high to the index before the midpoint of the array:
    */
    if (number_to_search_for < array[mid])
    {
      high = mid - 1;
    }
  }

  return -1;
}

int main(void)
{
  int arrayOfNums[] = {2, 4, 7, 9, 10, 13, 20};

  int n = sizeof(arrayOfNums) / sizeof(arrayOfNums[0]);

  int result = binarySearch(arrayOfNums, 0, n - 1, 13);

  if (result == -1)
  {
    printf("Element doesn't exist in the array");
  }
  else
  {
    printf("The index of the element is %d", result);
  }

  // The index of the element is 5
}