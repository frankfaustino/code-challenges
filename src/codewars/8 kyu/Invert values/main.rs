fn invert(values: &[i32]) -> Vec<i32> {
    // create an interator of the vector slice,
    // map transform each element by multiplying by -1
    // "inverting" its value (i.e., 69 -> -69, -8 -> 8)
    // finally, transform iterator into a collection
    // in this case, a vector containing 32-bit signed ints
    values.iter().map(|n| n * -1).collect()
}

// tests
#[cfg(test)]
mod tests {
    use super::invert;

    #[test]
    fn basic_tests() {
        assert_eq!(invert(&vec![1,2,3,4,5]), vec![-1,-2,-3,-4,-5]);
        assert_eq!(invert(&vec![1,-2,3,-4,5]), vec![-1,2,-3,4,-5]);
        assert_eq!(invert(&vec![]), vec![]);
    }
}

fn main() {
    invert(&vec![1,2,3,4,5]); // [-1,-2,-3,-4,-5]
}
