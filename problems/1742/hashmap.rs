use std::collections::HashMap;

fn get_sum_of_digits(mut num: i32) -> i32 {
    let mut sum = 0;
    while num > 0 {
        sum += num % 10;
        num /= 10;
    }
    sum
}

impl Solution {
    pub fn count_balls(low_limit: i32, high_limit: i32) -> i32 {

        let mut map = HashMap::new();
        for i in low_limit..=high_limit {
            *map.entry(get_sum_of_digits(i)).or_insert(0) += 1;
        }

        return *map.values().max().unwrap();
    }
}