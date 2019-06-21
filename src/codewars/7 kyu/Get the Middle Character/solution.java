// Source : https://www.codewars.com/kata/56747fd5cb988479af000028
// Author : Frank Faustino
// Date   : 2019-06-21

class Kata {
  public static String getMiddle(String word) {
    String output = "";
    int length = word.length();
    int mid = length / 2;

    if (length % 2 == 0) {
      output = word.substring(mid - 1, mid + 1);
    } else {
      output = String.valueOf(word.charAt(mid));
    }

    return output;
  }
}