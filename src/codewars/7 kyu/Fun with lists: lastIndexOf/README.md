# Fun with lists: lastIndexOf

Implement the method **lastIndexOf**, which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: `1 -> 2 -> 3 -> 3`, and the value 3, **lastIndexOf** should return 3.

The linked list is defined as follows:

```java
class Node {
    public Object data;
    public Node next;
    
    Node(T data, Node next) {
        this.data = data;
        this.next = next;
    }
    
    Node(T data) {
        this(data, null);
    }
}
```

Note: the list may be `null` and can hold any type of value.

Good luck!

This kata is part of [fun with lists](https://www.codewars.com/collections/fun-with-lists) series:

- [Fun with lists: length](https://www.codewars.com/kata/581e476d5f59408553000a4b)
- [Fun with lists: indexOf](https://www.codewars.com/kata/581c6b075cfa83852700021f)
- [Fun with lists: lastIndexOf](https://www.codewars.com/kata/581c867a33b9fe732e000076)
- [Fun with lists: countIf](https://www.codewars.com/kata/5819081d056d4bdd410004f8)
- [Fun with lists: anyMatch + allMatch](https://www.codewars.com/kata/581e50555f59405743001813)
- [Fun with lists: filter](https://www.codewars.com/kata/582041237df353e01d000084)
- [Fun with lists: map](https://www.codewars.com/kata/58259d9062cfb45e1a00006b)
- [Fun with lists: reduce](https://www.codewars.com/kata/58319f37aeb69a89a00000c7)
