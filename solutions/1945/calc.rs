impl Solution {
  pub fn get_lucky(s: String, k: i32) -> i32 {
      // 一直用int来计算，不用字符串
      fn getSumOfNum(mut n: i32) -> i32 {
          let mut res = 0;
          while (n > 0) {
              res += n % 10;
              n /= 10;
          }
          return res;
      }

      let mut num = s.into_bytes().into_iter().fold(0, |sum, c| {
          return sum + getSumOfNum((c - b'a' + 1) as i32);
      });

      for _ in 1..k {
          num = getSumOfNum(num);
      }

      return num;
  }
}