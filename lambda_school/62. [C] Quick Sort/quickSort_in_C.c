/* ———
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * If you need to refresh your memory on the quick sort algorithm, feel free to
 * reference your old JavaScript implementation, as well as the following links: 

   https://en.wikipedia.org/wiki/Quicksort
   https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort 

 * ——— */

#include <stdio.h>

void quick_sort(int arr[], int low, int high)
{
  
}

void print_array(int arr[], int size)
{
  for (int i = 0; i < size; i++) {
    printf("%d\n", arr[i]);
  }
}

int main(int argc, char* argv[])
{
  int arr[] = {100, 55, 4, 98, 10, 18, 90, 95, 43, 11, 47, 67, 89, 42, 49, 79};
  int n = sizeof(arr) / sizeof(arr[0]);
  quick_sort(arr, 0, n-1);
  print_array(arr, n);
  return 0;
}
