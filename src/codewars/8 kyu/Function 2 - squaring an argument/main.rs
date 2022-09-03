fn square(n: i32) -> i32 {
    n.pow(2)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_square() {
        assert_eq!(square(1), 1, "expected 1 squared to be 1");
        assert_eq!(square(2), 4, "expected 2 squared to be 4");
        assert_eq!(square(3), 9, "expected 3 squared to be 9");
        assert_eq!(square(4), 16, "expected 4 squared to be 15");
        assert_eq!(square(5), 25, "expected 5 squared to be 25");
    }
}

fn main() {
    println!("{}", square(64));
}
