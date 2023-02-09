impl Solution {
  pub fn die_simulator(n: i32, roll_max: Vec<i32>) -> i32 {
      const MOD: i64 = 100_000_000_7;

      let n = n as usize;
      let max_time = *roll_max.iter().max().unwrap() as usize;

      // [第n次操作][骰子值][连续了多少次]
      let mut dp = vec![vec![vec![0; max_time]; 6]; n];

      // 初始化
      for val in 0..6 {
          dp[0][val][0] = 1;
      }

      for i in 1..n {
          for val in 0..6 {
              let mut sum = 0;
              // 从其他骰子值转移过来, 更新本val[0]的值
              for other_val in 0..6 {
                  if other_val == val {
                      continue;
                  }

                  //加上上一次的值
                  sum += dp[i - 1][other_val].iter().sum::<i64>() % MOD;
              }
              dp[i][val][0] = sum;

              // 与上次骰子值相同
              for con in 1..roll_max[val] as usize {
                  dp[i][val][con] = dp[i - 1][val][con - 1];
              }
          }
      }

      // println!("{:?}", dp);

      return dp[n - 1].iter().fold(0, |sum, sub_arr1| {
          (sum + ((*sub_arr1).iter().fold(0, |sum, cur| sum + *cur) % MOD)) % MOD
      }) as i32;
  }
}