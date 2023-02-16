use std::collections::HashMap;

impl Solution {
    pub fn number_of_pairs(nums: Vec<i32>) -> Vec<i32> {
        let mut map = HashMap::new();
        for n in &nums {
            *map.entry(n).or_insert(0) += 1;
        }

        let pairs = map.values().fold(0, |sum, &n| sum + n / 2);

        return vec![pairs, nums.len() as i32 - pairs * 2];
    }
}