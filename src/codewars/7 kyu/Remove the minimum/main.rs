// Source : https://www.codewars.com/kata/563cf89eb4747c5fb100001b
// Author : Frank Faustino
// Date   : 2024-02-16

use std::u32::MAX;

// Time complexity  : O(n)
// Space complexity : O(n)
fn remove_smallest(numbers: &[u32]) -> Vec<u32> {
    let mut min = MAX;
    let mut min_index = 0;
    // find the smallest number, track its index
    for i in 0..numbers.len() {
        if numbers[i] < min {
            min = numbers[i];
            min_index = i;
        }
    }
    // remove the smallest number at the found index from the vector
    // collect the remaining elements and return new vector
    numbers.iter()
        .enumerate()
        .filter_map(|(index, &value)| {
            if index != min_index {
                Some(value)
            } else {
                None
            }
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::remove_smallest;
    
    const ERR_MSG: &str = "\nYour result (left) did not match the expected output (right)";
    
    fn dotest(a: &[u32], expected: &[u32]) {
        assert_eq!(remove_smallest(a), expected, "{ERR_MSG} with numbers = {a:?}")
    }

    #[test]
    fn fixed_tests() {
        dotest(&[1, 2, 3, 4, 5], &[2, 3, 4, 5]);
        dotest(&[1, 2, 3, 4], &[2, 3, 4]);
        dotest(&[5, 3, 2, 1, 4], &[5, 3, 2, 4]);
        dotest(&[1, 2, 3, 1, 1], &[2, 3, 1, 1]);
    }
}

fn main() {
    let vec: [u32; 5] = [1, 2, 3, 4, 5];
    print!("{:?}", remove_smallest(&vec));
    ()
}

