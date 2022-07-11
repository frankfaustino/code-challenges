// Source : https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039
// Author : Frank Faustino
// Date   : 2022-07-11

public class Kata {
    private static boolean hasDigit(long x, long d) {
        for (long i = x; i > 0; i = i / 10) {
            // Starting from x, divide by 10 (i.e., 44, 4, 0)
            if ((i % 10) == d) {
                // d matches remainder of i divided by 10 (44 % 10 === 4)
                return true;
            }
        }
        return false;
    }

    public static long[] NumbersWithDigitInside(long x, long d) {
        int count = 0;
        long sum = 0;
        long product = 1;

        for (long i = 1; i <= x; i++) {
            // Starting from 1, iterate until x
            if (hasDigit(i, d)) {
                count += 1;
                sum += i;
                product = product * i;
            }
        }

        if (count < 1) product = 0;
        return new long[] { count, sum, product };
    }
}
