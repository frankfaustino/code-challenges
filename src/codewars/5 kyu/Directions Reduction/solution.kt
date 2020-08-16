// Source : https://www.codewars.com/kata/550f22f4d758534c1100025a/train/kotlin
// Author : Frank Faustino
// Date   : 2020-08-16

import java.util.Stack

// Using a stack to keep track of previously seen directions and dictionary for easy look up
object DirReduction {
    val dictionary = mapOf(
            "NORTH" to "SOUTH",
            "SOUTH" to "NORTH",
            "EAST" to "WEST",
            "WEST" to "EAST"
    )

    fun dirReduc(arr: Array<String>): Array<String> = arr.fold(Stack<String>()) { stack, direction ->
        when {
            stack.isNotEmpty() && stack.peek() == dictionary[direction] -> stack.pop()
            else -> stack.push(direction)
        }
        stack
    }.toTypedArray()
}