// Source : https://www.codewars.com/kata/5287e858c6b5a9678200083c
// Author : Frank Faustino
// Date   : 2024-02-28

// Time complexity  : O(n)
// Space complexity : O(1)
fn narcissistic(num: u64) -> bool {
    // log10() how many times to multiply 10 to get x
    // ceil() rounds the result to the nearest whole number
    // e.g., 150.log10() == 2.176.ceil() == 3
    // this effectively gives you the number of digits
    let exp = (num as f64).log10().ceil() as u32;
    let mut sum: u64 = 0;
    let mut n = num;

    while n > 0 {
        sum += (n % 10).pow(exp);
        n = n / 10
    }

    sum == num
}

#[cfg(test)]
mod tests {
    use super::*;

    fn dotest(input: u64, expected: bool) {
        let actual = narcissistic(input);
        assert_eq!(actual, expected, "\nIncorrect answer for n={}\nExpected: {expected}\nActual: {actual}", input)
    }

    #[test]
    fn basic_tests() {
        dotest(   7,  true);
        dotest( 371,  true);
        dotest( 122, false);
        dotest(4887, false);
    }
}

fn main() {
    println!("{:?}",narcissistic(100));
    println!("{:?}",narcissistic(101));
    println!("{:?}",narcissistic(150));
    println!("{:?}",narcissistic(1000));
    println!("{:?}",narcissistic(1001));
    println!("{:?}",narcissistic(10001));
    println!("{:?}",narcissistic(371));
    println!("{:?}",narcissistic(153));
    println!("{:?}",narcissistic(370));
    println!("{:?}",narcissistic(371));
    println!("{:?}",narcissistic(407));
    println!("{:?}",narcissistic(1634));
    println!("{:?}",narcissistic(8208));
    println!("{:?}",narcissistic(2446));
}
