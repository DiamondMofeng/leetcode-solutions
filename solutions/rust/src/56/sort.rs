impl Solution {
  pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
      let mut res = vec![];
      intervals.sort();

      let mut start = intervals[0][0];
      let mut end = intervals[0][1];

      for i in 1..intervals.len() {
          let new_start = intervals[i][0];
          let new_end = intervals[i][1];
          if new_start > end {
              res.push(vec![start, end]);
              start = new_start;
              end = new_end;
          } else {
              end = end.max(new_end);
          }
      }

      res.push(vec![start, end]);
      
      return res;
  }
}
