impl Solution {
  pub fn circular_permutation(n: i32, start: i32) -> Vec<i32> {
      //从0生成grey code
      let mut i = 1;
      let mut bits = vec![0, 1];
      while i < n {
          i += 1;
          let rev_and_1_bits = bits
              .iter()
              .rev()
              .map(|&num| num | (1 << (i - 1)))
              .collect::<Vec<i32>>();
          bits = [bits, rev_and_1_bits].concat();
      }

      // println!("{bits:?}");
      // 旋转得到答案
      let start_idx = bits.iter().position(|&num| num == start).unwrap();
      return vec![&bits[start_idx..bits.len()], &bits[0..start_idx]].concat();
  }
}