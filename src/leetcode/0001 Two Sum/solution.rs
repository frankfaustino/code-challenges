// Source : https://leetcode.com/problems/two-sum/
// Author : Frank Faustino
// Date   : 2024-03-05

use std::collections::HashMap;

struct Solution;

// Returns the indices of two numbers that add up to the specified target
// Time complexity  : O(n)
// Space complexity : O(n)
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map: HashMap<i32, i32> = HashMap::new();

        for (i, n) in nums.iter().enumerate() {
            let diff = target - n;
            if map.contains_key(&diff) {
                let left = map.get(&diff).unwrap();
                return vec![*left, i as i32]
            }
            map.entry(*n).or_insert(i as i32);
        }
        
        Vec::new()
    }
}

#[test]
fn test() {
    assert_eq!(Solution::two_sum(vec![2,7,11,15], 9), vec![0, 1]);
    assert_eq!(Solution::two_sum(vec![3, 2, 4], 6), vec![1, 2]);
    assert_eq!(Solution::two_sum(vec![3, 3], 6), vec![0, 1]);
}

fn main() {
    println!("{:?}", Solution::two_sum(vec![2,7,11,15], 9)); // [0,1]
    println!("{:?}", Solution::two_sum(vec![1,9,13,20,47], 10)); // [0,1]
    println!("{:?}", Solution::two_sum(vec![3,2,4,1,9], 12)); // [0,4]
    println!("{:?}", Solution::two_sum(vec![], 10)); // []
}

