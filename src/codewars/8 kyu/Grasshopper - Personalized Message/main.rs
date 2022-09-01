fn greet(name: &str, owner: &str) -> String {
    match name == owner {
        true => "Hello boss".to_string(),
        false => "Hello guest".to_string()
    }

    // let greeting = if name == owner {
        // "boss"
    // } else {
        // "guest"
    // };
    
    // return format!("Hello {}", greeting);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_greet() {
        assert_eq!(greet("Daniel", "Daniel"), "Hello boss");
        assert_eq!(greet("Greg", "Daniel"), "Hello guest");
    }
}

fn main() {
    greet("Bob", "Nirmala");
}
