use std::cmp::min;

fn find_smallest_int(arr: &[i32]) -> i32 {
    let mut smallest_int: i32 = arr[0];

    for int in arr  {
        smallest_int = min(smallest_int, *int);
    }

    return smallest_int;
}

fn main() {
    find_smallest_int(&[34, 15, 88, 2]); // 2
    find_smallest_int(&[34, -345, -1, 100]); // -345
}
