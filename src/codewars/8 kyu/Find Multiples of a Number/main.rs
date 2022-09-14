
fn find_multiples(n: u32, limit: u32) -> Vec<u32> {
    // create iterator with inclusive range n through limit (e.g., 2,3,4,5,6)
    // "step by" each interation by adding n (e.g., 2,2+2,4+2)
    // collect the result into a vector of 32-bit unsigned ints
    (n..=limit).step_by(n as usize).collect()
}

/* fn find_multiples(n: u32, limit: u32) -> Vec<u32> {
    let mut multiple = n;
    let mut multiples = vec![];

    while multiple <= limit {
        multiples.push(multiple);
        multiple = multiple + n;
    }

    multiples
} */

// tests
#[cfg(test)]
mod tests {
    use super::find_multiples;

    #[test]
    fn basic_test() {
        assert_eq!(find_multiples(1, 2), [1, 2]);
        assert_eq!(find_multiples(5, 7), [5]);
        assert_eq!(find_multiples(4, 27), [4, 8, 12, 16, 20, 24]);
        assert_eq!(find_multiples(11, 54), [11, 22, 33, 44]);
        assert_eq!(find_multiples(5, 25), [5, 10, 15, 20, 25]);
    }
}

fn main() {
    find_multiples(2, 6);
}
