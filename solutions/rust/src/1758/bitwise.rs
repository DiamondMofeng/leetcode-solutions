impl Solution {
  pub fn min_operations(s: String) -> i32 {
      let mut sit1 = 0;
      let mut sit2 = 0;
      for (i, c) in s.into_bytes().into_iter().enumerate() {
          sit1 += ((c - '0' as u8) as i32) ^ (i as i32 % 2);
          sit2 += ((c - '0' as u8) as i32) ^ (i as i32 % 2) ^ 1;
      }

      return std::cmp::min(sit1, sit2);
  }
}