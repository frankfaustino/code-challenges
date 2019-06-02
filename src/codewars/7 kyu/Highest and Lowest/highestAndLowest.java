// Source : https://www.codewars.com/kata/highest-and-lowest
// Author : Frank Faustino
// Date   : 2019-06-02

import java.util.Arrays;

public class Kata {
  public static String HighAndLow(String numbers) {
    int[] intArray = Arrays.stream(numbers.split(" ")).mapToInt(Integer::parseInt).toArray();
    Arrays.sort(intArray);

    return intArray[intArray.length - 1] + " " + intArray[0];
  }

  public static String HighAndLow2(String numbers) {
    int max = Integer.MIN_VALUE;
    int min = Integer.MAX_VALUE;
    String[] array = numbers.split(" ");

    for (String s: array) {
      int n = Integer.parseInt(s);

      max = Math.max(max, n);
      min = Math.min(min, n);
    }

    return max + " " + min;
  }

  public static void main(String[] args) {
    System.out.println(HighAndLow("1 2 3 4 5"));  // return "5 1"
    System.out.println(HighAndLow("1 2 -3 4 5")); // return "5 -3"
    System.out.println(HighAndLow("1 9 3 4 -5")); // return "9 -5"
    System.out.println(HighAndLow2("1 2 3 4 5"));  // return "5 1"
    System.out.println(HighAndLow2("1 2 -3 4 5")); // return "5 -3"
    System.out.println(HighAndLow2("1 9 3 4 -5")); // return "9 -5"
  }
}