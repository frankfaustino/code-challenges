// Source : https://www.codewars.com/kata/514b92a657cdc65150000006/train/kotlin
// Author : Frank Faustino
// Date   : 2020-08-15

// Find all multiples of 3 or 5 that's less than given number
// Sum the multiples
fun solution(number: Int): Int = (3 until number).filter { it % 3 == 0 || it % 5 == 0 }.sum()

solution(10) // 23
solution(20) // 78
solution(200) // 9168