impl Solution {
  pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {
      if nums.len() == 0 {
          return vec![];
      }

      let mut start = nums[0];
      let mut end = nums[0];
      let mut res = vec![];

      let mut put_res = |&start: &i32, &end: &i32| {
          if start == end {
              res.push(start.to_string());
          } else {
              res.push(format!("{start}->{end}"));
          }
      };

      for i in 1..nums.len() {
          let a = nums[i];
          if a != end + 1 {
              put_res(&start, &end);
              start = a;
          }
          end = a;
      }

      put_res(&start, &end);

      return res;
  }
}