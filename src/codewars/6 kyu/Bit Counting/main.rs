// Source : https://www.codewars.com/kata/526571aae218b8ee490006f4
// Author : Frank Faustino
// Date   : 2024-02-27

// Time complexity  : O(log n)
// Space complexity : O(1)
fn count_bits(mut n: i64) -> u32 {
    // n.count_ones()

    let mut num_of_bits: u32 = 0;

    while n > 0 {
        if n % 2 == 1 {
            num_of_bits += 1;
        }
        n = n / 2;
    }

    num_of_bits
}

#[test]
fn returns_expected() {
    assert_eq!(count_bits(0), 0);
    assert_eq!(count_bits(4), 1);
    assert_eq!(count_bits(7), 3);
    assert_eq!(count_bits(9), 2);
    assert_eq!(count_bits(10), 2);
}

fn main() {
    let num_of_bits = count_bits(10);
    println!("{num_of_bits}");
}

