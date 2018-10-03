// Source : https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list/problem
// Author : Frank Faustino
// Date   : 2018-01-19
// Lang   : C#

/*
    Insert Node at the end of a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    class Node {
        int Data;
        Node Next;
    }
*/
// This is a "method-only" submission.
// You only need to complete this method.

public static Node Insert(Node head, int x) {
    if (head == null) {
        head = new Node();
        head.Data = x;
    }
    else {
        Node node = head;
        while (node.Next != null)
            node = node.Next;
        node.Next = new Node();
        node.Next.Data = x;
    }
    return head;
}
