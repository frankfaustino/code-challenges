
// Source : https://www.codewars.com/kata/highest-and-lowest
// Author : Frank Faustino
// Date   : 2019-07-26

import java.util.HashMap;
import java.util.Map;

public class FindOdd {
  final public static int findIt(int[] a) {
    Map<Integer, Integer> map = new HashMap<>();

    for (int n : a) {
      if (map.containsKey(n)) {
        map.put(n, map.get(n) + 1);
      } else {
        map.put(n, 1);
      }
    }

    return map.entrySet().stream().filter(x -> x.getValue() % 2 == 1).map(Map.Entry::getKey).findFirst().orElse(null);
  }
}
