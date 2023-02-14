impl Solution {
  pub fn is_good_array(nums: Vec<i32>) -> bool {
      fn gcd(a: i32, b: i32) -> i32 {
          return if b == 0 { a } else { gcd(b, a % b) };
      }
      return nums.into_iter().reduce(gcd).unwrap() == 1;
  }
}