#include <stdio.h>
#include <stdlib.h>

// Struct representing a Stack that holds an integer representing the
// the index of the top of the stack, the total capacity that the stack
// can hold, and a pointer to an array of integers.
typedef struct Stack
{
  int top;
  unsigned int capacity;
  int *data;
} Stack;

// Function to create a stack of given capacity.
// It initializes size of stack as 0.
Stack *createStack(unsigned int capacity)
{
  Stack *stack = malloc(sizeof(struct Stack));
  stack->capacity = capacity;
  stack->top = -1;
  stack->data = malloc(capacity * sizeof(int));

  return stack;
}

// Returns 1 if the top of the stack is at capacity, 0 otherwise.
int isFull(Stack *stack)
{
  return stack->top + 1 == stack->capacity;
}

// Returns 1 if the top of the stack is -1, 0 otherwise.
int isEmpty(Stack *stack)
{
  return stack->top == -1;
}

// Check if the stack is full, if so, realloc the data array.
// Increment top (index) by 1,
// then add the new item to the array at that index.
void push(Stack *stack, int item)
{
  if (isFull(stack))
  {
    stack->capacity *= 2;
    stack->data = realloc(stack->data, stack->capacity * sizeof(int));
  }
  stack->data[++stack->top] = item;
}

// Return -1 if stack is empty.
// Keep a reference to the item at the top of the stack.
// Decrement top (index).
// Return the removed item.
int pop(Stack *stack)
{
  if (isEmpty(stack))
  {
    return -1;
  }
  return stack->data[stack->top--];
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
  push(stack, 30);
  push(stack, 40);
  push(stack, 50);
  push(stack, 60);

  for (int i = 0; i <= stack->top; i++)
  {
    printf("-> %d %d\n", stack->data[i], stack->capacity);
  }

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
    // printf("%d %d\n", i, stack->top);
    int v = pop(stack);

    if (v != i)
    {
      printf("Popped %d but expected %d\n", v, i);
    }
  }

  free(stack->data);
  free(stack);

  return 0;
}
