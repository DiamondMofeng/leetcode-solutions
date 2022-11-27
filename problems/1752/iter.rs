impl Solution {
  pub fn check(nums: Vec<i32>) -> bool {
      //只能有一个比后一项大的
      return nums
          .iter()
          .enumerate()
          .filter(|&(idx, n)| nums[(idx - 1 + nums.len()) % nums.len()] > *n)
          .count()
          <= 1;
  }
}