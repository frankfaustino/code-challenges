// Source : https://www.codewars.com/kata/55c45be3b2079eccff00010f
// Author : Frank Faustino
// Date   : 2024-03-03

// Time complexity  : O(n)
// Space complexity : O(n)
fn order(sentence: &str) -> String {
    let vec: Vec<&str> = sentence.split_whitespace().collect();
    let mut output: Vec<&str> = vec![""; vec.len()];

    for word in vec {
        let index = word.chars()
            .find(|c| c.is_ascii_digit())
            .expect("No digit found")
            .to_digit(10)
            .expect("Failed to covert digit to number") as usize;
        output[index - 1] = word;
    }

    output.join(" ")
}

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn returns_expected() {
        assert_eq!(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
        assert_eq!(order(""), "");
    }
}

fn main() {
    println!("{}", order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
}

