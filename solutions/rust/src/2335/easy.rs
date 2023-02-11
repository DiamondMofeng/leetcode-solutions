impl Solution {
  pub fn fill_cups(mut amount: Vec<i32>) -> i32 {
      // 就三个数，不用优先队列了
      let mut res = 0;
      amount.sort_by(|a, b| b.cmp(a));

      while amount[1] > 0 {
          amount[0] -= 1;
          amount[1] -= 1;
          res += 1;
          amount.sort_by(|a, b| b.cmp(a));
      }

      return res + amount[0];
  }
}