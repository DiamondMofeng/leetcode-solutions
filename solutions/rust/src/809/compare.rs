impl Solution {
  pub fn expressive_words(s: String, words: Vec<String>) -> i32 {
      type CharAndLen = (char, usize);
      fn getCharAndLens(s: &String) -> Vec<CharAndLen> {
          let mut charAndLens: Vec<CharAndLen> = Vec::new();
          for char in s.chars() {
              if (charAndLens.len() > 0 && charAndLens.last().unwrap().0 == char) {
                  charAndLens.last_mut().unwrap().1 += 1;
              } else {
                  charAndLens.push((char, 1));
              }
          }
          charAndLens
      }
      fn compare(vec1: &Vec<CharAndLen>, vec2: &Vec<CharAndLen>) -> bool {
          if (vec1.len() != vec2.len()) {
              return false;
          }

          for i in 0..vec1.len() {
              if (vec1[i].0 != vec2[i].0) {
                  return false;
              }
              if (vec1[i].1 < 3 && vec1[i].1 != vec2[i].1) {
                  return false;
              }
              if (vec1[i].1 >= 3 && vec1[i].1 < vec2[i].1) {
                  return false;
              }
          }

          true
      }
      let template = getCharAndLens(&s);
      return words
          .into_iter()
          .filter(|word| compare(&template, &getCharAndLens(word)))
          .count() as i32;
  }
}