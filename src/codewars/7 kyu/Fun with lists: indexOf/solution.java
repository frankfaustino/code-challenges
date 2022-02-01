// Source : https://www.codewars.com/kata/581c6b075cfa83852700021f/train/java
// Author : Frank Faustino
// Date   : 2022-01-31

class Solution {
    static int indexOf(Node head, Object value) {
        int index = 0;
        while (head != null) {
            if (head.data.equals(value)) {
                return index;
            }
            index++;
            head = head.next;
        }
        return -1;
    }
}

// recursion

//class Solution {
//    private static int indexOf(Node head, Object value, int index) {
//        if (head == null) return -1;
//        return head.data.equals(value) ? index : indexOf(head.next, value, index + 1);
//    }
//
//    static int indexOf(Node head, Object value) {
//        return indexOf(head, value, 0);
//    }
//}
