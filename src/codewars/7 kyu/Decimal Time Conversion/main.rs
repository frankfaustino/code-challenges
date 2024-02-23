// Converts standard time to decimal time
// Accepts the time in string of the form "hh:mm"
// Returns a float representing decimal time
// e.g., "1:45" => 1.75
fn string_to_industrial(time: &str) -> f64 {
    // Split the time into hours and minutes
    let time: Vec<&str> = time.split(":").collect();
    let hours: u32 = time[0].parse().unwrap();
    let minutes: u32 = time[1].parse().unwrap();
    // Convert to decimal time
    hours as f64 + to_industrial(minutes)
}

// Converts standard time to decimal time
// Accepts the time in minutes as an integer
// Returns a float representing decimal time
// e.g., 1 => 0.02
fn to_industrial(time: u32) -> f64 {
    // Round to a precision of 2 decimal places
    ((time as f64 / 60.0) * 100.0).round() / 100.0
}

// Converts decimal time to standard time
// Accepts a float representing decimal time
// Returns a string of the form "h:mm"
// e.g., 0.33 => "0:20"
fn to_normal(time: f64) -> String {
    let hours = time as u32;
    let minutes = (60.0 * time.fract()).round() as u32;
    format!("{}:{:02}", hours, minutes)
}

mod tests {
    use super::*;

    #[test]
    fn basic() {
        assert!(
            0.02 == to_industrial(1),
            "Testing to_industrial()\nInput: {}, Expected: {}, Actual: {}",
            1, 0.02, to_industrial(1)
        );
        assert!(
            0.03 == to_industrial(2),
            "Testing to_industrial()\nInput: {}, Expected: {}, Actual: {}",
            2, 0.03, to_industrial(2)
        );
        assert!(
            1.75 == to_industrial(105),
            "Testing to_industrial()\nInput: {}, Expected: {}, Actual: {}",
            105, 1.75, to_industrial(105)
        );
        assert!(
            0.05 == string_to_industrial("0:03"),
            "Testing string_to_industrial()\nInput: \"{}\", Expected: {}, Actual: {}",
            "0:03", 0.05, string_to_industrial("0:03")
        );
        assert!(
            0.07 == string_to_industrial("0:04"),
            "Testing string_to_industrial()\nInput: \"{}\", Expected: {}, Actual: {}",
            "0:04", 0.07, string_to_industrial("0:04")
        );
        assert!(
            1.75 == string_to_industrial("1:45"),
            "Testing string_to_industrial()\nInput: \"{}\", Expected: {}, Actual: {}",
            "1:45", 1.75, string_to_industrial("1:45")
        );
        assert!(
            "1:45" == to_normal(1.75),
            "Testing to_normal()\nInput: {}, Expected: {}, Actual: {}",
            1.75, "1:45", to_normal(1.75)
        );
        assert!(
            "0:20" == to_normal(0.33),
            "Testing to_normal()\nInput: {}, Expected: {}, Actual: {}",
            0.33, "0:20", to_normal(0.33)
        );
    }
}

fn main() {
    println!("{} should be 0.05", string_to_industrial("0:03"));
    println!("{} should be 0.07", string_to_industrial("0:04"));
    println!("{} should be 1.75", string_to_industrial("1:45"));
    println!("{} should be 0.02", to_industrial(1));
    println!("{} should be 0.03", to_industrial(2));
    println!("{} should be 1.75", to_industrial(105));
    println!("{} should be 0:20", to_normal(0.33));
    println!("{} should be 1:40", to_normal(1.66));
}

