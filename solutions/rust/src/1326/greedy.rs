impl Solution {
  pub fn min_taps(n: i32, ranges: Vec<i32>) -> i32 {
      let mut range = ranges
          .iter()
          .enumerate()
          .map(|(i, &r)| (i as i32 - r, i as i32 + r))
          .collect::<Vec<_>>();

      range.sort();
      // 贪心

      // println!("{range:?}");
      let mut cnt = 0;
      let mut cur_left = 0; //下一个要达到的最小left

      let mut max_right = -1;

      let mut i = 0;
      while i <= n && cur_left < n {
          // 找到左侧能满足条件的右侧最大的水龙头
          let mut flag = false;
          while i <= n {
              let (left, right) = range[i as usize];
              if left > cur_left {
                  break;
              }
              flag = true;
              max_right = max_right.max(right);
              i += 1;
          }
          if !flag || (i > n && max_right < n) {
              return -1;
          }
          cnt += 1;
          cur_left = max_right;
      }

      return cnt;
  }
}