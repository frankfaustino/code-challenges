// Source : https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc
// Author : Frank Faustino
// Date   : 2024-03-02

use std::collections::HashMap;

// Time complexity  : O(n log n)
// Space complexity : O(n)
fn solve(vec: &[i32]) -> Vec<i32> {
    let mut frequency_map: HashMap<i32, i32> = HashMap::new();

    // get the frequency of each number
    for item in vec {
        *frequency_map.entry(*item).or_insert(0) += 1;
    }

    // sort by frequency descending, then by value ascending
    let mut frequency_sort: Vec<_> = frequency_map.iter().collect();

    frequency_sort.sort_by(|a, b| {
        b.1.cmp(&a.1)
            .then_with(|| a.0.cmp(&b.0))
    });

    // construct the "sorted" vector
    let mut output: Vec<i32> = Vec::new();

    for (value, frequency) in frequency_sort {
        for _ in 0..*frequency {
            output.push(*value);
        }
    }

    output
}

#[cfg(test)]
mod tests {
    use super::solve;

    #[test]
    fn basic_tests() {
        assert_eq!(solve(&vec![2,3,5,3,7,9,5,3,7]), vec![3,3,3,5,5,7,7,2,9]);
        assert_eq!(solve(&vec![1,2,3,0,5,0,1,6,8,8,6,9,1]), vec![1,1,1,0,0,6,6,8,8,2,3,5,9]);
        assert_eq!(solve(&vec![5,9,6,9,6,5,9,9,4,4]), vec![9,9,9,9,4,4,5,5,6,6]);
        assert_eq!(solve(&vec![4,4,2,5,1,1,3,3,2,8]), vec![1,1,2,2,3,3,4,4,5,8]);
        assert_eq!(solve(&vec![4,9,5,0,7,3,8,4,9,0]), vec![0,0,4,4,9,9,3,5,7,8]);
    }
}

fn main() {
    solve(&vec![2,3,5,3,7,9,5,3,7]);
}

