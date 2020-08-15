// Source : https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/kotlin
// Author : Frank Faustino
// Date   : 2020-08-14

// Split the string into a List of words
// Sum the letters in each word by their ASCII values - 96 so that a = 1, b = 2, so on...
// Filter the word with the highest sum 
fun high(str: String): String = str.split(" ").maxBy { it.sumBy { it.toInt() - 96 } }.toString()
