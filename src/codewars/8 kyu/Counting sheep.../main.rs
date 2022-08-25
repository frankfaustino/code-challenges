fn count_sheep(sheep: &[bool]) -> u8 {
    sheep                // take the sheep array
        .iter()          // turn it into an iterable
        .filter(|&&x| x) // filter for only true values
                         // (&& destructures the double reference)
        .count() as u8   // count the num of elements in the filtered array
}

fn count_sheep_for_in(sheep: &[bool]) -> u8 {
    let mut output: u8 = 0;

    for x in sheep.iter() {
        if *x == true {
            output += 1;
        }
    }

    return output;
}

fn main() {
    count_sheep(&[false]); // 0
    count_sheep(&[true]); // 1
    count_sheep(&[true, false]); // 1
    count_sheep_for_in(&[true, false]); // 1
}
