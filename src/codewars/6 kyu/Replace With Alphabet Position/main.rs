// Source : https://www.codewars.com/kata/546f922b54af40e1e90001da
// Author : Frank Faustino
// Date   : 2024-02-28

// Time complexity  : O(n)
// Space complexity : O(n + k) where k is the length of the string
fn alphabet_position(text: &str) -> String {
    let mut vec = Vec::new();

    for char in text.chars() {
        // to_lowercase() returns an iterator
        // next() returns the current value (wrapped in an Option) then advances the iterator
        // unwrap() unwraps the Option and returns the value
        let lowercase_char = char.to_lowercase().next().unwrap();
        // ensure it is a letter to avoid subtraction overflow panic
        if lowercase_char.is_alphabetic() {
            // b'a' = 97, byte literal for 'a'
            vec.push(lowercase_char as u8 - b'a' + 1);
        }
    }

    vec.iter().map(|x| x.to_string()).collect::<Vec<String>>().join(" ")
}

#[test]
fn returns_expected() {
    assert_eq!(
        alphabet_position("The sunset sets at twelve o' clock."),
        "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11".to_string()
    );
    assert_eq!(
        alphabet_position("The narwhal bacons at midnight."),
        "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20".to_string()
    );
}

fn main() {
    let text = "abcdefghijklmnopqrstuvwxyz";
    let position = alphabet_position(text);
    println!("{position}");
    let text = "The sunset sets at twelve o' clock.";
    let position = alphabet_position(text);
    println!("{position}");
}

