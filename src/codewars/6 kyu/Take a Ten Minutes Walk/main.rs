// Source : https://www.codewars.com/kata/54da539698b8a2ad76000228
// Author : Frank Faustino
// Date   : 2024-02-27

// Time complexity  : O(n)
// Space complexity : O(1)
fn is_valid_walk(walk: &[char]) -> bool {
    let mut n = 0;
    let mut s = 0;
    let mut e = 0;
    let mut w = 0;

    for direction in walk {
        match direction {
            'n' => n += 1,
            's' => s += 1,
            'e' => e += 1,
            'w' => w += 1,
            _ => return false
        }
    }

    walk.len() == 10 && n == s && e == w
}

#[cfg(test)]
mod tests {
    use super::is_valid_walk;

    #[test]
    fn sample_tests() {
        assert!(  is_valid_walk(&['n','s','n','s','n','s','n','s','n','s']));
        assert!(! is_valid_walk(&['w','e','w','e','w','e','w','e','w','e','w','e']));
        assert!(! is_valid_walk(&['w']));
        assert!(! is_valid_walk(&['n','n','n','s','n','s','n','s','n','s']));
        assert!(! is_valid_walk(&['e', 'e', 'e', 'e', 'w', 'w', 's', 's', 's', 's']))
    }
}

fn main() {
    println!("{}", is_valid_walk(&['n','s','n','s','n','s','n','s','n','s']));
}

