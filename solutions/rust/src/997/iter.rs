impl Solution {
  pub fn find_judge(n: i32, trust: Vec<Vec<i32>>) -> i32 {
      let n = n as usize;

      let mut trusts_sent = Vec::with_capacity(n);
      let mut trusts_received = Vec::with_capacity(n);
      trusts_sent.resize(n, 0);
      trusts_received.resize(n, 0);

      for t in trust {
          trusts_sent[(t[0] - 1) as usize] += 1;
          trusts_received[(t[1] - 1) as usize] += 1;
      }

      for (idx, (sent, received)) in trusts_sent
          .into_iter()
          .zip(trusts_received.into_iter())
          .enumerate()
      {
          if (sent == 0 && received == n - 1) {
              return (idx + 1) as i32;
          }
      }
      return -1;
  }
}