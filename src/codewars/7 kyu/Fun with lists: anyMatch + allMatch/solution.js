// Source : https://www.codewars.com/kata/581e50555f59405743001813/train/javascript
// Author : Frank Faustino
// Date   : 2022-02-02

function anyMatch(head, p) {
    while (head) {
        if (p(head.data)) return true
        head = head.next
    }
    return false
}

function allMatch(head, p) {
    return !anyMatch(head, x => !p(x))
}

module.exports = {
    anyMatch,
    allMatch
}