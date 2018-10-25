#include <stdio.h>
#include <stdlib.h>

// Struct representing a Stack that holds an integer representing the
// the index of the top of the stack, the total capacity that the stack
// can hold, and a pointer to an array of integers
typedef struct Stack
{
  int top;
  unsigned int capacity;
  int *data;
} Stack;

// Function to create a stack of given capacity. It initializes size of
// stack as 0
Stack *createStack(unsigned int capacity)
{
  Stack *stack = malloc(sizeof(struct Stack));
  stack->capacity = capacity;
  stack->top = -1;
  stack->data = malloc(capacity * sizeof(int));

  return stack;
}

int isFull(Stack *stack)
{
  // Your code here
}

int isEmpty(Stack *stack)
{
  // Your code here
}

void push(Stack *stack, int item)
{
  // Your code here
}

int pop(Stack *stack)
{
  // Your code here
}

// Program to test above functions
int main()
{
  Stack *stack = createStack(2);

  printf("stack is full: %d\n", isFull(stack));
  printf("stack is empty: %d\n", isEmpty(stack));

  push(stack, 10);
  printf("stack is empty: %d\n", isEmpty(stack));
  push(stack, 20);

  printf("stack is full: %d\n", isFull(stack));

  printf("%d popped from stack\n", pop(stack));
  printf("%d popped from stack\n", pop(stack));
  printf("%d popped from stack\n", pop(stack));

  const int push_count = 100000;

  printf("pushing %d things\n", push_count);
  for (int i = 0; i < push_count; i++)
  {
    push(stack, i);
  }

  printf("popping %d things\n", push_count);
  for (int i = push_count - 1; i >= 0; i--)
  {
    int v = pop(stack);

    if (v != i)
    {
      printf("Popped %d but expected %d\n", v, i);
    }
  }

  return 0;
}