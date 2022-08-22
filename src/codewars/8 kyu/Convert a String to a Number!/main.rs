fn string_to_number(s: &str) -> i32 {
    s.parse().unwrap()
}

fn main() {
    string_to_number("0");
    string_to_number("1234");
}
