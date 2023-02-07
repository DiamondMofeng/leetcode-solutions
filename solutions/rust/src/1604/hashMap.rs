impl Solution {
  pub fn alert_names(key_name: Vec<String>, key_time: Vec<String>) -> Vec<String> {
      use std::collections::HashMap;
      use std::str::FromStr;

      let mut map: HashMap<String, Vec<i32>> = HashMap::new();

      key_name
          .into_iter()
          .zip(key_time.iter())
          .for_each(|(name, time)| {
              let time = i32::from_str(&time[0..=1]).unwrap() * 60
                  + i32::from_str(&time[3..=4]).unwrap();

              map.entry(name).or_default().push(time)
          });

      let mut res = vec![];

      map.into_iter().for_each(|(name, mut times)| {
          times.sort();
          for begin in 0..times.len() - 2 {
              if times[begin + 2] - times[begin] <= 60 {
                  res.push(name);
                  break;
              }
          }
      });

      res.sort();

      return res;
  }
}