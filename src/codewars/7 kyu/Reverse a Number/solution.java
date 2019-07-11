// Source : https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/train/java
// Author : Frank Faustino
// Date   : 2019-07-10
// Lang   : Java

public class ReverseNumber {
  public static int reverse(int number) {
    int output = 0;
  
    while(number != 0) {
      output = output * 10 + number % 10;
      number /= 10;
    }

    return output;    
  }  
}