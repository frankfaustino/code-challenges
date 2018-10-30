// Title  : Binary Search Tree
// Author : Frank Faustino
// Date   : 2018-10-29
// Lang   : C

#include <stdio.h>
#include <stdlib.h>

typedef struct node {
  int value;
  struct node *left, *right;
} node;

node* newNode(int item)
{
  node *new_node = malloc(sizeof(node));

  new_node->value = item;
  new_node->left = NULL;
  new_node->right = NULL;

  return new_node;
}

void printInOrder(node *root)
{
  if (root) {
    printInOrder(root->left);
    printf("%d\n", root->value);
    printInOrder(root->right);
  }
}

// recursive
// node* insert(node* node, int item)
// {
//   if (node == NULL) {
//     return newNode(item);
//   }
//   if (item < node->value) {
//     node->left = insert(node->left, item);
//   } else {
//     node->right = insert(node->right, item);
//   }
//   return node;
// }

node* insert(node* node, int item)
{
  if (node == NULL) {
    return newNode(item);
  }

  while (node) {
    if (item < node->value) {
      if (node->left == NULL) {
        node->left = newNode(item);
        break;
      } else {
        node = node->left;
      }
    } else {
      if (node->right == NULL) {
        node->right = newNode(item);
        break;
      } else {
        node = node->right;
      }
    }
  }

  return node;
}

int main(int argc, char* argv[])
{
  node *root = NULL;
  root = insert(root, 50);
  insert(root, 30);
  insert(root, 20);
  insert(root, 40);
  insert(root, 70);
  insert(root, 60);
  insert(root, 80);

  printInOrder(root);

  return 0;
}

/*
            50
          /   \
        30    70
      /  \   /  \
    20   40 60  80
*/