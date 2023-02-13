impl Solution {
  pub fn balanced_string(s: String) -> i32 {
      use std::collections::HashMap;

      let s = s.into_bytes();
      let target = s.len() / 4;
      let mut counter = HashMap::new();

      s.iter().for_each(|c| {
          *counter.entry(c).or_insert(0) += 1;
      });

      let check = |counter: &HashMap<_, _>| {
          return counter.values().all(|&count| count <= target);
      };

      if check(&counter) {
          return 0;
      }

      let mut res = s.len() - 1;

      let mut left: usize = 0;
      for (right, ch) in s.iter().enumerate() {
          // right向右走
          *counter.get_mut(ch).unwrap() -= 1;
          while check(&counter) {
              res = res.min(right - left + 1);
              //释放left
              *counter.get_mut(&s[left]).unwrap() += 1;
              left += 1;
          }
      }

      return res as i32;
  }
}