use std::iter::FromIterator;

impl Solution {
    pub fn sort_people(names: Vec<String>, heights: Vec<i32>) -> Vec<String> {
        let mut vec = Vec::from_iter(names.into_iter().zip(heights.into_iter()));
        vec.sort_by_key(|(name, h)| -*h);
        return vec.into_iter().map(|(name, h)| name).collect();
    }
}
