impl Solution {
  pub fn min_operations(boxes: String) -> Vec<i32> {
      //不暴力 O(n)
      let mut left_balls = 0;
      let mut right_balls = 0;

      let mut start_diff = 0;

      let boxes=boxes.as_bytes();
      for (i, char) in boxes.iter().enumerate() {
          if (*char == '1' as u8) {
              right_balls += 1;
              start_diff += i as i32;
          }
      }

      let mut res = vec![0; boxes.len()];

      for (i, count) in res.iter_mut().enumerate() {
          *count = start_diff;
          if (boxes[i] == '1' as u8) {
              right_balls -= 1;
              left_balls += 1;
          }
          start_diff -= (right_balls - left_balls);
      }

      res
  }
}