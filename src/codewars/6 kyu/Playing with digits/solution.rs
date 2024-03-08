// Source : https://www.codewars.com/kata/5552101f47fc5178b1000050
// Author : Frank Faustino
// Date   : 2024-03-07

// Time complexity  : O(d) d = number of digits in n
// Space complexity : O(d)
fn dig_pow(n: i64, p: i32) -> i64 {
    let digits = n.to_string();
    let mut exponent = p as u32;
    let mut sum: i64 = 0;

    for digit in digits.chars() {
        let d = digit.to_digit(10).unwrap() as i64;
        sum += d.pow(exponent) as i64;
        exponent += 1;
    }

    if sum % n == 0 {
        sum as i64 / n
    } else {
        -1
    }
}

#[cfg(test)]
    mod tests {
    use super::*;

    fn dotest(n: i64, p: i32, exp: i64) -> () {
        println!("n: {:?};", n);
        println!("p: {:?};", p);
        let ans = dig_pow(n, p);
        println!("actual:\n{:?};", ans);
        println!("expect:\n{:?};", exp);
        println!("{};", ans == exp);
        assert_eq!(ans, exp);
        println!("{};", "-");
    }
    
    #[test]
    fn basic_tests() {
        dotest(89, 1, 1);
        dotest(92, 1, -1);
        dotest(46288, 3, 51);
    }
}

fn main() {
    dig_pow(46288, 3); // 51
    dig_pow(89, 1); // 1
    // let ans = dig_pow(92, 1); // -1
    let ans = dig_pow(46288, 5); // -1
    println!("{ans}");
}
