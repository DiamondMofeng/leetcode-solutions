impl Solution {
  pub fn longest_wpi(hours: Vec<i32>) -> i32 {
      let mut presum: Vec<i32> = vec![0; hours.len() + 1];
      for (i, &n) in hours.iter().enumerate() {
          presum[i + 1] = presum[i] + if n > 8 { 1 } else { -1 };
      }

      // 单调栈，存的是下标
      let mut stack = vec![0];

      for (i, &n) in presum.iter().enumerate() {
          if n < presum[*stack.last().unwrap()] {
              stack.push(i);
          }
      }

      let mut res: i32 = 0;
      for (i, &n) in presum.iter().enumerate().rev() {
          while stack.len() > 0 && n > presum[*stack.last().unwrap()] {
              let last = stack.pop().unwrap();
              res = res.max(i as i32 - last as i32);
          }
      }

      return res;
  }
}