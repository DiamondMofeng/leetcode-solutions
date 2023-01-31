impl Solution {
  pub fn num_subarray_bounded_max(nums: Vec<i32>, left: i32, right: i32) -> i32 {
      let mut res = 0;
      let mut lastExceed = -1;
      let mut lastOk = -1;
      for (i, n) in nums.into_iter().enumerate() {
          let i = i as i32;

          if (n >= left && n <= right) {
              lastOk = i;
          }
          if (n > right) {
              lastExceed = i;
              lastOk = -1;
          }
          if (lastOk != -1) {
              res += (lastOk - lastExceed);
          }
      }

      return res;
  }
}