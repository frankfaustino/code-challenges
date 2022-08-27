fn get_volume_of_cuboid(length: f32, width: f32, height: f32) -> f32 {
    return length * width * height;
}

fn main() {
    get_volume_of_cuboid(1.0, 2.0, 2.0); // 4.0
    get_volume_of_cuboid(6.3, 2.0, 5.0); // 63.0
}
