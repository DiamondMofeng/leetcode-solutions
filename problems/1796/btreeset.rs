use std::collections::BTreeSet;

impl Solution {
    pub fn second_highest(s: String) -> i32 {
        let mut set = BTreeSet::new();
        for c in s.into_bytes() {
            if c <= b'9' {
                set.insert(c);
            }
        }

        return if (set.len() < 2) {
            -1
        } else {
            (*set.iter().skip(set.len() - 2).next().unwrap() - b'0') as i32
        };
    }
}