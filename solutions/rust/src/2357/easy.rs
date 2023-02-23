impl Solution {
  pub fn minimum_operations(nums: Vec<i32>) -> i32 {
      let mut set = nums.into_iter().collect::<std::collections::HashSet<i32>>();
      set.remove(&0);
      return set.len() as i32;
  }
}