// Source : https://www.codewars.com/kata/55908aad6620c066bc00002a
// Author : Frank Faustino
// Date   : 2024-02-14

// Time complexity  : O(n)
// Space complexity : O(1)
fn xo(string: &'static str) -> bool {
    let mut num_x = 0;
    let mut num_o = 0;

    for c in string.to_lowercase().chars() {
        if c == 'x' {
            num_x += 1;
        }
        if c == 'o' {
            num_o += 1;
        }
    }
    num_x == num_o
}

#[test]
fn returns_expected() {
    assert_eq!(xo("xo"), true);
    assert_eq!(xo("Xo"), true);
    assert_eq!(xo("xxOo"), true);
    assert_eq!(xo("xxxm"), false);
    assert_eq!(xo("Oo"), false);
    assert_eq!(xo("ooom"), false);
}

fn main() {
    print!("{}", xo("xo"));

    ()
}

