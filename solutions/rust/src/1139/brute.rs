impl Solution {
  pub fn largest1_bordered_square(grid: Vec<Vec<i32>>) -> i32 {
      let rowLen = grid.len();
      let colLen = grid[0].len();
      let mut dp = vec![grid.clone(), grid];

      let HORI = 0;
      let VERT = 1;

      for r in 0..rowLen {
          for c in 0..colLen {
              if r >= 1 {
                  dp[VERT][r][c] = if dp[VERT][r][c] == 0 {
                      0
                  } else {
                      dp[VERT][r - 1][c] + 1
                  };
              }

              if c >= 1 {
                  dp[HORI][r][c] = if dp[HORI][r][c] == 0 {
                      0
                  } else {
                      dp[HORI][r][c - 1] + 1
                  };
              }
          }
      }
      // println!("{dp:?}");
      let mut res = 0;
      //获取答案
      for r in (0..=rowLen - 1).rev() {
          for c in (0..=colLen - 1).rev() {
              // 右下角
              let max_side = std::cmp::min(dp[VERT][r][c], dp[HORI][r][c]);
              let max_side = std::cmp::min(max_side, std::cmp::min(r + 1, c + 1) as i32);
              if max_side <= res {
                  continue;
              }
              for len in (1..=max_side).rev() {
                  // +1因为起点是1而不是0
                  if dp[HORI][r + 1 - len as usize][c] >= len
                      && dp[VERT][r][c + 1 - len as usize] >= len
                  {   
                      // println!("{res},{len},{r},{c}");
                      res = res.max(len);
                      break;
                  }
              }
          }
      }

      return (res * res) as i32;
  }
}