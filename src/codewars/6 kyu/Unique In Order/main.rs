// Source : https://www.codewars.com/kata/54e6533c92449cc251001667
// Author : Frank Faustino
// Date   : 2024-03-06

// Time complexity : O(n)
// Space complexity: O(n)
fn unique_in_order<T>(sequence: T) -> Vec<T::Item>
where
    T: std::iter::IntoIterator,
    T::Item: std::cmp::PartialEq + std::fmt::Debug + Clone,
{
    let mut output: Vec<T::Item> = Vec::new();
    let mut iter = sequence.into_iter();

    if let Some(first) = iter.next() {
        output.push(first.clone());
        let mut current_element = first;

        for element in iter {
            if element != current_element {
                output.push(element.clone());
                current_element = element;
            }
        }
    }

    output
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sample_test() {
        assert_eq!(unique_in_order("AAAABBBCCDAABBB".chars()), vec!['A','B','C','D','A','B']);
    }
}

fn main() {
    unique_in_order("OOOOOOOMMMMMMMMGGGGGG".chars()); // vec!['O','M','G']);
    unique_in_order([6,6,6,6,6,6,6,6,9,9,9,9,9,9,9,9,9]); // vec![6,9]);
    unique_in_order("55555aaaBBCCCCCCCCCCCCddeF666".chars()); // vec!['5','a','B','C','d','e','F','6']);
}

