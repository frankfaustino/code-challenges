// Source : https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// Author : Frank Faustino
// Date   : 2024-02-14

// Time complexity  : O(n log n)
// Space complexity : O(n)
fn descending_order(x: u64) -> u64 {
    let mut y = x;
    let mut vec = vec![];

    while y > 0 {
        vec.push(y % 10);
        y /= 10;
    }

    vec.sort();

    let mut output = 0;
    let mut mul = 1;

    for n in vec {
        output += n * mul;
        mul *= 10;
    }

    output
}

#[test]
fn returns_expected() {
    assert_eq!(descending_order(0), 0);
    assert_eq!(descending_order(1), 1);
    assert_eq!(descending_order(15), 51);
    assert_eq!(descending_order(1021), 2110);
    assert_eq!(descending_order(123456789), 987654321);
    assert_eq!(descending_order(145263), 654321);
    assert_eq!(descending_order(1254859723), 9875543221);
}

fn main() {
    print!("{}", descending_order(12345));

    ()
}

