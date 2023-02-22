impl Solution {
  pub fn stone_game_ii(piles: Vec<i32>) -> i32 {
      let n = piles.len();
      //状态转移：
      //i,M
      let mut dp = vec![vec![0; n + 1]; n];

      let mut sum = 0;
      for i in (0..n).rev() {
          sum += piles[i];
          for M in 1..n + 1 {
              if i + 2 * M >= n {
                  dp[i][M] = sum;
              } else {
                  for x in 1..=2 * M {
                      dp[i][M] = dp[i][M].max(sum - dp[i + x][std::cmp::max(x, M)]);
                  }
              }
          }
      }

      return dp[0][1];
  }
}