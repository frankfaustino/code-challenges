fn make_upper_case(s: &str) -> String {
    s.to_uppercase()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_make_upper_case() {
        assert_eq!(make_upper_case("hello"), "HELLO");
    }
}

fn main() {
    make_upper_case("hello");
}
