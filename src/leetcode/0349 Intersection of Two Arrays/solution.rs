use std::collections::HashSet;
use std::iter::FromIterator;

struct Solution;
impl Solution {
    pub fn intersection(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
         HashSet::<i32>::from_iter(nums1)
            .intersection(&HashSet::<i32>::from_iter(nums2))
            .map(|&n| n)
            .collect()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test() {
        let nums1 = vec![1, 2, 2, 1];
        let nums2 = vec![2, 2];
        assert_eq!(Solution::intersection(nums1, nums2), vec![2]);

        let nums1 = vec![4, 9, 5];
        let nums2 = vec![9, 4, 9, 8, 4];
        assert_eq!(Solution::intersection(nums1, nums2), vec![4, 9]);
    }
}

