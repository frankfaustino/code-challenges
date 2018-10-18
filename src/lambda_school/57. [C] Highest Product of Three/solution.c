// Title  : Highest Product of Three
// Author : Frank Faustino
// Date   : 2018-10-17
// Lang   : C

#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#define MAX(a, b) (((a) > (b)) ? (a) : (b))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))
#define SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

// Time Complexity: O(n)
// Space Complexity: O(1)
int highestProductOf3(int arr[], int length)
{
  assert(length > 3);
  int i;
  int h3 = arr[0] * arr[1] * arr[2];
  int h2 = arr[0] * arr[1];
  int l2 = arr[0] * arr[1];
  int h  = MAX(arr[0], arr[1]);
  int l  = MIN(arr[0], arr[1]);

  for (i = 2; i < length; i++) {
    int tmp0 = h2 * arr[i];
    int tmp1 = l2 * arr[i];
    int tmp2 = h * arr[i];
    int tmp3 = l * arr[i];

    h3 = MAX(h3, MAX(tmp0, tmp1));
    h2 = MAX(h2, MAX(tmp2, tmp3));
    l2 = MIN(l2, MIN(tmp2, tmp3));
    h  = MAX(h, arr[i]);
    l  = MIN(l, arr[i]);
  }

  return h3;
}

int main(int argc, char* argv)
{
  int arr1[] = {-10, -10, 1, 3, 2};
  int arr2[] = {1, 10, -5, 1, -100};
  int arr3[] = {5, -20, 19, 16, 4};

  printf("Highest product of arr1 is: %d\n", highestProductOf3(arr1, SIZE(arr1)));
  printf("Highest product of arr2 is: %d\n", highestProductOf3(arr2, SIZE(arr2)));
  printf("Highest product of arr3 is: %d\n", highestProductOf3(arr3, SIZE(arr3)));

  return 0;
}
