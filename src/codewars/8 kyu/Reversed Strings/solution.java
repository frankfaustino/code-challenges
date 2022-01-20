// Source : https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/java
// Author : Frank Faustino
// Date   : 2022-01-20


public class Kata {

    public static String solution(String str) {

        String reversedStr = "";
        char ch;

        for (int i = 0; i < str.length(); i++) {
            ch = str.charAt(i);
            reversedStr = ch + reversedStr;
        }

        return reversedStr;
    }

}
