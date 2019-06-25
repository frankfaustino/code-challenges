// Source : https://www.codewars.com/kata/money-money-money/java
// Author : Frank Faustino
// Date   : 2019-06-24
// Lang   : Java

public class Money {
  public static int calculateYears(double principal, double interest, double tax, double desired) {
    int years = 0;

    while (principal < desired) {
      principal += principal * interest * (1 - tax);
      years++;
    }

    return years;
  }
}