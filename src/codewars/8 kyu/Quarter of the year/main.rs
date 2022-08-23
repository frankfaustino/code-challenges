fn quarter_of(month:  u8) -> u8 {
    /* match month {
        1..=3 => return 1,
        4..=6 => return 2,
        7..=9 => return 3,
        10..=12 => return 4,
        _ => unreachable!()
    } */
    (month + 2) / 3
}

fn main() {
    quarter_of(3);
    quarter_of(1);
    quarter_of(11);
}
