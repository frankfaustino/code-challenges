// Source : https://www.codewars.com/kata/581c867a33b9fe732e000076/train/java
// Author : Frank Faustino
// Date   : 2022-02-01

class Solution {
    static int lastIndexOf(Node head, Object value) {
        int foundIndex = -1;
        for (int i = 0; head != null; head = head.next, i++) {
            if (head.data == value) foundIndex = i;
        }
        return foundIndex;
    }
}
