impl Solution {
  pub fn decode_message(key: String, message: String) -> String {
      use std::iter::FromIterator;

      let mut passwd = [0; 26];
      let mut value = b'a';
      for char in key.as_bytes() {
          if *char < b'a' || *char > b'z' {
              continue;
          }

          let idx = (*char - b'a') as usize;
          if passwd[idx] == 0 {
              passwd[idx] = value;
              value += 1;
          }

          if value > b'z' {
              break;
          }
      }

      return String::from_iter(message.bytes().map(|c| {
          if c < b'a' || c > b'z' {
              return c as char;
          } else {
              return passwd[(c - b'a') as usize] as char;
          }
      }));
  }
}