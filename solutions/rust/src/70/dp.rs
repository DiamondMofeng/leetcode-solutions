impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        (1..=n).fold((0, 1), |(p1, p2), _i| (p2, p1 + p2)).1
    }
}
