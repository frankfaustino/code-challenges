// Source : https://www.codewars.com/kata/581e476d5f59408553000a4b/java
// Author : Frank Faustino
// Date   : 2022-01-30

class Solution {
    static int length(Node head) {
        int len = 0;
        while (head != null) {
            len += 1;
            head = head.next;
        }
        return len;
    }
}
