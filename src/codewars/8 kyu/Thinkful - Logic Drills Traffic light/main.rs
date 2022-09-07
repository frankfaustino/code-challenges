fn update_light(current: &str) -> String {
    match current {
        "green" => "yellow",
        "yellow" => "red",
        _ => "green"
    }.into()
}

#[test]
fn basic_test() {
  assert_eq!(update_light("green"), "yellow");
  assert_eq!(update_light("yellow"), "red");
  assert_eq!(update_light("red"), "green");
}

fn main() {
    update_light("green");
}
