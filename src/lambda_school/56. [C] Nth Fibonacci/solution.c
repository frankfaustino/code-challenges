#include <stdio.h>
#include <assert.h>

long int fibonacci(int n)
{
  long int a = 0, b = 1, c, i;

  if (n < 2) return n;

  for (i = 1; i < n; i++)
  {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
}

int main(int argc, char* argv[])
{
  int n;

  printf("Enter an integer: \n");
  scanf("%d", &n);
  printf("Nth Fibonacci number is %li", fibonacci(n));

  return 0;
}