// Source : https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/java
// Author : Frank Faustino
// Date   : 2019-07-10
// Lang   : Java

import java.util.Arrays;

// a)
public class Positive {
  public static int sum(int[] arr) {
    int result = 0;

    for (int i = 0; i < arr.length; i++) {
      if (i > 0) {
        result += arr[i];
      }
    }

    return result;
  }
}

// b)
public class Positive2 {
  public static int sum(int[] arr) {
    int result = 0;

    for (int i : arr) {
      if (i > 0) {
        result += i;
      }
    }

    return result;
  }
}

// c)
public class Positive3 {
  public static int sum(int[] arr) {
    return Arrays.stream(arr).filter(v -> v > 0).sum();
  }
}
