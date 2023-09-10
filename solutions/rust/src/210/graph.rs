impl Solution {
  pub fn find_order(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> Vec<i32> {
      let n = num_courses as usize;
      let mut graph = vec![vec![]; n];

      let mut ranks= vec![0; n];
      for pre in prerequisites.iter() {
          if let [to, from] = pre[..] {
              graph[from as usize].push(to);
              ranks[to as usize] += 1;
          }
      }

      let mut queue: Vec<usize> = ranks
          .iter()
          .enumerate()
          .filter(|(_, &r)| r == 0)
          .map(|(i, _)| i)
          .collect();

      let mut res = vec![];

      while let Some(from) = queue.pop() {
          res.push(from as i32);
          for &to in graph[from].iter() {
              ranks[to as usize] -= 1;
              if ranks[to as usize] == 0 {
                  queue.push(to as usize);
              }
          }
      }

      return if res.len() == n { res } else { vec![] };
  }
}
