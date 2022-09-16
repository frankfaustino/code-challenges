use std::collections::HashMap;

use rand::Rng;

struct RandomizedSet {
    map: HashMap<i32, usize>,
    list: Vec<i32>
}

impl RandomizedSet {

    fn new() -> RandomizedSet {
        RandomizedSet { map: HashMap::new(), list: Vec::new() }
    }
    
    fn insert(&mut self, val: i32) -> bool {
        if self.map.contains_key(&val) {
            return false;
        }

        self.list.push(val);
        self.map.insert(val, self.list.len() - 1);

        true
    }
    
    fn remove(&mut self, val: i32) -> bool {
        if !self.map.contains_key(&val) {
            return false;
        }

        // swap the val to be removed with the last val in the list
        let index = self.map[&val];
        let last_index = self.list.len() - 1;
        let last_val = self.list[last_index];
        self.list.swap(index, last_index);

        self.list.pop();
        self.map.remove(&val);

        if val != last_val {
            // update the HashMap w/ swapped val's new index
            self.map.insert(last_val, index);
        }

        true
    }
    
    fn get_random(&self) -> i32 {
        let mut rng = rand::thread_rng();
        self.list[rng.gen_range(0..self.list.len())]
    }
}

fn main() {
    let mut obj = RandomizedSet::new();
    let ret_1: bool = obj.insert(1);
    assert_eq!(ret_1, true);
    let ret_2: bool = obj.remove(2);
    assert_eq!(ret_2, false);
    let ret_3: bool = obj.insert(2);
    assert_eq!(ret_3, true);
    let ret_4: i32 = obj.get_random();
    println!("get_random(): {}", ret_4);
    let ret_5: bool = obj.remove(1);
    assert_eq!(ret_5, true);
    let ret_6: bool = obj.insert(2);
    assert_eq!(ret_6, false);
    let ret_7: i32 = obj.get_random();
    println!("get_random(): {}", ret_7);
}
