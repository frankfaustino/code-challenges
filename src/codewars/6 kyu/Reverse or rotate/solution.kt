// Source : https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/train/kotlin
// Author : Frank Faustino
// Date   : 2020-08-14

// a
fun revRot(nums: String, sz: Int): String = when {
    sz <= 0 -> ""
    else -> nums.chunked(sz).dropLastWhile { it.length != sz }.map {
        if (it.sumBy { it - '0' } % 2 == 0) it.reversed() else it.drop(1) + it.first()
    }.joinToString("")
}

// b
fun revRot(nums: String, sz: Int): String {
    var output = ""

    if (sz <= 0) return output

    var n = 0
    while (n + sz <= nums.length - 1) {
        // Cut string into chunks of the size sz
        val chunk = nums.substring(n until n + sz)
        // Ignore the last chunk if its size is less than sz
        if (chunk.length == sz) {
            // it - '0' (subtracting Chars in Kotlin results in an Int)
            val sum = chunk.sumBy { it - '0' }
            output += if (sum % 2 == 0) {
                // Reverse the chunk, if the sum of chunk's digits cubed is divisible by 2
                chunk.reversed()
            } else {
                // Otherwise, "rotate" the chunk to the left by 1 index
                chunk.drop(1) + chunk.first()
            }
        }
        n += sz
    }

    return output
}