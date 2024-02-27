// Time complexity  : O(1) n = 10 is a constant
// Space complexity : O(1)
fn create_phone_number(numbers: &[u8]) -> String {
    // format!("({}{}{}) {}{}{}-{}{}{}{}", numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5], numbers[6], numbers[7], numbers[8], numbers[9])

    // iter() creates an iterator
    // map() converts each u8 number into its corresponding String representation
    // collect() collects all the mapped values into a String
    let string: String = numbers.into_iter().map(|char| char.to_string()).collect();
    format!("({}) {}-{}", &string[..3], &string[3..6], &string[6..])
}

#[test]
fn returns_expected() {
  assert_eq!(create_phone_number(&[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  assert_eq!(create_phone_number(&[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
  assert_eq!(create_phone_number(&[1, 2, 3, 4, 5, 6, 7, 8, 9, 9]), "(123) 456-7899");
}

fn main() {}

